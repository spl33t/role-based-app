import { $$getAllUsersQuery } from "@/pages/users/model";
import { useUnit } from "effector-react";
import { Link } from "atomic-router-react"
import { routes } from "@/shared/routing";

export const UsersPage = () => {
  const { data: users } = useUnit($$getAllUsersQuery);

  return (
    <ul>
      {users?.data.map(s => {
        return <li key={s.id}>
          <Link to={routes.user.route} params={{ id: String(s.id) }}>{s.name}</Link>
        </li>
      })}
    </ul>
  );
};