type GreetProps = {
  name: string;
  notifications?: number;
  isLoggedIn: boolean;
};
export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn ? (
          <span>
            Welcome {props.name}! You have {props.notifications || 0} notifications.
          </span>
        ) : (
          <span>Welcome Guest</span>
        )}
      </h2>
    </div>
  );
};
