import {AppBar, Hidden, Toolbar,} from "@material-ui/core";

import {profileData} from "../../../../API/mock/profile/profileData";
import ProfileInfo from "./components/profileInfo";
import SideBar from "./components/sideBar";
import NavItems from "./components/navItems";

const ProfileHeader = ({ classes, headerRef }) => {
    const {name, avatar} = profileData;

    return (
        <AppBar className={classes.headerWrapper} ref={headerRef}>
            <Toolbar className={`${classes.headerWrapper}__toolbar`}>
                <ProfileInfo name={name} avatar={avatar} showName={true} classes={classes} />
                <SideBar name={name} avatar={avatar} classes={classes}/>
                <Hidden mdDown>
                    <NavItems classes={classes} variant={"default"}/>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

export default ProfileHeader;
