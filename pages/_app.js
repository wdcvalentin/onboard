import "../assets/css/login.module.css";

export default function MyApp({ Component, pageProps }) {
    if (typeof window !== 'undefined') {
        if (pageProps.protected && !localStorage.getItem('token')) return (<div>You don't have access. try to log in</div>)
      }
    return (<Component {...pageProps} />);
}