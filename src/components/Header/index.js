import React, {useContext, useEffect, useRef, useState} from 'react';

import {AppBar, Hidden, Toolbar,} from "@material-ui/core";

import ThemeContextProvider from "../../contexts/themeContext";
import {profileData} from "../../../API/mock/profileData";
import ProfileInfo from "./profileInfo";
import SideBar from "./sideBar";
import NavItems from "./navItems";
import {HeaderStyle} from './style';
import Button from "@material-ui/core/Button";
import SignInModal from "../../auth/SignInModal";
import {SignOut} from "../../auth/operations";
import SignUpModal from "../../auth/SignUpModal";

const Header = () => {
    const customTheme = useContext(ThemeContextProvider);
    const classes = HeaderStyle(customTheme);
    const {name, avatar} = profileData;
    const headerRef = useRef(null);
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [showSignInModal, setShowSignInModal] = useState(false);
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
                <ProfileInfo name={name} avatar={avatar} showName={true} classes={classes}/>

                <Button onClick={() => setShowSignUpModal(true)}>Sign Up</Button>
                {showSignUpModal && <SignUpModal setShowSignUpModal={setShowSignUpModal}/>}

                <Button onClick={() => setShowSignInModal(true)}>Sign In</Button>
                {showSignInModal && <SignInModal setShowSignInModal={setShowSignInModal}/>}

                <Button onClick={SignOut}>Sign Out</Button>
                <SideBar name={name} avatar={avatar} classes={classes}/>
                <Hidden mdDown>
                    <NavItems classes={classes} variant={"default"}/>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
