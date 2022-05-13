import React, {useState} from "react";
import Link from "next/link";
import {connect, useDispatch} from "react-redux";

import {Hidden, IconButton} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Divider from "@material-ui/core/Divider";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import Logo from "../../../../lib/logo";
import SearchBar from "../../../../lib/searchBar";
import {SignOut} from "../../../../auth/operations";
import {modalType} from "../../../../store/actions/authAction";

const ProfilesSideBar = (props) => {
  const { classes } = props;
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
            {!props.isAuthenticated && (
              <Link href="#">
                <a className={`${classes.headerWrapper}__authentication-signin`}
                   onClick={handleSignInClick}>Sign In
                </a>
              </Link>
            )}
          </div>

          <Divider/>

          <div className={`${classes.headerWrapper}__profiles__side-bar__bottom`}>
            <SearchBar/>
            {props.isAuthenticated ? (
              <Link href="#">
                <a className={`${classes.headerWrapper}__authentication-sign-out`}
                   onClick={handleSignOutClick}>Sign out
                </a>
              </Link>
            ) : (
              <Link href="#">
                <a className={`${classes.headerWrapper}__authentication-signup`}
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
    modalType: state.auth.modalType
  }
}

export default connect(mapStateToProps)(ProfilesSideBar);
