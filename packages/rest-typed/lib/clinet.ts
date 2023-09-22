import { Endpoint, GetResponsesData, initController, ServerInferRequest } from "@packages/rest-typed";
import { insertParamsIntoPath } from "@packages/rest-typed/lib/paths";

type RequestParams = { params?: any, body?: any, query?: any }
type FetcherInput = { method: Endpoint["method"], path: string, body?: any, query?: any }

export function initClient<T extends ReturnType<typeof initController>, Fetcher = (...args: any) => Promise<any>>(
  controller: T,
  options: {
    fetcher: Fetcher,
    mapFetcher: (fetcher: Fetcher, args: FetcherInput) => Promise<any>
  }
) {
  const { endpoints } = controller
  return Object.fromEntries(Object.entries(endpoints).map(([key, endpoint]) => {
    return [key, (args: RequestParams) => options.mapFetcher(options.fetcher, {
      method: endpoint.method,
      ...(args.query && { query: args.query }),
      ...(endpoint.method !== "GET" && { body: args.body }),
      path: insertParamsIntoPath({ path: `${controller.prefix}${endpoint.path}`, params: args.params })
    })]
  })) as unknown as { [Key in keyof T["endpoints"]]: (args: Omit<ServerInferRequest<T["endpoints"][Key]>, "headers">) => Promise<GetResponsesData<T["endpoints"][Key]>> }
}