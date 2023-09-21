export const DEFAULT = ""

/*
export interface HttpRequestOptions extends Omit<RequestInit, "body"> {
  url: string
  method: Method
  data?: any
  responseType?: ResponseType
  params?: any
}
*/
/*
export type RequestFunction = <T>(options: HttpRequestOptions) => Promise<T>*/

/*export function initClient2<T extends ReturnType<typeof initController>>(
  controller: T,
  options: {
    api: (endpoint: Endpoint) => RequestFunction
  }
) {
  const { endpoints } = controller
  return Object.fromEntries(Object.entries(endpoints).map(([key, endpoint]) => {
    return [key, options.api(endpoint)]
  }))

  return controller as { [Key in keyof T["endpoints"]]: GetResponsesData<T["endpoints"][Key]> }
}*/