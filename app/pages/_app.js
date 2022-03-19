import "../assets/css/global.scss";

export default function MyApp({ Component, pageProps }) {
    if (typeof window !== 'undefined') {
        if (pageProps.protected && !localStorage.getItem('token')) {
          return <div>You do not have access. try to <a href="/login">log in</a></div>
        }
      }
    return (<Component {...pageProps} />);
}
