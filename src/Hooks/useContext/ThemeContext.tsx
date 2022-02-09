import * as React from "react";
import { theme } from "./theme";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = React.createContext(theme);

export const useThemeContext = () => React.useContext(ThemeContext);

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
