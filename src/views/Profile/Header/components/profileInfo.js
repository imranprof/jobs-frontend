import {connect} from "react-redux";

import {Avatar} from "@material-ui/core";

const ProfileInfo = (props) => {
  const {profileInfo, showName, classes} = props;
  const { firstName, lastName, avatar } = profileInfo;

    return (
        <div className={`${classes.headerWrapper}__profile`}>
            <Avatar
                alt={`${firstName} ${lastName}`}
                src={avatar}
                className={`${classes.headerWrapper}__profile__pic`}
            />

            { showName &&
                <span className={`${classes.headerWrapper}__profile__name`}>
                 {`${firstName} ${lastName}`}
                </span>
            }
        </div>
    );
};

const mapStateToProps = (state) => {
  return {
    profileInfo: state.topSection
  }
}

export default connect(mapStateToProps)(ProfileInfo);
