import React, {useContext} from 'react';
import ThemeContextProvider from "../../contexts/themeContext";

import {AppBar, Hidden, Toolbar,} from "@material-ui/core";

import {NavbarStyle} from './style';
import ProfileInfo from "./profileInfo";
import SideBar from "./sideBar";
import NavItems from "./navItems";

const Header = () => {
    const customTheme = useContext(ThemeContextProvider);
    const classes = NavbarStyle(customTheme);

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
