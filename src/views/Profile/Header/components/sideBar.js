import {useState} from "react";
import Link from "next/link";
import {connect} from "react-redux";

import {Hidden, IconButton} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Divider from "@material-ui/core/Divider";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import ProfileInfo from "./profileInfo";
import NavItems from "./navItems";
import SocialLinks from "../../../../lib/profile/socialLinks";
import ProfileShare from "../../../../lib/profile/profileshare/profileShare";
import {getRole} from "../../../../auth/operations";
import Button from "@material-ui/core/Button";

const ProfileSideBar = (props) => {
  const {profileInfo, classes, resumeURL} = props;
  const {name, avatar} = profileInfo;
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
            <ProfileInfo name={name} avatar={avatar} showName={false} classes={classes}/>
            <IconButton
              className={`${classes.headerWrapper}__close-icon`}
              onClick={() => setOpen(false)}
            >
              <CloseIcon/>
            </IconButton>
          </div>

          <p className={`${classes.headerWrapper}__profile__name ${classes.headerWrapper}__profile__name--drawer`}>
            {name}
          </p>

          <Divider/>
          <div className={`${classes.headerWrapper}__side-bar__links`}>
            <NavItems classes={classes} variant={"drawer"}/>
          </div>
          {getRole() === 'employee' ? (
            <Button variant="outlined" fullWidth>
              <Link href={resumeURL}>
                <a className={`${classes.headerWrapper}__resume`}>
                  Download Resume
                </a>
              </Link>
            </Button>
          ) : ""}
          <Divider style={{margin: "20px 0 30px 0"}}/>

          <SocialLinks/>
          <p className={`${classes.headerWrapper}__side-bar__share-bar__title`}>Share Me</p>
          <ProfileShare shareUrl={"http://rightcodes.org/"} boxClass={`${classes.headerWrapper}__side-bar__share-bar`}
                        iconClass={`${classes.headerWrapper}__side-bar__share-bar__icon`}/>
        </div>
      </SwipeableDrawer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    profileInfo: state.topSection
  }
}

export default connect(mapStateToProps)(ProfileSideBar);
