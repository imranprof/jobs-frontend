import {AppBar, Hidden, Toolbar,} from "@material-ui/core";

import {profileData} from "../../../../API/mock/profile/profileData";
import SideBar from "./components/sideBar";
import NavItems from "./components/navItems";

const ProfilesHeader = ({ classes, headerRef }) => {
    const {name, avatar} = profileData;

    return (
        <AppBar className={classes.headerWrapper} ref={headerRef}>
            <Toolbar className={`${classes.headerWrapper}__toolbar`}>
                <h2>SeekRightJobs</h2>
                <SideBar name={name} avatar={avatar} classes={classes}/>
                <Hidden mdDown>
                    <NavItems classes={classes} variant={"default"}/>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

export default ProfilesHeader;
