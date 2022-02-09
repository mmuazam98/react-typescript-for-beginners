import { RandomNumber } from "./RandomNumber";

export const RestrictingProps = () => {
  return (
    <section>
      <h1>Restricting Props</h1>
      {/* restrict props such that either of the three props is passed */}
      {/* <RandomNumber value={10} isPositive isNegative isZero /> */}
      <RandomNumber value={10} isPositive />
    </section>
  );
};
