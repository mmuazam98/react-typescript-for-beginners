import { useThemeContext } from "./ThemeContext";

export const Box = () => {
  const theme = useThemeContext();
  return <div style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}>Styled box</div>;
};
