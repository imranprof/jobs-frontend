import Link from 'next/link';

import {AppBar, Hidden, Toolbar, Button} from "@material-ui/core";

import {profileData} from "../../../../API/mock/profile/profileData";
import SideBar from "./components/sideBar";

const ProfilesHeader = ({ classes, headerRef }) => {
    const {name, avatar} = profileData;

    return (
        <AppBar className={classes.headerWrapper} ref={headerRef}>
            <Toolbar className={`${classes.headerWrapper}__toolbar`}>
                <h1>SeekRightJobs</h1>
                <SideBar name={name} avatar={avatar} classes={classes}/>
                <Hidden mdDown>
                    <div className={`${classes.headerWrapper}__authentication`}>
                        <Link href="#">
                            <a className={`${classes.headerWrapper}__authentication-signin`}>Sign In</a>
                        </Link>
                        <Link href="#">
                            <a className={`${classes.headerWrapper}__authentication-signup`}>Sign Up</a>
                        </Link>
                    </div>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

export default ProfilesHeader;
