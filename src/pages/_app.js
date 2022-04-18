import Head from "next/head";
import '../../styles/globals.css';
import {InitialPropProvider} from "../contexts/InitialPropContext";

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <meta name="description" content="Seek Right Jobs For you"/>
        <title>Seek Right Jobs For you</title>
      </Head>
      <InitialPropProvider>
        <Component {...pageProps} />
      </InitialPropProvider>
    </>
  )
}

export default MyApp;
