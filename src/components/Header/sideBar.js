import React, {useState} from "react";

import {Hidden, IconButton} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Divider from "@material-ui/core/Divider";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import ProfileInfo from "./profileInfo";
import NavItems from "./navItems";

const SideBar = ({classes}) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Hidden lgUp>
                <IconButton
                    className={`${classes.headerWrapper}__menu`}
                    onClick={() => setOpen(true)}
                    role="button"
                    tabIndex={0}>
                    <MenuIcon className={`${classes.headerWrapper}__menu__icon`}/>
                </IconButton>
            </Hidden>

            <SwipeableDrawer open={open} anchor="left" onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
                <ProfileInfo classes={classes}/>
                <IconButton
                    className={`${classes.headerWrapper}__close-icon`}
                    onClick={() => setOpen(false)}
                    role="button"
                    tabIndex={0}>
                    <CloseIcon/>
                </IconButton>
                <Divider/>
                <NavItems classes={classes} variant={"drawer"}/>
                <Divider/>
            </SwipeableDrawer>
        </>
    );
};

export default SideBar;
