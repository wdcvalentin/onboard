import { useReducer } from 'react';
import { reducer, initialState } from '../reducer/reducer';
import { Context } from '../Context/context'
import "../assets/css/global.scss";

export default function MyApp({ Component, pageProps }) {
  const [user, userDispatch] = useReducer(reducer, initialState);
  console.log('user', user)
  if (typeof window !== 'undefined') {
    if (pageProps.protected && !localStorage.getItem('token')) {
      return <div>You do not have access. try to <a href="/login">log in</a></div>
    }
  }

  return (
    <Context.Provider value={{
      userState: user.user,
      userDispatch,
    }}><Component {...pageProps} />
    </Context.Provider>
  );
}
