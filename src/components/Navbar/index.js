import React, {useContext, useState} from 'react';
import Link from 'next/link';
import ThemeContextProvider from "../../contexts/themeContext";

import {AppBar} from "@material-ui/core";
import {Toolbar} from "@material-ui/core";
import {Avatar, Menu} from "@material-ui/core";
import {Hidden} from "@material-ui/core";
import {IconButton} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import CloseIcon from "@material-ui/icons/Close";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import {NavbarStyle} from './style';
import {navigationLinks} from "../../../API/elements/navigationLink";
import {profileInfo} from "../../../API/mock/profileInfo";

const Navbar = () => {
    const customTheme = useContext(ThemeContextProvider);
    const classes = NavbarStyle(customTheme);
    const [open, setOpen] = useState(false);

    return (
        <AppBar className={classes.headerWrapper} position="sticky">
            <Toolbar className={`${classes.headerWrapper}__toolbar`}>
                <div className={`${classes.headerWrapper}__profile`}>
                    <Avatar
                        alt={profileInfo.name}
                        // src={profileInfo.image}
                        className={`${classes.headerWrapper}__profile__pic`}
                    />

                    <span className={`${classes.headerWrapper}__profile__name`}>
                         {profileInfo.name}
                    </span>
                </div>
                <SwipeableDrawer open={open} anchor="left" onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
                    <IconButton
                        className={`${classes.headerWrapper}__close-icon`}
                        onClick={() => setOpen(false)}
                        role="button"
                        tabIndex={0}>
                        <CloseIcon/>
                    </IconButton>
                    <Divider/>

                    <nav>
                        <ul className={`${classes.headerWrapper}__nav-bar`}>
                            <List>
                                {navigationLinks.map((link) =>
                                    (<ListItem key={link.id}>
                                        <div className={`${classes.headerWrapper}__nav-bar__link`}>

                                            <Link href={link.href}>
                                                <a>{link.name}</a>
                                            </Link>

                                        </div>
                                    </ListItem>)
                                )}
                            </List>
                        </ul>
                    </nav>
                </SwipeableDrawer>
                <Hidden mdDown>
                    <nav>
                        <ul className={`${classes.headerWrapper}__nav-bar`}>
                            {navigationLinks.map((link) =>
                                <div className={`${classes.headerWrapper}__nav-bar__link`} key={link.id}>
                                    <Link href={link.href}>
                                        <a>{link.name}</a>
                                    </Link>
                                </div>
                            )}
                        </ul>
                    </nav>
                </Hidden>
                <Hidden lgUp>
                    <IconButton
                        className={`${classes.headerWrapper}__menu`}
                        onClick={() => setOpen(true)}
                        role="button"
                        tabIndex={0}>
                        <MenuIcon className={`${classes.headerWrapper}__menu__icon`}/>
                    </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
