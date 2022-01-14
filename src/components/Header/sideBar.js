import React, {useState} from "react";

import {Hidden, IconButton} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Divider from "@material-ui/core/Divider";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import ProfileInfo from "./profileInfo";
import NavItems from "./navItems";
import {profileData} from "../../../API/mock/profileData";
import SocialLinks from "../common/socialLinks/socialLinks";

const SideBar = ({classes}) => {
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
                <div className={`${classes.headerWrapper}__side-bar`}>
                    <div className={`${classes.headerWrapper}__side-bar__icons`}>
                        <ProfileInfo classes={classes} showName={false}/>
                        <IconButton
                            className={`${classes.headerWrapper}__close-icon`}
                            onClick={() => setOpen(false)}
                        >
                            <CloseIcon/>
                        </IconButton>
                    </div>

                    <p className={`${classes.headerWrapper}__profile__name ${classes.headerWrapper}__profile__name--drawer`}>
                        {profileData.name}
                    </p>

                    <Divider/>
                    <div className={`${classes.headerWrapper}__side-bar__links`}>
                        <NavItems classes={classes} variant={"drawer"}/>
                    </div>
                    <Divider style={{marginBottom: "30px"}}/>

                    <SocialLinks/>
                </div>
            </SwipeableDrawer>
        </>
    );
};

export default SideBar;
