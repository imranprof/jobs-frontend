import React, {useContext, useEffect, useState} from 'react';

import {ThemeProvider} from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Container, FormControlLabel, Switch} from "@material-ui/core";

import ThemeContext from "../../contexts/themeContext";
import darkTheme from "../../../styles/darkTheme";
import lightTheme from "../../../styles/lightTheme";
import Header from "../Header"
import Footer from "../Footer";
import ThemeContextProvider from "../../contexts/themeContext";
import {LayoutStyle} from "./style";

function withLayout(Component, type) {
  return (props) => {
    const [darkMode, setDarkMode] = useState(true)
    const [customTheme, setCustomTheme] = useState(darkTheme)
    const customThemeProvider = useContext(ThemeContextProvider);
    const classes = LayoutStyle(customThemeProvider);

    useEffect(() => {
      setCustomTheme(darkMode ? darkTheme : lightTheme)
    }, [darkMode]);

    return (
        <ThemeContext.Provider value={{...customTheme}}>
          <ThemeProvider theme={{...customTheme}}>
            <CssBaseline/>
            <Header type={type}/>
            <Container fixed className={`${classes.layoutWrapper}__container`}>
              <Component {...props} />
            </Container>
            <Footer/>
            <FormControlLabel
              control={<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)}/>}
              label="Theme Switch"
            />
          </ThemeProvider>
        </ThemeContext.Provider>
    )
  }
}

export default withLayout;
