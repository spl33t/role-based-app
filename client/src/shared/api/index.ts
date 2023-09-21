import axios, { AxiosError } from "axios"
import { notification } from "antd"

import { LOCAL_STORAGE_KEYS } from "../config/local-storage"
import { auth } from "./requests/auth"
import { users } from "./requests/users"
import {
  AppRoute,
  AppRouteMutation,
  AppRouter,
  ClientArgs,
  ClientInferRequest, ClientInferResponseBody, ClientInferResponses,
  Frameworks,
  initClient,
  getCompleteUrl,
  InitClientArgs, isAppRoute, PartialClientInferRequest, ServerInferRequest, ServerInferResponses,
} from "@ts-rest/core"
import { createRoute } from "atomic-router";
import { Merge, Prettify, ZodInferOrType, ZodInputOrType } from "@ts-rest/core/src/lib/type-utils";
import { ParamsFromUrl } from "@ts-rest/core/src/lib/paths";
import { z } from "zod";
import { userController } from "@packages/rest-typed/user-controller";
import { initClient2 } from "@packages/rest-typed/lib"

type Method = "get" | "delete" | "post" | "put"
type ResponseType = "text" | "json" | "formData" | "blob" | "arrayBuffer"

export interface HttpRequestOptions extends Omit<RequestInit, "body"> {
  url: string
  method: Method
  data?: any
  responseType?: ResponseType
  params?: any
}

export type RequestFunction = <T>(options: HttpRequestOptions) => Promise<T>

const baseURL = "http://localhost:8000"

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
})

axiosInstance.interceptors.request.use((config: any) => {
  config.headers.authorization = `Bearer ${localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN)}`
  return config
})


export const axiosRequest: RequestFunction = async function request<T>(options: HttpRequestOptions): Promise<T> {
  return axiosInstance
    .request({
      url: options.url,
      method: options.method,
      data: options?.data,
      params: options.params,
    }).then((response) => {
      console.warn('response')
      const { data } = response;

      console.log(
        "AXIOS Response:",
        "\n URL:",
        options.url,
        "\n METHOD:",
        options.method,
        "\n PARAMS:",
        options.params,
        "\n REQUEST DATA:",
        options.data,
        "\n RESPONSE DATA:",
        data
      );

      return data;
    })
    .catch((error: AxiosError) => {
      const err = error as any
      console.log(error)

      if (error.response) {
        notification.open({
          type: "error",
          placement: "bottomRight",
          message: `${typeof err.response.data === 'object' ?
            err.response.data.message.message ??
            err.response.data.message : err.response.data.message}`,
        })
        throw error.response
      }

      if (error.code === "ERR_NETWORK") {
        notification.open({
          type: 'error',
          placement: "bottomRight",
          message: 'Ошибка соединения с сервером'
        })
        throw error
      }
    })
}

export const api = {
  auth,
  users
}


export const _initClient = <T extends AppRouter>(router: T, clientArgs: ClientArgs) => {
  return Object.fromEntries(Object.entries(router).map(([key, endpoint]) => {
    return [key, {
      fetcher: getRouteQuery(endpoint as AppRoute, clientArgs),
      reqTest: (params: ClientInferRequest<T[typeof key]>) => {
      }
    }]
  }))
};


//client2.getUser({ params: { id: "2" } })

type UserGet = typeof usersContract.getUser
type UserRes = ClientInferResponses<typeof usersContract.getUser, 200>;
const test: UserRes = { body: { id: "2", name: "", login: "" }, headers: {} as any, status: 200 }

export const getRouteQuery = <TAppRoute extends AppRoute>(
  route: TAppRoute,
  clientArgs: InitClientArgs
) => {
  const knownResponseStatuses = Object.keys(route.responses);
  return async (inputArgs?: ServerInferRequest<typeof route>) => {
    const {
      query,
      params,
      body,
      headers,
      extraHeaders,
      next,
      ...extraInputArgs
    } =
      // ---- Merge all framework Request infer types ----
    (inputArgs as ClientInferRequest<AppRouteMutation, ClientArgs, 'nextjs'> &
      ClientInferRequest<AppRouteMutation, ClientArgs>) || {};

    const completeUrl = getCompleteUrl(
      query,
      clientArgs.baseUrl,
      params,
      route,
      !!clientArgs.jsonQuery
    );

    return axiosRequest<ServerInferResponses<typeof route>>({
      method: route.method as any,
      url: completeUrl,
      headers: route.headers as unknown as Headers,
      data: inputArgs,
      params: inputArgs?.params
    }).then((response) => response)
  };
}

type ExtractExtraParametersFromClientArgs<TClientArgs extends Pick<ClientArgs, 'api'>> = TClientArgs['api'] extends ApiFetcher ? Omit<Parameters<TClientArgs['api']>[0], keyof Parameters<ApiFetcher>[0]> : {};
/**
 * Extract the path params from the path in the contract
 */
type PathParamsFromUrl<T extends AppRoute> = ParamsFromUrl<T['path']> extends infer U ? U : never;

/*export const initClient2 = <T extends Record<any, AppRoute>>(router: T, clientArgs: ClientArgs) => {
  type App_Route = typeof router[keyof typeof router]
  type Responses = App_Route["responses"][200]
  console.log(router)
  const result = {} as Record<keyof T, (params: ClientInferRequest<App_Route>) => Promise<z.infer<Responses>>>

  for (const key in router) {
    result[key] = getRouteQuery(router[key] as AppRoute, clientArgs)
  }

  return result
};

export const client2 = initClient2(usersContract, { baseUrl: baseURL, baseHeaders: {} })

client2.getUser({ params: { id: "" } }).then(s=> s)*/


type Ssas = z.infer<typeof usersContract.getUser.responses["200"]>
//const s: Ssas = {}


export const client3 = initClient(usersContract, {
  baseUrl: 'http://localhost:3334',
  baseHeaders: {},
});

const client5 = initClient2(userController, {
  api: (endpoint) => {
    return axiosRequest({
      method: endpoint.method as any,
      url: completeUrl,
      headers: route.headers as unknown as Headers,
      data: inputArgs,
      //params: endpoint.
    }).then((response) => response)
  }
})