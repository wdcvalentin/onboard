import "../assets/css/global.scss"
//layout
import "../assets/css/layout/_sidebar.scss"
import "../assets/css/layout/_sidecontainer.scss"
// pages
import "../assets/css/page/_dashboard.scss"
//modules
import "../assets/css/_login.module.scss";


export default function MyApp({ Component, pageProps }) {
    if (typeof window !== 'undefined') {
        if (pageProps.protected && !localStorage.getItem('token')) return (<div>You don't have access. try to log in</div>)
      }
    return (<Component {...pageProps} />);
}