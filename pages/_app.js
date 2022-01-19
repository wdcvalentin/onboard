import "../assets/css/global.css"
//layout
import "../assets/css/layout/sidebar.css"
import "../assets/css/layout/sidecontainer.css"
// pages
import "../assets/css/page/dashboard.css"

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}