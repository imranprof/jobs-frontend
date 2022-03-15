import React, {useEffect, useState} from 'react';
import axios from "axios";

import {ThemeProvider} from "@material-ui/styles";
import {CssBaseline, Container, FormControlLabel, Switch} from "@material-ui/core";

import ThemeContext from "../../contexts/themeContext";
import darkTheme from "../../../styles/darkTheme";
import lightTheme from "../../../styles/lightTheme";
import Header from "../Header"
import Footer from "../Profile/Footer";

function withLayout(Component, type) {
  return (props) => {
    const [darkMode, setDarkMode] = useState(true)
    const [customTheme, setCustomTheme] = useState(darkTheme)

    useEffect(() => {
      setCustomTheme(darkMode ? darkTheme : lightTheme)
    }, [darkMode]);

    return (
      <ThemeContext.Provider value={{...customTheme}}>
        <ThemeProvider theme={{...customTheme}}>
          <CssBaseline/>
          <Header type={type}/>
          <Container fixed>
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
