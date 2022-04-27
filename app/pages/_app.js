import { useReducer, useEffect } from 'react';
import { reducer, initialState } from '../reducer/reducer';
import { Context } from '../Context/context'
import { ACTIONS } from '../reducer/reducer';
import { getUser } from '../api/user.api'
import "../assets/css/global.scss";

export default function MyApp({ Component, pageProps }) {
  const [user, userDispatch] = useReducer(reducer, initialState);

  useEffect(async () => {
    if (!user || !user.user) {
      const userData = await getUser(localStorage.getItem('token'))
      userDispatch({ type: ACTIONS.SET_USER, payload: { user: userData } });
    }
  }, [])

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
