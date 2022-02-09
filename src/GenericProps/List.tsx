// type ListProps = {
//   items: string[] | number[];
//   onClick: (value: string | number) => void;
// };
type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

// if you only want T to be array of numbers or string <T extends number | string>
// if you want T to be array of objects <T extends { key: value }>
// every thing  => T extends {}
export const List = <T extends { id: number; first: string; last: string }>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h3>List of items:</h3>
      {items.map((item) => {
        return (
          <div key={item.id} onClick={() => onClick(item)}>
            {item.id} {item.first} {item.last}
          </div>
        );
      })}
    </div>
  );
};
