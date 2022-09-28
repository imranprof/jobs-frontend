import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import {ThemeProvider} from "@material-ui/styles";
import {CssBaseline, Container} from "@material-ui/core";

import darkTheme from "../../../styles/darkTheme";
import lightTheme from "../../../styles/lightTheme";
import Header from "../Header"
import Footer from "../Profile/Footer";
import CustomModal from "../../lib/CustomModal";
import ThemeButton from "../../lib/themeButton";

const withLayout = (Component, type) => {

  // LocalStorage
  const getTheme = () => {
    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme')
      if (theme) {
        return theme === 'true';
      }
      return null;
    }
  }

  return (props) => {
    const [darkMode, setDarkMode] = useState(getTheme() === null ? true: getTheme());
    const [customTheme, setCustomTheme] = useState(darkTheme)
    const modalType = useSelector(state => state.auth.modalType)

    let getThemeMode = '';
    useEffect(() => {
      getThemeMode = getTheme()
      setCustomTheme(darkMode ? darkTheme : lightTheme)
    }, [darkMode]);

    return (
      <ThemeProvider theme={{...customTheme}}>
        <CssBaseline/>
        {modalType && <CustomModal/>}
        <Header type={type}/>
        <Container fixed>
          <Component {...props} />
          <ThemeButton themeMode={darkMode} setDarkMode={setDarkMode}/>
        </Container>
        <Footer/>
      </ThemeProvider>
    )
  }
}

export default withLayout;
