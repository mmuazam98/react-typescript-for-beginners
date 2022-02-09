import { Box } from "./Box";
import { ThemeContextProvider } from "./ThemeContext";

export const ThemedBox = () => {
  return (
    <ThemeContextProvider>
      <Box />
    </ThemeContextProvider>
  );
};
