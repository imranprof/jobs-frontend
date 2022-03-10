import React, {useState} from "react";
import Link from "next/link";

import {Hidden, IconButton} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Divider from "@material-ui/core/Divider";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Logo from "../../../../lib/logo";
import SearchBar from "../../../../lib/searchBar";

const ProfilesSideBar = ({classes}) => {
    const [open, setOpen] = useState(false);
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
                      <Logo />
                      <Link href="#">
                        <a className={`${classes.headerWrapper}__authentication-signin`}>Sign In</a>
                      </Link>
                    </div>

                    <Divider/>

                  <div className={`${classes.headerWrapper}__profiles__side-bar__bottom`}>
                    <SearchBar />
                    <Link href="#">
                      <a className={`${classes.headerWrapper}__authentication-signup`}>Sign Up</a>
                    </Link>
                  </div>

                </div>
            </SwipeableDrawer>
        </>
    );
};

export default ProfilesSideBar;
