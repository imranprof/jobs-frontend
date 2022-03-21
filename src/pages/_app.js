import React, {useEffect, useState} from "react";
import ThemeContext from "../contexts/themeContext";

import {FormControlLabel, Switch} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import '../../styles/globals.css';
import darkTheme from "../../styles/darkTheme";
import lightTheme from "../../styles/lightTheme";

import Layout from "../views/Profile/Layout";
import Head from "next/head";

const MyApp = ({Component, pageProps}) => {
  const [darkMode, setDarkMode] = useState(true)
  const [customTheme, setCustomTheme] = useState(darkTheme)

  useEffect(() => {
    setCustomTheme(darkMode ? darkTheme : lightTheme)
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{...customTheme}}>
      <ThemeProvider theme={{...customTheme}}>
        <Layout>
          <CssBaseline/>
          <Head>
            <meta name="description" content="Seek Right Jobs For you"/>
            <title>Seek Right Jobs For you</title>
          </Head>
          <Component {...pageProps} />
          <FormControlLabel
            control={<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)}/>}
            label="Theme Switch"
          />
        </Layout>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default MyApp;
