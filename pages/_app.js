import React, {useEffect, useState} from "react";
import ThemeContext from "../src/contexts/themeContext";

import {FormControlLabel, Switch} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import '../styles/globals.css';
import darkTheme from "../styles/darkTheme";
import lightTheme from "../styles/lightTheme";

import Layout from "../src/components/Layout";

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