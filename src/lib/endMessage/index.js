import React, {useContext} from 'react';

import ThemeContextProvider from "../../contexts/themeContext";
import {EndMessageStyle} from "./style";

const EndMessage = ({ title }) => {
    const customTheme = useContext(ThemeContextProvider);
    const classes = EndMessageStyle(customTheme);

    return (
        <div className={classes.endMessageWrapper}>
            <span>{title}</span>
        </div>
    );
}

export default EndMessage;
