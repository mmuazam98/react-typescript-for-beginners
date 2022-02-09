import { List } from "./List";

export const GenericProps = () => {
  return (
    <div>
      <h1>Generic Props</h1>
      {/* <List items={["Batman", "Superman", "Wonder Woman"]} onClick={(item) => console.log(item)} />
      <List items={[1, 2, 3, 4]} onClick={(item) => console.log(item)} /> */}
      <List
        items={[
          { id: 1, first: "Muazam", last: "MZ" },
          { id: 2, first: "Maroof", last: "MF" },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
};
