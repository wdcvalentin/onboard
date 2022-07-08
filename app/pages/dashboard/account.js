import { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Context } from '../../Context/context';
import { updateUser } from '../../api/user.api';
import SideBar from '../../components/layout/sidebar';

export default function Account() {
  const userContext = useContext(Context);
  const { userState: user } = userContext;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const onSubmitFormUpdate = async (values) => {
    const response = await updateUser(values);
    return response;
  }

    return (
      <div className={"dashboard--section"}>
        <SideBar/>
        <div className={'dashboard--container'}>
          <div className={"dashboard--heading"}>
            <h2>Account</h2>
          </div>
          <div className={"account--wrapper"}>
            <form onSubmit={handleSubmit(onSubmitFormUpdate)}>
              <input 
                onChange={(e) => console.log('e.target.value')}
                error={errors.email !== undefined}
                type='email'
                label="Email Address"
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
              <input value={user.password} type='password' />
              <input value={user.firstName} type='firstName' />
              <input value={user.lastName} type='lastName' />
              {user.biography && <input value={user.biography} type='description' />}
            </form>
          </div>
        </div>
      </div>
    )
}

