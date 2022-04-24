import { Checkbox, Grid, TextField } from "@mui/material";
import Head from 'next/head';
import { Controller, useForm } from "react-hook-form";
import { signupUser } from '../api/auth';
import ButtonRedirection from '../components/Buttons/ButtonRedirection';
import CustomButton from '../components/Buttons/CustomButton';
import { useState } from "react";

export default function Signup() {
  const [fetchResponse, setFetchResponse] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues: {
      checkbox: false,
    },
  });

  async function onSubmitFormSignup({ email, password, firstName, lastName }) {
    const { message, response } = await signupUser(email, password, firstName, lastName);
    if (!response) {
      return setFetchResponse(message);
    }
    localStorage.setItem('token', response);
    window.location = '/dashboard'
  }

  return (
    <div className="container">
      <Head>
        <title>Signup - Onboarding</title>
      </Head>

      <Grid container direction='column'>
        <Grid container justifyContent='flex-end'>
          <ButtonRedirection redirection='/login' titleRedirection='Login' />
        </Grid>

        <Grid container direction='column' className={"login_form"}>
          <h1 className={"title_welcome"}>Create an Onboarding Account</h1>
          {
            fetchResponse !== null ? <div>Vos informations sont incorrectes</div> : null
          }
          <Grid container direction='column' alignItems='center' className={"container_form"}>
            <form onSubmit={handleSubmit(onSubmitFormSignup)}>
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
                  error={errors.firstName !== undefined}
                  label="Firstname"
                  className={"textfield textfield_2"}
                  InputLabelProps={{ style: { marginLeft: "20px" } }}
                  type="firstName"
                  name="firstName"
                  {...register("firstName", {
                    required: {
                      value: true,
                      message: "You must enter a firstName",
                    },
                  })}
                />

                <TextField
                  error={errors.lastName !== undefined}
                  label="Lastname"
                  className={"textfield textfield_2"}
                  InputLabelProps={{ style: { marginLeft: "20px" } }}
                  type="lastName"
                  name="lastName"
                  {...register("lastName", {
                    required: {
                      value: true,
                      message: "You must enter a lastName",
                    },
                  })}
                />

                <TextField
                  error={errors.password !== undefined}
                  label="Password"
                  className={"textfield textfield_3"}
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
                <Grid>
                  <Controller
                    name="checkbox"
                    control={control}
                    rules={{ required: true }}
                    render={() => (
                      <Checkbox
                        {...register("checkbox", {
                          required: {
                            value: true,
                            message: "You must agree our terms",
                          },
                        })}
                      />
                    )}
                  />
                  <span style={{ color: errors?.checkbox ? 'red' : null }} >I agree to Onboard Terms of Service</span>
                </Grid>

                <Grid
                  container
                  alignItems="center"
                  direction="column"
                  style={{ marginTop: "20px" }}
                >
                  <CustomButton br={20} bgcolor="blue" color="white" width={300}>
                    Create my account
                  </CustomButton>

                  <a>Forgot password ? </a>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
