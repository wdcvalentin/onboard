import { useState, useContext } from 'react';
import { useRouter } from 'next/router'
import { Context } from '../Context/context';
import { ACTIONS } from '../reducer/reducer';
import { Grid, TextField } from "@mui/material";
import Head from 'next/head';
import { useForm } from "react-hook-form";
import { loginUser } from '../api/auth';
import ButtonRedirection from '../components/Buttons/ButtonRedirection';
import CustomButton from "../components/Buttons/CustomButton";

export default function Login() {
  const router = useRouter();
  const userContext = useContext(Context)
  const { userDispatch } = userContext;
  const [fetchResponse, setFetchResponse] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  async function onSubmitFormLogin(values) {
    const headers = {
      "Content-Type": "application/json"
    };
    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify({
        email: values.email,
        password: values.password
      })
    };
    const response = await fetch('/api/login', options);
    const { message, response: userData } = await response.json()
    if (!response) {
      return setFetchResponse(message);
    }
    userDispatch({ type: ACTIONS.SET_USER, payload: { user: userData.user } });
    localStorage.setItem('token', userData.token);
    router.push('/dashboard')
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
            fetchResponse !== null ? <div>{fetchResponse}</div> : null
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
