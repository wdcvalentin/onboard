import "../assets/css/global.scss";
//layout
import "../assets/css/layout/sidebar.css";
//modules
import "../assets/css/login.module.css";
// pages
import "../assets/css/page/dashboard.css";

export default function MyApp({ Component, pageProps }) {
    if (typeof window !== 'undefined') {
        if (pageProps.protected && !localStorage.getItem('token')) return (<div>You do not have access. try to log in</div>)
      }
    return (<Component {...pageProps} />);
}
