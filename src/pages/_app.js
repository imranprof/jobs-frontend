import Head from "next/head";
import '../../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="Seek Right Jobs For you"/>
        <title>Seek Right Jobs For you</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
