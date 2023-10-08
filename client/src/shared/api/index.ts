import axios, { AxiosError } from "axios"
import { notification } from "antd"

import { LOCAL_STORAGE_KEYS } from "../config/local-storage"
import { auth } from "./requests/auth"
import { users } from "./requests/users"
import { userController } from "@packages/contracts/user.controller";
import { initClient } from "@packages/rest-typed";

type Method = "get" | "delete" | "post" | "put"
type ResponseType = "text" | "json" | "formData" | "blob" | "arrayBuffer"

export interface HttpRequestOptions extends Omit<RequestInit, "body"> {
  url: string
  method: Method
  body?: any
  responseType?: any
  query?: any
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


export const axiosRequest: RequestFunction = async <T>(options: HttpRequestOptions): Promise<T> => {
  return axiosInstance
    .request({
      url: options.url,
      method: options.method,
      data: options?.body,
      params: options.query,
      responseType: options?.responseType,
    }).then((response) => {
      const { data } = response;

      console.log(
        "AXIOS Response:",
        "\n URL:",
        options.url,
        "\n METHOD:",
        options.method,
        "\n PARAMS:",
        options.query,
        "\n REQUEST DATA:",
        options.body,
        "\n RESPONSE DATA:",
        data
      );

      return data;
    })
    .catch((error: AxiosError) => {
      const err = error as any
      if (error.response) {
        let errorMessage = "Неизвестная ошибка"
        if (typeof error.response.data === 'object') {
          if (err.response.data.message) errorMessage = err.response.data.message
          if (err.response.data.issues) errorMessage = "Ошибка валидации"
        }

        notification.open({
          type: "error",
          placement: "bottomRight",
          message: errorMessage,
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


export const apiClient = initClient(userController, {
  fetcher: axiosRequest,
  mapFetcher: (fetcher, args) => {
    return fetcher({
      method: args.method as Method,
      url: args.path,
      query: args.query,
      ...(args.method !== "GET" && {
        body: args.body,
      })
    }).then(result => result)
  }
})