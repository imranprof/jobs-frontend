import React, {useContext} from 'react';

import {TailSpin} from "react-loader-spinner";

import ThemeContextProvider from "../../contexts/themeContext";
import {LoaderStyle} from "./style";

const CustomLoader = () => {
    const customTheme = useContext(ThemeContextProvider);
    const classes = LoaderStyle(customTheme);

    return (
        <div className={classes.loaderWrapper}>
            <TailSpin color="#FF014F" height={70} width={70} ariaLabel='loading' />
        </div>
    );
}

export default CustomLoader;
