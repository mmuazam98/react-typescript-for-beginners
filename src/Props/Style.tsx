type StyleProps = {
  styles: React.CSSProperties;
};

export const Style = ({ styles }: StyleProps) => {
  return <div style={styles}>This is a styled component</div>;
};
