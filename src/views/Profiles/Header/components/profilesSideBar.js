import React, {useState} from "react";
import Link from "next/link";
import {connect, useDispatch} from "react-redux";

import {Badge, Hidden, IconButton} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Divider from "@material-ui/core/Divider";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import Logo from "../../../../lib/logo";
import SearchBar from "../../../../lib/searchBar";
import {SignOut} from "../../../../auth/operations";
import {modalType} from "../../../../store/actions/authAction";
import {getProfileSlug} from "../../../../store/reducers/authReducers";
import {getTheme} from "../../../Layout";
import AvatarProfileInfo from "../../../../lib/profile/avatarProfileInfo";

const ProfilesSideBar = (props) => {
  const {classes, role, notificationCount, isAuthenticated} = props;
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSignInClick = () => {
    dispatch(modalType('SignIn'))
  }

  const handleSignUpClick = () => {
    dispatch(modalType('SignUp'))
  }

  const handleSignOutClick = () => {
    dispatch(SignOut())
  }

  return (
    <>
      <Hidden lgUp>
        <IconButton
          className={`${classes.headerWrapper}__menu`}
          onClick={() => setOpen(true)}
          role="button"
          tabIndex={0}
          aria-label="opens the sidebar for small devices">
          <MenuIcon className={`${classes.headerWrapper}__menu__icon`}/>
        </IconButton>
      </Hidden>

      <SwipeableDrawer
        open={open} anchor="left"
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div className={`${classes.headerWrapper}__profiles__side-bar`}>

          <div className={`${classes.headerWrapper}__profiles__side-bar__wrapper`}>
            <IconButton
              className={`${classes.headerWrapper}__profiles__close-icon`}
              onClick={() => setOpen(false)}
            >
              <CloseIcon/>
            </IconButton>
          </div>

          <div className={`${classes.headerWrapper}__profiles__side-bar__top`}>
            <Logo/>
            {!isAuthenticated &&
            <Link href="">
              <a className={`${classes.headerWrapper}__button`}
                 onClick={handleSignInClick}>Sign In
              </a>
            </Link>
            }
          </div>

          <Divider style={{marginBottom: 15}}/>
          {isAuthenticated && (
            <>
              <AvatarProfileInfo/>
              <Divider style={{marginTop: 15}}/>
            </>
          )}

          <SearchBar/>
          <Divider style={{marginTop: 15}}/>

          <div className={`${classes.headerWrapper}__profiles__side-bar__links`}>
            <Link href={"/profiles"}>
              <a
                className={`${classes.headerWrapper}__button ${classes.headerWrapper}__profiles__side-bar__links-link`}>
                Find Talents
              </a>
            </Link>
            <Link href={"/jobs"}>
              <a
                className={`${classes.headerWrapper}__button ${classes.headerWrapper}__profiles__side-bar__links-link`}>
                Find Jobs
              </a>
            </Link>

            {!isAuthenticated &&
            (<Link href={"/profile"}>
              <a
                className={`${classes.headerWrapper}__button ${classes.headerWrapper}__profiles__side-bar__links-link`}>
                Template Profile
              </a>
            </Link>)
            }
            {isAuthenticated &&
            role === 'employee' &&
            (<Link href={"/myJobs"}>
              <a
                className={`${classes.headerWrapper}__button ${classes.headerWrapper}__profiles__side-bar__links-link`}>
                My Jobs
              </a>
            </Link>)
            }
            {isAuthenticated &&
            (<>
              <Link href={"/job/contract"}>
                <a
                  className={`${classes.headerWrapper}__button ${classes.headerWrapper}__profiles__side-bar__links-link`}>
                  All Contacts
                </a>
              </Link>

              <Link href={`${getProfileSlug()}`}>
                <a
                  className={`${classes.headerWrapper}__button ${classes.headerWrapper}__profiles__side-bar__links-link`}>
                  My Profile
                </a>
              </Link>

              <Link href={"/messages"}>
                <Badge badgeContent={notificationCount} color={getTheme() ? "secondary" : "primary"}>
                  <a
                    className={`${classes.headerWrapper}__button ${classes.headerWrapper}__profiles__side-bar__links-link`}>
                    Messages
                  </a>
                </Badge>
              </Link>
            </>)
            }

          </div>

          <div className={`${classes.headerWrapper}__profiles__side-bar__bottom`}>
            {isAuthenticated ? (
              <Link href="">
                <a className={`${classes.headerWrapper}-sign-out`}
                   onClick={handleSignOutClick}>Sign out
                </a>
              </Link>
            ) : (
              <Link href="">
                <a className={`${classes.headerWrapper}-signup`}
                   onClick={handleSignUpClick}>Sign Up</a>
              </Link>
            )}
          </div>
        </div>
      </SwipeableDrawer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    modalType: state.auth.modalType,
    notificationCount: state.messageList.total_notification_count
  }
}

export default connect(mapStateToProps)(ProfilesSideBar);
