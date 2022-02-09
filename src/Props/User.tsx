import { UserProps } from "./types/User.types";
// type UserProps = {
//   name: { fname: string; lname?: string };
// };
export const User = (props: UserProps) => {
  return (
    <div>
      {props.name.fname} {props.name.lname}
    </div>
  );
};
