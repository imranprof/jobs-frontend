import Link from 'next/link';
import {connect, useDispatch} from "react-redux";

import {AppBar, Hidden, IconButton, Toolbar, Tooltip} from "@material-ui/core";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import FontAwesomeIcons from "../../../../styles/FontAwesomeIcons";

import Logo from "../../../lib/logo";
import SearchBar from "../../../lib/searchBar";
import {SignOut} from "../../../auth/operations";
import ProfilesSideBar from "./components/profilesSideBar";
import {modalType} from "../../../store/actions/authAction";

const ProfilesHeader = (props) => {
  const {classes, headerRef, themeMode, themeSet} = props;
  const dispatch = useDispatch()

  const handleSignInClick = () => {
    dispatch(modalType('SignIn'))
  }

  const handleSignUpClick = () => {
    dispatch(modalType('SignUp'))
  }

  const handleSignOutClick = async () => {
    await dispatch(SignOut())
  }

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
        <Logo/>

        <ProfilesSideBar classes={classes}/>

        <Hidden mdDown>
          <div className={`${classes.headerWrapper}__toolbar__right`}>
            <SearchBar/>
            {props.isAuthenticated ? (
              <Link href="#">
                <a className={`${classes.headerWrapper}__authentication-sign-out`}
                   onClick={handleSignOutClick}>
                  Sign out
                </a>
              </Link>
            ) : (
              <div className={`${classes.headerWrapper}__authentication`}>
                <Link href="#">
                  <a className={`${classes.headerWrapper}__authentication-signin`}
                     onClick={handleSignInClick}>
                    Sign In
                  </a>
                </Link>
                <Link href="#">
                  <a className={`${classes.headerWrapper}__authentication-signup`}
                     onClick={handleSignUpClick}>
                    Sign Up
                  </a>
                </Link>
              </div>
            )}
            <Tooltip title={mode} placement="bottom">
              {themeMode ? (
                  <div className={`${classes.headerWrapper}__profiles__theme-switch`}>
                    <IconButton onClick={handleClick}> <WbSunnyIcon/> </IconButton>
                  </div>
              ) : (
                  <div className={`${classes.headerWrapper}__profiles__theme-switch`}>
                    <IconButton onClick={handleClick}><i className={`${FontAwesomeIcons.darkMode}`} /></IconButton>
                  </div>
              )
              }
            </Tooltip>
          </div>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    modalType: state.auth.modalType
  }
}

export default connect(mapStateToProps)(ProfilesHeader);
