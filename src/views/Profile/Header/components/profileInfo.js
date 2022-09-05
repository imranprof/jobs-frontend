import {useEffect} from "react";
import {connect, useDispatch} from "react-redux";

import {NoSsr, Avatar} from "@material-ui/core";

import {getPrivateProfileAction} from "../../../../store/actions/topSectionActions";

const ProfileInfo = (props) => {
  const {profileInfo, showName, classes, isAuthenticated} = props;
  const {first_name, last_name, avatar} = profileInfo;
  const dispatch = useDispatch()
  const fullName = `${first_name} ${last_name}`

  useEffect(() => {
    isAuthenticated && dispatch(getPrivateProfileAction())
  }, [])
  const isEmpty = Object.keys(profileInfo).length===0;

  return (
    <div className={`${classes.headerWrapper}__profile`}>
      {(isAuthenticated && !isEmpty) && (
        <>
          <NoSsr>
            <Avatar
              alt={fullName}
              src={avatar}
              className={`${classes.headerWrapper}__profile__pic`}
            />
          </NoSsr>

          {showName &&
          <NoSsr>
            <span className={`${classes.headerWrapper}__profile__name`}>
              {fullName}
            </span>
          </NoSsr>
          }
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    profileInfo: state.topSection.profileInfo,
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(ProfileInfo);
