import Link from 'next/link';
import {connect, useDispatch} from "react-redux";

import {AppBar, Hidden, IconButton, Toolbar, Tooltip} from "@material-ui/core";

import Logo from "../../../lib/logo";
import SearchBar from "../../../lib/searchBar";
import {getPrivateSlug, SignOut} from "../../../auth/operations";
import ProfilesSideBar from "./components/profilesSideBar";
import {modalType} from "../../../store/actions/authAction";

const ProfilesHeader = (props) => {
  const {classes, headerRef} = props;
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

  return (
    <AppBar className={classes.headerWrapper} ref={headerRef}>
      <Toolbar className={`${classes.headerWrapper}__toolbar`}>
        <Logo/>

        <ProfilesSideBar classes={classes}/>

        <Hidden mdDown>
          <div className={`${classes.headerWrapper}__toolbar__right`}>
            <SearchBar/>
            <Link href={"/profiles"}>
              <a className={`${classes.headerWrapper}__button`}>
                All Profiles
              </a>
            </Link>
            <Link href={"/profile"}>
              <a className={`${classes.headerWrapper}__button`}>
                Template Profile
              </a>
            </Link>
            {props.isAuthenticated ?
              <>
                <Link href={`${getPrivateSlug()}`}>
                  <a className={`${classes.headerWrapper}__button`}>
                    My Profile
                  </a>
                </Link>
                <Link href="">
                  <a className={`${classes.headerWrapper}-sign-out`}
                     onClick={handleSignOutClick}>
                    Sign out
                  </a>
                </Link>
              </> :
              <>
                <Link href="">
                  <a className={`${classes.headerWrapper}__button`}
                     onClick={handleSignInClick}>
                    Sign In
                  </a>
                </Link>
                <Link href="">
                  <a className={`${classes.headerWrapper}-signup`}
                     onClick={handleSignUpClick}>
                    Sign Up
                  </a>
                </Link>
              </>
            }
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
