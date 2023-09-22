import { axiosRequest } from "../index"
import { LoginDto, RegisterDto, ResetPasswordDto, UserWithTokensDto } from "../swagger-codegen/api.gen";

const baseUrl = "auth"

export const auth = {
  registration: (args: { dto: RegisterDto }) => {
    return axiosRequest<UserWithTokensDto>({
      url: `${baseUrl}/registration`,
      method: "post",
      body: args.dto
    }).then((response) => response)
  },
  login: (params: LoginDto) => {
    return axiosRequest<UserWithTokensDto>({
      url: `${baseUrl}/login`,
      method: "post",
      body: params,
    }).then((response) => response)
  },
  refreshSession: () => {
    return axiosRequest<UserWithTokensDto>({
      url: `${baseUrl}/refresh`,
      method: "get",
    }).then((response) => response)
  },
  logout: () => {
    return axiosRequest({
      url: `${baseUrl}/logout`,
      method: "get",
    }).then((response) => response)
  },
  passwordReset: (userId: number) => {
    return axiosRequest<ResetPasswordDto>({
      url: `${baseUrl}/passwordReset/${userId}`,
      method: "get",
    }).then((response) => response)
  },
}
