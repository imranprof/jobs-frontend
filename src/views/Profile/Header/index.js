import {AppBar, Hidden, Toolbar} from "@material-ui/core";

import ProfileInfo from "./components/profileInfo";
import ProfileSideBar from "./components/sideBar";
import NavItems from "./components/navItems";
import ShareButton from "../../../lib/profile/profileshare/shareButton";
import BackToHomeButton from "../../../lib/profile/backToHomeButton";

const ProfileHeader = ({classes, headerRef}) => {
  return (
    <AppBar className={classes.headerWrapper} ref={headerRef}>
      <Toolbar className={`${classes.headerWrapper}__toolbar`}>
        <div className={`${classes.headerWrapper}__toolbar__navLeft`}>
          <BackToHomeButton />
          <ProfileInfo showName={true} classes={classes}/>
        </div>
        <ProfileSideBar classes={classes}/>
        <Hidden mdDown>
          <div className={`${classes.headerWrapper}__nav__navShare`}>
            <NavItems classes={classes} variant={"default"}/>
            <ShareButton classes={classes}/>
          </div>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default ProfileHeader;
