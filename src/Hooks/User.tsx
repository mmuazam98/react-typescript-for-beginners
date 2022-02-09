import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  // const [user, setUser] = useState<AuthUser | null>(null);
  // ! Type assertion
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: "Muazam",
      email: "muazam@gmail.com",
    });
  };
  // const handleLogout = () => {
  //   setUser(null);
  // };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}

      <div>User name: {user?.name}</div>
      <div>User email: {user?.email}</div>
    </div>
  );
};
