import { useRouter } from 'next/router';
import { TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { formatDateToYMD } from '../../utils/dateFormat';
import CustomButton from "../Buttons/CustomButton";

export const FormActivity = ({ onSubmit, userId }) => {
  const router = useRouter();
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

  const createActivity = async (date, description, name) => {
    try {
      const headers = {
        "Content-Type": "application/json"
      };
      const options = {
        method: 'POST',
        headers,
        body: JSON.stringify({
          activityDate: date,
          description,
          name,
          userId,
        })
      };
      const response = await fetch(`/api/activity/new?id=${userId}`, options)

      return response
    } catch (error) {
      console.error(error)
    }
  }

  async function onSubmitFormEvent({ date, description, name }) {
    const dateToIso = new Date(date).toISOString();
    await createActivity(dateToIso, description, name);
    router.replace(router.asPath);
    onSubmit();
  }

  return (
    <form onSubmit={handleSubmit(onSubmitFormEvent)} style={style}>
      <TextField
        variant="standard"
        error={errors.name !== undefined}
        label="Activity name"
        name="name"
        {...register("name", {
          required: {
            value: true,
            message: "You must enter an activity name",
          },
        })}
      />
      <TextField
        error={errors.description !== undefined}
        name="description"
        id="standard-multiline-static"
        label="Description"
        multiline
        rows={4}
        placeholder="Party saturday night !"
        variant="standard"
        {...register("description", {
          required: {
            value: true,
            message: "You must enter a description",
          },
        })}
      />

      <Controller
        render={({ field }) => <input type="datetime-local" min={formatDateToYMD(new Date)} {...field} />}
        name="date"
        control={control}
        defaultValue={formatDateToYMD(new Date)}
      />

      <CustomButton br={20} bgcolor="blue" color="white" width={300}>
        Create activity
      </CustomButton>
    </form>
  );
};
