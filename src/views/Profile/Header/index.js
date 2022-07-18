import {AppBar, Hidden, Toolbar, Tooltip, IconButton} from "@material-ui/core";
import WbSunnyIcon from '@material-ui/icons/WbSunny';

import ProfileInfo from "./components/profileInfo";
import ProfileSideBar from "./components/sideBar";
import NavItems from "./components/navItems";
import ShareButton from "../../../lib/profile/profileshare/shareButton";
import React from "react";
import FontAwesomeIcons from "../../../../styles/FontAwesomeIcons";

const ProfileHeader = ({ classes, headerRef, themeMode, themeSet }) => {

    const handleClick = () => {
        themeSet(!themeMode);
    }
    let mode = "Switch to LightMode";
    if(!themeMode){
        mode = "Switch to DarkMode"
    }

    return (
        <AppBar className={classes.headerWrapper} ref={headerRef}>
            <Toolbar className={`${classes.headerWrapper}__toolbar`}>
                <ProfileInfo showName={true} classes={classes} />
                <ProfileSideBar classes={classes}/>
                <Hidden mdDown>
                    <div className={`${classes.headerWrapper}__nav__navShare`}>
                        <NavItems classes={classes} variant={"default"}/>
                        <ShareButton classes={classes}/>
                        <Tooltip title={mode} placement="bottom">
                            {themeMode ? (
                                <div className={`${classes.headerWrapper}__nav__theme-switch`}>
                                    <IconButton onClick={handleClick}> <WbSunnyIcon/> </IconButton>
                                </div>

                            ) : (
                                <div className={`${classes.headerWrapper}__nav__theme-switch`}>
                                    <IconButton onClick={handleClick}><i className={`${FontAwesomeIcons.darkMode}`} /></IconButton>
                                </div>
                            )
                            }
                        </Tooltip>
                    </div>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

export default ProfileHeader;
