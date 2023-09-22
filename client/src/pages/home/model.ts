import { createEvent, createStore, sample } from "effector";
import { routes } from "@/shared/routing";
import { createQuery } from "@farfetched/core";
import { apiClient } from "@/shared/api";

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


export const $$getUserQuery = createQuery({ handler: apiClient.getUser })
export const $$createUserQuery = createQuery({ handler: apiClient.createUser })

sample({
  clock: [$$currentRoute.opened],
  fn: () => {
    return { params: { id: "6" } }
  },
  target: $$getUserQuery.start
})

sample({
  clock: [$$currentRoute.opened],
  fn: () => {
    return { body: { id: "2", name: "abuuuuuuuuu" } }
  },
  target: $$createUserQuery.start
})

