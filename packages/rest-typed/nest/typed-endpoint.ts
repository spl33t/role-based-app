import { Endpoint } from "@packages/rest-typed/lib";
import {
  applyDecorators,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  SetMetadata,
  UseInterceptors,
} from '@nestjs/common';
import { TsRestAppRouteMetadataKey } from "./constants";
import { TsRestInterceptor } from "./interceptor";

const getMethodDecorator = (endpoint: Endpoint) => {
  switch (endpoint.method) {
    case 'GET':
      return Get(endpoint.path);
    case 'POST':
      return Post(endpoint.path);
    case 'PATCH':
      return Patch(endpoint.path);
    case 'PUT':
      return Put(endpoint.path);
    case 'DELETE':
      return Delete(endpoint.path);
  }
};


export const TypedEndpoint = (endpoint: Endpoint) => {
  const decorators = [];

  const isMethodDecorator = 'path' in endpoint;

  if (isMethodDecorator) {
    decorators.push(
      ...[
        SetMetadata(TsRestAppRouteMetadataKey, endpoint),
        getMethodDecorator(endpoint),
        UseInterceptors(TsRestInterceptor),
      ]
    );
  }
  return applyDecorators(...decorators);
};