import { useState } from "react";
import { Private } from "./Private";
import { Profile } from "./Profile";

export const ComponentProps = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggle = () => setIsLoggedIn(!isLoggedIn);
  return (
    <section>
      <h1>Component Props</h1>
      <button onClick={toggle}>{isLoggedIn ? "Logout" : "Login"}</button>
      <Private isLoggedIn={isLoggedIn} Component={Profile} />
    </section>
  );
};
