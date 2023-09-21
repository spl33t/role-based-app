import { Controller } from '@nestjs/common';
import { userController } from "@packages/rest-typed/user-controller"
import { ControllerRequests, ServerInferRequest } from "@packages/rest-typed/lib";

import { TypedRequest, TypedEndpoint } from "@packages/rest-typed/nest"

type RequestType = ControllerRequests<typeof userController>

@Controller(userController.prefix)
export class UsersController {

  @TypedEndpoint(userController.endpoints.getUser)
  async getUser(@TypedRequest() args: RequestType["getUser"]) {
    //console.log(args)

    return {
      id: args.params.id,
      name: "sad"
    }
  }

  @TypedEndpoint(userController.endpoints.createUser)
  async createUser(@TypedRequest() args: RequestType["createUser"]) {

    return {
      id: args.body.id,
      name: args.body.name
    }
  }
}
