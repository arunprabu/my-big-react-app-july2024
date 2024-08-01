
const StyledDiv = ({ children }: { children: React.ReactNode }) => {
  const myStyles = {
    color: "red",
    fontSize: "2rem",
    padding: "0.5rem",
    border: "1px solid black",
    background: "yellow",
    margin: "0.5rem",
  };

  return <section style={myStyles}>{children}</section>;
};

export default StyledDiv;