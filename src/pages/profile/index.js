import {useEffect} from "react";
import {connect, useDispatch} from "react-redux";

import {NoSsr} from "@material-ui/core";

import CustomDivider from "../../lib/profile/divider/divider";
import Sections from "../../lib/profile/sections";
import TopSection from "../../views/Profile/TopSection";
import withLayout from "../../views/Layout";
import {modalType} from "../../store/actions/authAction";
import CustomLoader from "../../lib/customLoader";
import {getDemoProfileAction, getProfileAction} from "../../store/actions/topSectionActions";

const Profile = (props) => {
  const {isAuthenticated, profileSlug, loader} = props;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(modalType(''));
    }
    profileSlug ? dispatch(getProfileAction()) : dispatch(getDemoProfileAction());
  }, [isAuthenticated, profileSlug]);

  return (
    <NoSsr>
      {
        loader ? <CustomLoader/> : <>
          <TopSection/>
          <CustomDivider/>
          <Sections/>
        </>
      }
    </NoSsr>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    loader: state.topSection.loader,
    profileSlug: state.auth.profileSlug
  }
}

export default connect(mapStateToProps)(withLayout(Profile, 'profile'));
