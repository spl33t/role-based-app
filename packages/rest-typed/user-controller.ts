import { GetResponsesData, initController} from "./lib"
import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  city: z.string().optional()
})

export const userController = initController({
  prefix: "users",
  endpoints: {
    getUser: {
      method: "GET",
      path: "/:id",
      response: UserSchema,
    },
    createUser: {
      method: "POST",
      path: "/",
      response: UserSchema,
      body: UserSchema,
    }
  }
})

const sas = userController.endpoints.getUser

const test: GetResponsesData<typeof userController.endpoints.getUser> = { id: "1", name: "" }

/*const client5 = initClient2(userController, {
  api: (endpoint) => {
    return async (options) => {
      return {}
    }
  }
})

client5.getUser*/
