import {useContext} from "react";

import Divider from "@material-ui/core/Divider";

import ThemeContextProvider from "../../../contexts/themeContext";
import {DividerStyle} from "./style";

const CustomDivider = () =>  {
    const customTheme = useContext(ThemeContextProvider);
    const classes = DividerStyle(customTheme);
    return (
        <Divider className={`${classes.divider}`}/>
    );
}

export default CustomDivider;
