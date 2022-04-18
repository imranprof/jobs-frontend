import {useContext} from "react";
import Link from 'next/link';

import {AppBar, Hidden, Toolbar} from "@material-ui/core";

import Logo from "../../../lib/logo";
import SearchBar from "../../../lib/searchBar";
import {SignOut} from "../../../auth/operations";
import ProfilesSideBar from "./components/profilesSideBar";
import {InitialPropContext} from "../../../contexts/InitialPropContext";

const ProfilesHeader = ({classes, headerRef}) => {
  const {authenticated, setAuthenticated, setModalType} = useContext(InitialPropContext);

  return (
    <AppBar className={classes.headerWrapper} ref={headerRef}>
      <Toolbar className={`${classes.headerWrapper}__toolbar`}>
        <Logo/>

        <ProfilesSideBar classes={classes}/>

        <Hidden mdDown>
          <div className={`${classes.headerWrapper}__toolbar__right`}>
            <SearchBar/>
            {authenticated ? (
              <Link href="#">
                <a className={`${classes.headerWrapper}__authentication-sign-out`}
                   onClick={() => {
                     SignOut(setAuthenticated);
                   }}>
                  Sign Out
                </a>
              </Link>
            ) : (
              <div className={`${classes.headerWrapper}__authentication`}>
                <Link href="#">
                  <a className={`${classes.headerWrapper}__authentication-signin`}
                     onClick={() => {
                       setModalType('SignIn');
                     }}>
                    Sign In
                  </a>
                </Link>
                <Link href="#">
                  <a className={`${classes.headerWrapper}__authentication-signup`}
                     onClick={() => {
                       setModalType('SignUp');
                     }}>
                    Sign Up
                  </a>
                </Link>
              </div>
            )}
          </div>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

export default ProfilesHeader;
