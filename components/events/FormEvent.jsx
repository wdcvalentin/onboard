import { TextField } from "@mui/material";

export const FormEvent = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "600px",
    background: "white",
    borderRadius: "5px",
    boxShadow: 24,
    padding: 20,
    display: 'flex',
    flexDirection: 'column'
  };
  return (
      <form style={style}>
        <TextField id="standard-basic" label="Event name" variant="standard" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </form>
  );
};
