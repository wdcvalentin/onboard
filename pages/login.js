import { Grid, TextField } from "@mui/material";
import Head from 'next/head';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { loginUser } from '../api/auth';
import ButtonRedirection from '../components/Buttons/ButtonRedirection';
import CustomButton from "../components/Buttons/CustomButton";

export default function Login() {
  const [fetchResponse, setFetchResponse] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  async function onSubmitFormLogin(values) {
    const { data: { response } } = await loginUser(values.email, values.password);
    if (!response) {
      return setFetchResponse(response);
    }
    localStorage.setItem('token', response);
    window.location = '/dashboard'
  }


  return (
    <div className="container login">
      <Head>
        <title>login Next App</title>
      </Head>

      <Grid container direction='column'>
        <Grid container justifyContent='flex-end'>
          <ButtonRedirection redirection='/signup' titleRedirection='Sign up' />
        </Grid>

        <Grid container direction='column' className={"login_form"}>
          <h1 className={"title_welcome"}>Welcome to Onboarding</h1>
          {
            fetchResponse !== null ? <div>Vos informations sont incorrectes</div> : null
          }
          <form onSubmit={handleSubmit(onSubmitFormLogin)}>
            <Grid
              container
              direction="column"
              alignItems="center"
              className={"container_form"}
            >
              <TextField
                error={errors.email !== undefined}
                label="Email Address"
                className={"textfield"}
                InputLabelProps={{ style: { marginLeft: "20px" } }}
                name="email"
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
                InputLabelProps={{ style: { marginLeft: "20px" } }}
                type="password"
                name="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "You must enter your password",
                  },
                })}
              />

              <Grid
                container
                alignItems="center"
                direction="column"
                style={{ marginTop: "20px" }}
              >
                <CustomButton br={20} bgcolor="blue" color="white" width={300}>
                  Login
                </CustomButton>

                <a>Forgot password ? </a>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  )
}
