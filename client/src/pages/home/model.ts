import { createEvent, createStore, sample } from "effector";
import { routes } from "@/shared/routing";
import { createQuery, createHeadlessQuery, createJsonQuery, } from "@farfetched/core";
import { ClientInferRequest, ClientInferResponseBody, ServerInferRequest, ServerInferResponses } from "@ts-rest/core";
import { usersContract } from "@packages/contracts";
import { client2 } from "@/shared/api";
import { users } from "@/shared/api/requests/users";

const $$currentRoute = routes.home.route

export const increment = createEvent()
export const $count = createStore(0)

sample({
  clock: increment,
  source: $count,
  fn: (count) => ++count,
  target: $count
})

sample({
  clock: [$$currentRoute.opened],
  fn: () => {
    console.log("home opened")
  }
})


export const $$getUserQuery = createQuery({
  handler: async () => {
    console.log("start get user")

    const user = await client2.getUser({ params: { id: "2" } })

    console.log("result get user", user)
  }
})

type User = ServerInferRequest<typeof usersContract.getUser>;
type UserReq = ServerInferRequest<typeof usersContract.getUser>
type UserRes = ClientInferResponseBody<typeof usersContract.getUser>;
const getUserReqArgs: UserReq = { params: { id: "1" } }
const test: UserRes = {}

const sas = async (params: { ar: string }) => {
  // TODO: write handler here
  return null;
}


export const $$getUserQuery3 = createQuery({ handler: client2.getUser })

$$getUserQuery3.$data.watch(s=> s)

//console.log(usersContract.getUser)

//$$getUserQuery.$data.watch(s => console.log(s))

sample({
  clock: [$$currentRoute.opened],
  fn: () => {
    return { params: { id: "2" } }
  },
  target: $$getUserQuery3.start
})
