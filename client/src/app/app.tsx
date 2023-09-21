import { RoutesView } from "@/pages";
import { router } from "@/shared/routing";
import { RouterProvider } from "atomic-router-react";
import { SessionLoader } from "@/shared/session/session-loader";
import { GlobalStyles } from "@/app/styles";
import React from "react";

export function App() {

  return <>
    <GlobalStyles/>
    <SessionLoader>
      <RouterProvider router={router}>
        <RoutesView/>
      </RouterProvider>
    </SessionLoader>
  </>
}

