import logo from "./logo.svg";
import "./App.css";

import { Props } from "./Props";
import { Hooks } from "./Hooks";
import { Counter } from "./Class/ClassComponentCounter";
import { ComponentProps } from "./ComponentProp";
import { GenericProps } from "./GenericProps";
import { RestrictingProps } from "./RestrictingProps";
import { Toast } from "./TemplateLiterals/Toast";
import { CustomComponentStyling } from "./html";
import { CustomComponent } from "./html/CustomComponent";
import { Text } from "./PolymorphicComponents/Text";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      {/* Props tutorial */}
      <Props />
      {/* Hooks tutorial */}
      <Hooks />
      {/* Typescript + Class Component */}
      <Counter message="Hello" />
      {/* Pass component as props */}
      <ComponentProps />
      {/* Generic Props */}
      <GenericProps />
      {/* Restricting Props */}
      <RestrictingProps />
      {/* Template literal props */}
      <Toast position="center" />
      {/* Custom Component styling */}
      <CustomComponentStyling />
      {/* Use props from other components */}
      <CustomComponent name="Muazam" isLoggedIn notifications={10} />
      {/* Polymorphic Components */}
      <Text as="h3" size="lg" color="primary">
        Hello World
      </Text>
      <Text as="p" size="lg" color="secondary">
        Hi
      </Text>
      <Text as="label" htmlFor="name" size="lg" color="primary">
        Name
      </Text>
    </div>
  );
}

export default App;
