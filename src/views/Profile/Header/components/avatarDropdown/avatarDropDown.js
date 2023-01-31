import {useEffect, useState} from "react";
import {connect, useDispatch} from "react-redux";

import {Avatar, ClickAwayListener} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import {getPrivateProfileAction} from "../../../../../store/actions/topSectionActions";
import AvatarDropDownItems from "./avatarDropDownItems";
import {AvatarDropdownStyle} from "./style";

const AvatarDropDown = (props) => {
  const theme = useTheme();
  const classes = AvatarDropdownStyle(theme);
  const dispatch = useDispatch()
  const {profileInfo, isAuthenticated} = props
  const {first_name, last_name, avatar} = profileInfo
  const fullName = `${first_name} ${last_name}`
  const [anchorEl, setAnchorEl] = useState(null);
  const [openEl, setOpenEl] = useState(false);

  useEffect(() => {
    isAuthenticated && dispatch(getPrivateProfileAction())
  }, [])

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpenEl(!openEl)
  };
  const handleClose = () => {
    setOpenEl(false);
    setAnchorEl(null);
  };

  return (
    <div>
      {/*<ClickAwayListener onClickAway={handleClose}>*/}
        <span onClick={handleClick}>
          <Avatar
            alt={fullName}
            src={avatar}
            className={`${classes.avatarDropdownWrapper}__avatar`}
          />
        </span>
      {/*</ClickAwayListener>*/}

      <AvatarDropDownItems fullName={fullName} avatar={avatar} classes={classes.avatarDropdownWrapper} openEl={openEl} anchorEl={anchorEl} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profileInfo: state.topSection.profileInfo,
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(AvatarDropDown);
