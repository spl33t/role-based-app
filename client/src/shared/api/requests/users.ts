import { UpdateUserDto, UserModel, UsersControllerGetAllParams } from "../swagger-codegen/api.gen";
import { axiosRequest } from "@/shared/api"
import { DataWithPaginationDto, QueryParamsWithPagination } from "@/shared/api/types";

const baseUrl = "users"

export const users = {
  getAll(params?: QueryParamsWithPagination<UsersControllerGetAllParams>) {
    return axiosRequest<DataWithPaginationDto<UserModel>>({
      url: `${baseUrl}`,
      method: "get",
      params
    }).then((response) => response)
  },
  getOneById(args: { userId: number }) {
    return axiosRequest<UserModel>({
      url: `${baseUrl}/${args.userId}`,
      method: "get"
    }).then((response) => response)
  },
  freezeToggle(args: { userId: number }) {
    return axiosRequest<string>({
      url: `${baseUrl}/freeze/${args.userId}`,
      method: "get"
    }).then((response) => response)
  },
  updateOneById(args: { legalFaceId: number, dto: UpdateUserDto }) {
    return axiosRequest<UserModel>({
      url: `${baseUrl}/${args.legalFaceId}`,
      method: "put",
      data: args.dto
    }).then((response) => response)
  },
  deleteOneById(args: { userId: number }) {
    return axiosRequest({
      url: `${baseUrl}/${args.userId}`,
      method: "delete"
    }).then((response) => response)
  }
}
