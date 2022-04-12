import {AppBar, Hidden, Toolbar,} from "@material-ui/core";

import ProfileInfo from "./components/profileInfo";
import ProfileSideBar from "./components/profileSideBar";
import NavItems from "./components/navItems";

const ProfileHeader = ({ classes, headerRef }) => {

    return (
        <AppBar className={classes.headerWrapper} ref={headerRef}>
            <Toolbar className={`${classes.headerWrapper}__toolbar`}>
                <ProfileInfo showName={true} classes={classes} />
                <ProfileSideBar classes={classes}/>
                <Hidden mdDown>
                    <NavItems classes={classes} variant={"default"}/>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

export default ProfileHeader;
