import Head from "next/head";

import {Provider} from "react-redux";
import {store} from "../store";

import '../../styles/globals.css';

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <meta name="description" content="Seek Right Jobs For you"/>
                <title>Seek Right Jobs For you</title>
            </Head>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    )
}

export default MyApp;
