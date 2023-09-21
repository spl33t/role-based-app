import { z, ZodSchema, ZodTypeAny } from "zod";
import { ParamsFromUrl } from "./paths"
import { Prettify, Without } from "./type-utils";
import { IncomingHttpHeaders } from "node:http";

type ZodInferOrNever<T extends ZodTypeAny | undefined> = T extends ZodTypeAny ? z.infer<T> : never

export type ServerInferRequest<T extends Endpoint> = Prettify<Without<{
  params: ParamsFromUrl<T['path']>
  query: ZodInferOrNever<T["query"]>
  body: T extends EndpointMutation ? ZodInferOrNever<T["body"]> : never
  headers: IncomingHttpHeaders;
}, never>>

export type ControllerRequests<T extends Controller> = {
  [K in keyof T["endpoints"]]: ServerInferRequest<T["endpoints"][K]>
}

type EndpointQuery = EndpointCommon & {
  method: 'GET';
};

type EndpointMutation = EndpointCommon & {
  method: 'POST' | 'DELETE' | 'PUT' | 'PATCH';
  contentType?: 'application/json' | 'multipart/form-data';
  body: ZodSchema;
};

export type Endpoint = EndpointQuery | EndpointMutation;

export type EndpointCommon = {
  path: string,
  response: ZodSchema,
  query?: ZodSchema
}

export type Controller = {
  prefix: string,
  endpoints: Record<string, Endpoint>
}

type RecursivelyProcessController<T extends Controller | Record<any, Endpoint>> = {
  [K in keyof T]: T[K] extends Record<any, Endpoint> ? RecursivelyProcessController<T[K]> : T[K]
};

export function initController<T extends Controller>(controller: RecursivelyProcessController<T>) {
  return controller as T
}

export type GetResponsesData<T extends Endpoint> = z.infer<T["response"]>