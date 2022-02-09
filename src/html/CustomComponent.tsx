// Extract props from other components, for example ../Props/Greet

import React from "react";
import { Greet } from "../Props/Greet";

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <section>
      <h1>Extract props from other components</h1>
      {props.name}
    </section>
  );
};
