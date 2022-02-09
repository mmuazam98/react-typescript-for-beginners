export const Status = (props: { status: "loading" | "success" | "error" }) => {
  let message;
  switch (props.status) {
    case "loading":
      message = "Loading";
      break;
    case "success":
      message = "Successfully fetched data";
      break;
    case "error":
      message = "Error";
      break;
    default:
      message = "";
      break;
  }
  return <h3 className={props.status}>{message}</h3>;
};
