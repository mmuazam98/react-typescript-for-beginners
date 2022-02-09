import { User } from "./User";
import { LoggedIn } from "./LoggedIn";
import { Counter } from "./Counter";
import { ThemedBox } from "./useContext";
import { DomRef } from "./useRef/DomRef";
import { MutableRef } from "./useRef/MutableRef";

export const Hooks = () => {
  return (
    <section>
      <h1>Hooks</h1>
      {/* Using useState Hook normally  */}
      <h2>useState Hook</h2>
      <LoggedIn />
      {/* useState Hook with future values */}
      <h2>useState Hook with future values</h2>
      <User />
      {/* useReducer Hook */}
      <h2>useReducer Hook</h2>
      <Counter />
      {/* useContext Hook */}
      <h2>useContext Hook</h2>
      <ThemedBox />

      {/* useRef Hook */}
      <h2>useRef Hook</h2>
      <DomRef />
      <MutableRef />
    </section>
  );
};
