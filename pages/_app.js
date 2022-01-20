import "../assets/css/global.scss";
//layout
import "../assets/css/layout/_sidebar.scss";
//modules
import "/assets/css/page/_login.scss";
import "/assets/css/page/_dashboard.scss";

export default function MyApp({ Component, pageProps }) {
    if (typeof window !== 'undefined') {
        if (pageProps.protected && !localStorage.getItem('token')) return (<div>You do not have access. try to log in</div>)
      }
    return (<Component {...pageProps} />);
}
