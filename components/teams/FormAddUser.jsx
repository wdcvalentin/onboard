import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { createUser } from "../../api/user.api";
import CustomButton from "../Buttons/CustomButton";

export const FormAddUser = ({ fetchMembers, onSubmit }) => {
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

    async function onSubmitFormUser({ firstName, lastName, email, password }) {
        const authToken = localStorage.getItem('token');
        await createUser(firstName, lastName, email, password, authToken);
        await fetchMembers();
        onSubmit();
    }

    return (
        <form onSubmit={handleSubmit(onSubmitFormUser)} style={style}>
            <TextField
                variant="standard"
                error={errors.firstName !== undefined}
                label="Firstname"
                name="firstName"
                {...register("firstName", {
                    required: {
                        value: true,
                        message: "You must enter a firstname",
                    },
                })}
            />
            <TextField
                variant="standard"
                error={errors.lastName !== undefined}
                label="Lastname"
                name="lastName"
                {...register("lastName", {
                    required: {
                        value: true,
                        message: "You must enter a lastName",
                    },
                })}
            />

            <TextField
                error={errors.email !== undefined}
                label="Email Address"
                className={"textfield"}
                name="email"
                variant="standard"
                {...register("email", {
                    required: {
                        value: true,
                        message: "You must enter your email",
                    },
                    minLength: {
                        value: 8,
                        message: "This is not long enough to be an email",
                    },
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "This needs to be a valid email address",
                    },
                })}
            />

            <TextField
                error={errors.password !== undefined}
                label="Password"
                className={"textfield"}
                type="password"
                name="password"
                variant="standard"
                {...register("password", {
                    required: {
                        value: true,
                        message: "You must enter your password",
                    },
                })}
            />

            <CustomButton br={20} bgcolor="blue" color="white" width={300}>
                Create User
            </CustomButton>
        </form>
    );
};
