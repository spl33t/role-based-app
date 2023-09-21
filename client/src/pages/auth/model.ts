import { createEvent, createStore, sample } from "effector";
import { $$session } from "@/shared/session";

export const submit = createEvent()

export const setLogin = createEvent<string>()
export const $login = createStore<string>("ROOT1337")
  .on(setLogin, (_, payload) => payload)

export const setPassword = createEvent<string>()
export const $password = createStore<string>("")
  .on(setPassword, (_, payload) => payload)

sample({
  clock: submit,
  source: { login: $login, password: $password },
  target: $$session.signIn
})