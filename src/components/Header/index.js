import React, {useContext} from 'react';

import {AppBar, Hidden, Toolbar,} from "@material-ui/core";

import ThemeContextProvider from "../../contexts/themeContext";
import ProfileInfo from "./profileInfo";
import SideBar from "./sideBar";
import NavItems from "./navItems";
import {HeaderStyle} from './style';

const Header = () => {
    const customTheme = useContext(ThemeContextProvider);
    const classes = HeaderStyle(customTheme);

    return (
        <AppBar className={classes.headerWrapper} position="sticky">
            <Toolbar className={`${classes.headerWrapper}__toolbar`}>
                <ProfileInfo classes={classes}/>
                <SideBar classes={classes}/>
                <Hidden mdDown>
                    <NavItems classes={classes} variant={"default"}/>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
