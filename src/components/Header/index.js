import React, {useContext, useEffect, useRef} from 'react';

import {AppBar, Hidden, Toolbar,} from "@material-ui/core";

import ThemeContextProvider from "../../contexts/themeContext";
import ProfileInfo from "./profileInfo";
import SideBar from "./sideBar";
import NavItems from "./navItems";
import {HeaderStyle} from './style';

const Header = () => {
    const customTheme = useContext(ThemeContextProvider);
    const classes = HeaderStyle(customTheme);
    const headerRef = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const isSticky = () => {
        const header = headerRef.current;
        const scrollTop = window.scrollY;
        scrollTop >= 80 ? header.classList.add("isSticky") : header.classList.remove("isSticky");
    };

    return (
        <AppBar className={classes.headerWrapper} ref={headerRef}>
            <Toolbar className={`${classes.headerWrapper}__toolbar`}>
                <ProfileInfo classes={classes} showName={true}/>
                <SideBar classes={classes}/>
                <Hidden mdDown>
                    <NavItems classes={classes} variant={"default"}/>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
