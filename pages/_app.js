import { SessionProvider } from "next-auth/react"
import "../assets/css/global.scss";

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
