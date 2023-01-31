import Link from 'next/link'

import {AppBar, Hidden, Toolbar} from "@material-ui/core";
import Button from "@material-ui/core/Button";

import ProfileInfo from "./components/profileInfo";
import ProfileSideBar from "./components/sideBar";
import NavItems from "./components/navItems";
import ShareButton from "../../../lib/profile/profileshare/shareButton";
import BackToHomeButton from "../../../lib/profile/backToHomeButton";
import {getProfileSlug} from "../../../store/reducers/authReducers";
import {getRole} from "../../../auth/operations";

const ProfileHeader = ({classes, headerRef}) => {
  const resumeURL = `${process.env.NEXT_PUBLIC_RESUME_DOWNLOAD_URL}/${getProfileSlug()}.pdf`;

  return (
    <AppBar className={classes.headerWrapper} ref={headerRef}>
      <Toolbar className={`${classes.headerWrapper}__toolbar`}>
        <div className={`${classes.headerWrapper}__toolbar__navLeft`}>
          <BackToHomeButton />
          <ProfileInfo showName={true} classes={classes}/>
        </div>
        <ProfileSideBar classes={classes} resumeURL={resumeURL} />
        <Hidden mdDown>
          <div className={`${classes.headerWrapper}__nav__navShare`}>
            <NavItems classes={classes} variant={"default"}/>
            {getRole() === 'employee' ? (
              <Button variant="outlined">
                <Link href={resumeURL}>
                  <a className={`${classes.headerWrapper}__resume`}>
                    Download Resume
                  </a>
                </Link>
              </Button>
            ) : ""}
            <ShareButton classes={classes}/>
          </div>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default ProfileHeader;
