import { createQuery } from "@farfetched/core";
import { createEffect, createEvent, createStore, sample, split } from "effector";
import { LOCAL_STORAGE_KEYS } from "../config/local-storage";
import { api } from "../api";
import { LoginDto, UserModel, UserRoleEnum, UserWithTokensDto } from "../api/swagger-codegen/api.gen";
import { appStarted } from "@/shared/config/app";
import { NODE_ENV } from "@/shared/config/env";

const GUEST_KEY = "GUEST" as const

export const SESSION_ROLES_ARRAY = [...Object.values(UserRoleEnum), GUEST_KEY]
export type SessionRoles = keyof typeof UserRoleEnum | typeof GUEST_KEY

function getAccessToken() {
  return localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN)
}

function getSessionRole() {
  return localStorage.getItem(LOCAL_STORAGE_KEYS.USER_ROLE) as UserRoleEnum | undefined
}

const signInQuery = createQuery({ handler: api.auth.login })
const refreshQuery = createQuery({ handler: api.auth.refreshSession })
const logoutQuery = createQuery({ handler: api.auth.logout })

const signIn = signInQuery.start
const logout = logoutQuery.start
const startRefresh = refreshQuery.start

const setAccessTokenFx = createEffect((token: string) => localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, token))
const removeAccessTokenFx = createEffect(() => localStorage.removeItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN))

const setSessionRoleFx = createEffect((role: UserRoleEnum) => localStorage.setItem(LOCAL_STORAGE_KEYS.USER_ROLE, role))
const setSessionRoleToGuestFx = createEffect(() => localStorage.setItem(LOCAL_STORAGE_KEYS.USER_ROLE, GUEST_KEY))

const $user = createStore<UserModel | null>(null)
  .on([signInQuery.finished.success, refreshQuery.finished.success], (state, payload) => payload.result.user)
  .reset([removeAccessTokenFx.done])

const $isAuth = createStore(Boolean(getAccessToken()))
  .on([setAccessTokenFx.done], () => true)
  .on([removeAccessTokenFx.done], () => false)

const $role = createStore<SessionRoles>(getSessionRole() || GUEST_KEY)
  .on(removeAccessTokenFx.done, (_, payload) => GUEST_KEY)

sample({
  clock: [signInQuery.finished.success, refreshQuery.finished.success],
  filter: Boolean,
  fn: ({ result }) => {
    return result.user.role
  },
  target: [$role, setSessionRoleFx]
})

$role.watch(s => console.log("ROLE", s))

const $sessionIsLoading = createStore(false)
  .on([
    signInQuery.$pending,
    refreshQuery.$pending,
    logoutQuery.$pending
  ], (_, payload) => payload)

// ?????????????????????
const $sessionIsLoaded = createStore(false)
  .on([setAccessTokenFx.done], () => true)

sample({
  clock: [appStarted],
  source: { role: $role },
  fn: ({ role }) => {
    return role === "GUEST";
  },
  target: $sessionIsLoaded
})

//refresh flow
sample({
  clock: appStarted,
  source: $isAuth,
  filter: (isAuth) => {
    return Boolean(isAuth);
  },
  target: startRefresh
})

//signIn flow
sample({
  clock: [signInQuery.finished.success, refreshQuery.finished.success],
  filter: Boolean,
  fn: ({ result }) => {
    return result.tokens.accessToken
  },
  target: setAccessTokenFx
})

//logout flow
sample({
  clock: [logoutQuery.finished.success, logoutQuery.finished.failure, refreshQuery.finished.failure],
  target: [removeAccessTokenFx, setSessionRoleToGuestFx,]
})

export const $$session = {
  $user,
  $role,
  $sessionIsLoading,
  $sessionIsLoaded,
  logout,
  signIn,
  startRefresh,
  '@@unitShape': () => ({
    user: $user,
    role: $role,
    sessionIsLoading: $sessionIsLoading,
    sessionIsLoaded: $sessionIsLoaded,
  }),
}