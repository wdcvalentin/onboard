import { useEffect, useReducer } from 'react';
import { getUser } from '../api/user.api';
import "../assets/css/global.scss";
import { Context } from '../Context/context';
import { ACTIONS, initialState, reducer } from '../reducer/reducer';

export default function MyApp({Component, pageProps}) {
  const [user, userDispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const token = localStorage.getItem('token');
    async function fetchUser() {
      const response = await getUser(token)
      if (!user || !user.user) {
        userDispatch({ type: ACTIONS.SET_USER, payload: { user: response } });
      }
    }
    token && fetchUser()
  }, [])

  if (typeof window !== 'undefined') {
    if (pageProps.protected && !localStorage.getItem('token')
       ) {
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
