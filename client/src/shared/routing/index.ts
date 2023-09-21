import { createHistoryRouter } from "atomic-router";
import { values } from "lodash";
import { createBrowserHistory } from "history";
import { routesFactory } from "./routes-factory";
import { sample } from "effector";
import { appStarted } from "@/shared/config/app";

export const routes = routesFactory({
  notAccess: { path: "/not-access" },
  home: { path: "/" },
  users: {
    path: "/users",
    notAccessRoles: {
      GUEST: { redirectToRoute: "auth" },
    }
  },
  user: {
    path: "/user/:id",
    notAccessRoles: {
      GUEST: { redirectToRoute: "auth" },
    }
  },
  profile: {
    path: "/profile",
    notAccessRoles: {
      GUEST: { redirectToRoute: "auth" },
    }
  },
  auth: {
    path: "/auth",
    notAccessRoles: {
      ROOT: { redirectToRoute: "home" },
    }
  },
} as const)

export const router = createHistoryRouter({
  routes: values(routes),
})

sample({
  clock: appStarted,
  fn: () => createBrowserHistory(),
  target: router.setHistory
})


