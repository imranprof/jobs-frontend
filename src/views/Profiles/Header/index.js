import {useEffect, useState} from "react";
import Link from 'next/link';
import {useFormik} from "formik";

import {AppBar, Hidden, InputAdornment, InputBase, Toolbar} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

import {profileData} from "../../../../API/mock/profile/profileData";
import SideBar from "./components/sideBar";
import SignUpModal from "../../../auth/SignUpModal";
import SignInModal from "../../../auth/SignInModal";
import {SignOut} from "../../../auth/operations";

const ProfilesHeader = ({classes, headerRef}) => {
  const {name, avatar} = profileData;
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const [authenticated, setAuthenticated] = useState();
  useEffect(() => {
    setAuthenticated(Boolean(localStorage.getItem('token')));
  }, [authenticated]);

  const formik = useFormik({
    initialValues: {searchValue: ''},
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <AppBar className={classes.headerWrapper} ref={headerRef}>
      <Toolbar className={`${classes.headerWrapper}__toolbar`}>

        <Link href="/">
          <a className={`${classes.headerWrapper}__toolbar__logo`}>
            <h1>SeekRightJobs</h1>
          </a>
        </Link>

        <SideBar name={name} avatar={avatar} classes={classes}/>

        <Hidden mdDown>
          <div className={`${classes.headerWrapper}__toolbar__right`}>
            <form onSubmit={formik.handleSubmit}>
              <InputBase name="searchValue"
                         type="text"
                         placeholder="Search..."
                         value={formik.values.searchValue}
                         onChange={formik.handleChange}
                         className={`${classes.headerWrapper}__toolbar__search`}
                         endAdornment={
                           <InputAdornment position="end">
                             <button type="submit" className={`${classes.headerWrapper}__toolbar__search__icon`}>
                               <SearchIcon />
                             </button>
                           </InputAdornment>
                         }
              />
            </form>
            {!authenticated && (
              <div className={`${classes.headerWrapper}__authentication`}>
                <Link href="#">
                  <a className={`${classes.headerWrapper}__authentication-signin`}
                     onClick={() => {
                       setShowSignInModal(true)
                     }}
                  >
                    Sign In
                  </a>
                </Link>
                {showSignInModal &&
                <SignInModal setAuthenticated={setAuthenticated} setShowSignInModal={setShowSignInModal}/>}
                <Link href="#">
                  <a className={`${classes.headerWrapper}__authentication-signup`}
                     onClick={() => {
                       setShowSignUpModal(true)
                     }}>
                    Sign Up
                  </a>
                </Link>
                {showSignUpModal &&
                <SignUpModal setAuthenticated={setAuthenticated} setShowSignUpModal={setShowSignUpModal}/>}
              </div>
            )}
            {authenticated &&
            <Link href="#">
              <a className={`${classes.headerWrapper}__authentication-sign-out`}
                 onClick={() => {
                   SignOut(setAuthenticated);
                 }}>
                Sign Out
              </a>
            </Link>
            }
          </div>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default ProfilesHeader;
