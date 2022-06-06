import {connect} from "react-redux";

import {Avatar} from "@material-ui/core";

const ProfileInfo = (props) => {
  const {profileInfo, showName, classes} = props;
  const { name, avatar } = profileInfo;

    return (
        <div className={`${classes.headerWrapper}__profile`}>
            <Avatar
                alt={name}
                src={avatar}
                className={`${classes.headerWrapper}__profile__pic`}
            />

            { showName &&
                <span className={`${classes.headerWrapper}__profile__name`}>
                 {name}
                </span>
            }
        </div>
    );
};

const mapStateToProps = (state) => {
  return {
    profileInfo: state.profile
  }
}

export default connect(mapStateToProps)(ProfileInfo);
