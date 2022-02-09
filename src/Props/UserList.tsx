type UserListProps = {
  users: { id: number; name: string }[];
};
export const UserList = (props: UserListProps) => {
  return (
    <div>
      {props.users.map((user, idx) => (
        <h4 key={idx}>
          {user.id}. {user.name}
        </h4>
      ))}
    </div>
  );
};
