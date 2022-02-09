// type ButtonProps = {
//   variant: "primary" | "secondary" | "tertiary";
// } & React.ComponentProps<"button">;

//! children can be a string, number, boolean, element, etc. but if we want to restrict it to be a string, we can Omit it from the type definition

type ButtonProps = {
  variant: "primary" | "secondary" | "tertiary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

// ! now if we pass an element as children it will throw an error

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`button-${variant}`} {...rest}>
      {children}
    </button>
  );
};
