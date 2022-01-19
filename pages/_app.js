import "../assets/css/global.css";
//layout
import "../assets/css/layout/sidebar.css";
//modules
import "../assets/css/login.module.css";
// import "../assets/css/layout/sidecontainer.css"
// pages
import "../assets/css/page/dashboard.css";


export default function MyApp({ Component, pageProps }) {
    if (typeof window !== 'undefined') {
        if (pageProps.protected && !localStorage.getItem('token')) return (<div>You don't have access. try to log in</div>)
      }
    return (<Component {...pageProps} />);
}