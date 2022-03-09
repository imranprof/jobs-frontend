import Link from 'next/link';

import {AppBar, Hidden, Toolbar} from "@material-ui/core";

import ProfilesSideBar from "./components/profilesSideBar";
import Logo from "../../../lib/logo";
import SearchBar from "../../../lib/searchBar";

const ProfilesHeader = ({classes, headerRef}) => {

  return (
    <AppBar className={classes.headerWrapper} ref={headerRef}>
      <Toolbar className={`${classes.headerWrapper}__toolbar`}>
        <Logo />

        <ProfilesSideBar classes={classes}/>

        <Hidden mdDown>
          <div className={`${classes.headerWrapper}__toolbar__right`}>

            <SearchBar />

            <div className={`${classes.headerWrapper}__authentication`}>
              <Link href="#">
                <a className={`${classes.headerWrapper}__authentication-signin`}>Sign In</a>
              </Link>
              <Link href="#">
                <a className={`${classes.headerWrapper}__authentication-signup`}>Sign Up</a>
              </Link>
            </div>
          </div>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default ProfilesHeader;
