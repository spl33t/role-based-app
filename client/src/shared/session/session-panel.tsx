import React from 'react';
import { useUnit } from "effector-react";
import { $$session } from "@/shared/session/index";
import { Button } from "antd";
import { VisibleByRole } from "@/shared/session/visible-by-role";
import { routes } from "@/shared/routing";
import { Link } from "atomic-router-react"

export const SessionPanel = () => {
  const { user } = useUnit($$session)
  return (
    <>
      {/*     <Button onClick={() => $$session.startRefresh()}>start refresh</Button>*/}
      <VisibleByRole roles={["GUEST"]} excludeMode={true}>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <div><Link to={routes.profile.route}>{user?.login}</Link> / {user?.role}</div>
          <Button onClick={() => $$session.logout()}>Выйти</Button>
        </div>
      </VisibleByRole>

      <VisibleByRole roles={["GUEST"]}>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <div>Гость</div>
          <Button onClick={() => routes.auth.route.open()}>Вход</Button>
        </div>
      </VisibleByRole>
    </>
  );
};
