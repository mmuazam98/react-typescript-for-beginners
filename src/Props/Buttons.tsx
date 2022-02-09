type ButtonProps = {
  handleClick: () => void;
};

export const Button = ({ handleClick }: ButtonProps) => {
  return <button onClick={handleClick}>Click</button>;
};

type EventHandlerButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
export const EventHandlerButton = ({ handleClick }: EventHandlerButtonProps) => {
  return <button onClick={(e) => handleClick(e, 1)}>Click event handler</button>;
};
