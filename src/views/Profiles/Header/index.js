import Link from 'next/link';
import {connect, useDispatch} from "react-redux";

import {AppBar, Hidden, IconButton, Toolbar, Tooltip} from "@material-ui/core";

import Logo from "../../../lib/logo";
import SearchBar from "../../../lib/searchBar";
import {getPrivateSlug, SignOut} from "../../../auth/operations";
import ProfilesSideBar from "./components/profilesSideBar";
import {modalType} from "../../../store/actions/authAction";
import {getRole} from "../../../auth/operations";
import {resetProfiles} from "../../../store/actions/searchAction";

const ProfilesHeader = (props) => {
  const {classes, headerRef} = props;
  const dispatch = useDispatch()
  const role = getRole()

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
    dispatch(resetProfiles(true))
  }

  return (
    <AppBar className={classes.headerWrapper} ref={headerRef}>
      <Toolbar className={`${classes.headerWrapper}__toolbar`}>
        <Logo/>

        <ProfilesSideBar classes={classes} role={role} />

        <Hidden mdDown>
          <div className={`${classes.headerWrapper}__toolbar__right`}>
            <SearchBar/>

            {!props.isAuthenticated && <Link href={"/profile"}>
              <a className={`${classes.headerWrapper}__button`}>
                Template Profile
              </a>
            </Link>}
            <Link href={"/profiles"}>
              <a className={`${classes.headerWrapper}__button`} onClick={handleClick}>
                Find Talents
              </a>
            </Link>
            <Link href={"/jobs"}>
              <a className={`${classes.headerWrapper}__button`}>
                Find Jobs
              </a>
            </Link>

            {props.isAuthenticated ?
              <>
                <Link href={`/${getPrivateSlug()}`}>
                  <a className={`${classes.headerWrapper}__button`}>
                    My Profile
                  </a>
                </Link>

                {role === 'employee' ?
                (<Link href={"/myJobs"}>
                  <a className={`${classes.headerWrapper}__button`}>
                    My Jobs
                  </a>
                </Link>) : ""}

                <Link href={"/messages"}>
                  <a className={`${classes.headerWrapper}__button`}>
                    Messages
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
