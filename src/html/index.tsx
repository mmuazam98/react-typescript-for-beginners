import { CustomButton } from "./Button";
import { CustomInput } from "./Input";

export const CustomComponentStyling = () => {
  return (
    <section>
      <h1>Custom Component styling</h1>
      <CustomButton variant="primary" onClick={() => console.log("Btn clicked")}>
        Custom button
      </CustomButton>
      <CustomInput type="number" />
    </section>
  );
};
