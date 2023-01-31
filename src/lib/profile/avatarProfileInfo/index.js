import {useEffect} from "react";
import {connect, useDispatch} from "react-redux";

import {Avatar} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import {AvatarProfileInfoStyle} from "./style";
import {getRole} from "../../../auth/operations";
import {getPrivateProfileAction} from "../../../store/actions/topSectionActions";

const AvatarProfileInfo = (props) => {
  const theme = useTheme();
  const classes = AvatarProfileInfoStyle(theme);
  const dispatch = useDispatch()
  const {profileInfo, isAuthenticated} = props
  const {first_name, last_name, avatar} = profileInfo
  const fullName = `${first_name} ${last_name}`
  const role = getRole() === 'employee' ? 'Job Seeker' : 'Employer';

  useEffect(() => {
    isAuthenticated && dispatch(getPrivateProfileAction())
  }, [])

  return (
    <div className={classes.avatarProfileInfoWrapper}>
      <Avatar
        alt={fullName}
        src={avatar}
        className={`${classes.avatarProfileInfoWrapper}__avatar`}
      />
      <div>
        <p className={`${classes.avatarProfileInfoWrapper}__avatar__name`}>{fullName}</p>
        <span className={`${classes.avatarProfileInfoWrapper}__avatar__type`}>{role}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profileInfo: state.topSection.profileInfo,
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(AvatarProfileInfo);
