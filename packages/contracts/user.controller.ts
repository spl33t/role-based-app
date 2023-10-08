import { GetResponsesData, initController } from "../rest-typed/lib"
import { userSchema } from "./user.schema";

export const userController = initController({
  prefix: "users",
  endpoints: {
    getUser: {
      method: "GET",
      path: "/:id",
      response: userSchema,
    },
    createUser: {
      method: "POST",
      path: "/",
      response: userSchema,
      body: userSchema.omit({ id: true }),
    }
  }
})

const sas = userController.endpoints.getUser

const test: GetResponsesData<typeof userController.endpoints.getUser> = {
  id: 2,
  name: "",
  hash_password: "",
  login: "",
  email: "",
  phone: ""
}