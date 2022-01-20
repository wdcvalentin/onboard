import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import CustomButton from "../Buttons/CustomButton";

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
    display: "flex",
    flexDirection: "column",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  async function onSubmitFormEvent(values) {
    const {
      data: { response },
    } = await loginUser(values.email, values.password);
    if (!response) {
      return setFetchResponse(response);
    }
    localStorage.setItem("token", response);
    window.location = "/dashboard";
  }
  return (
    <form onSubmit={handleSubmit(onSubmitFormEvent)} style={style}>
      <TextField
        variant="standard"
        error={errors.eventName !== undefined}
        label="Event name"
        name="eventName"
        {...register("email", {
          required: {
            value: true,
            message: "You must enter an event name",
          },
        })}
      />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField id="standard-basic" label="Standard" variant="standard" />

      <CustomButton br={20} bgcolor="blue" color="white" width={300}>
        Create event
      </CustomButton>
    </form>
  );
};
