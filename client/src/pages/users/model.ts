import { createQuery } from "@farfetched/core";
import { api } from "@/shared/api";
import { routes } from "@/shared/routing";
import { sample } from "effector";

const $$currentRoute = routes.users.route

export const $$getAllUsersQuery = createQuery({ handler: api.users.getAll })

sample({
  clock: $$currentRoute.opened,
  fn: () => ({}),
  target: $$getAllUsersQuery.start
})