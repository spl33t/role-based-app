import { useUnit } from "effector-react";
import { $$getUserQuery, $count, increment } from "./model";

export const HomePage = () => {
  const count = useUnit($count)
  const { data: user } = useUnit($$getUserQuery)

  return (
    <div>
      <h1>Welcome to effector-role-based-routing [DEMO]</h1>
      <div>User name: {user?.name}</div>
      <button onClick={() => increment()}>Клик</button>
      {count}
    </div>
  );
};