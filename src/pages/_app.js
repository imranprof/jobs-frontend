import Head from "next/head";
import '../../styles/globals.css';
import {AuthProvider} from "../contexts/AuthContext";

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <meta name="description" content="Seek Right Jobs For you"/>
        <title>Seek Right Jobs For you</title>
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}

export default MyApp;
