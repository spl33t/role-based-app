import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import {
  TsRestAppRouteMetadataKey,
} from './constants';
import type { Response } from 'express-serve-static-core';
import { Endpoint } from "@packages/rest-typed";

@Injectable()
export class TsRestInterceptor implements NestInterceptor {
  constructor(private reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const res: Response = context.switchToHttp().getResponse();

    const endpoint = this.reflector.get<Endpoint | undefined>(
      TsRestAppRouteMetadataKey,
      context.getHandler()
    );

    if (!endpoint) {
      // this will respond with a 500 error without revealing this error message in the response body
      throw new Error('Make sure your endpoint is decorated with @TsRest()');
    }

    /*    const isValidationEnabled = Boolean(
          this.reflector.getAllAndOverride<boolean | undefined>(
            ValidateResponsesSymbol,
            [context.getHandler(), context.getClass()]
          )
        );*/

    return next.handle().pipe(
      map((value) => {

        if (endpoint.method !== 'GET')
          if (endpoint.contentType) {
            res.setHeader('content-type', endpoint.contentType);
          }

        //ADD VALIDATION RESPONSE BY CONDITIONAL

        return value;
      })
    );
  }
}