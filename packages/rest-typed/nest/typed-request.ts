import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';
import type { Request } from 'express-serve-static-core';
import { TsRestAppRouteMetadataKey, } from './constants';
import { Endpoint } from "@packages/rest-typed/lib";
import { SafeParseError } from "zod/lib/types";

export const TypedRequest = createParamDecorator(
  (_: unknown, ctx: ExecutionContext) => {
    const req: Request = ctx.switchToHttp().getRequest();

    const endpoint: Endpoint | undefined = Reflect.getMetadata(
      TsRestAppRouteMetadataKey,
      ctx.getHandler()
    );

    if (!endpoint) {
      // this will respond with a 500 error without revealing this error message in the response body
      throw new Error('Make sure your endpoint is decorated with @TsRest()');
    }

    const bodyValidation = endpoint.method !== "GET" ? endpoint.body.safeParse(req.body) : undefined
    if (bodyValidation && !bodyValidation.success) {
      throw new BadRequestException((bodyValidation as SafeParseError<any>).error);
    }

    const queryValidation = endpoint.query?.safeParse(req.query)
    if (queryValidation && !queryValidation.success) {
      throw new BadRequestException((queryValidation as SafeParseError<any>).error);
    }

    return {
      params: req.params,
      body: bodyValidation?.success ? bodyValidation.data : req.body,
      query: queryValidation?.success ? queryValidation.data : req.query,
      headers: req.headers
    };
  }
);
