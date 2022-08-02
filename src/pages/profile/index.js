import {useEffect} from "react";
import {connect, useDispatch} from "react-redux";

import {NoSsr} from "@material-ui/core";

import CustomDivider from "../../lib/profile/divider/divider";
import Sections from "../../lib/profile/sections";
import TopSection from "../../views/Profile/TopSection";
import withLayout from "../../views/Layout";
import {modalType} from "../../store/actions/authAction";

const Profile = (props) => {
  const {isAuthenticated} = props;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(modalType(''));
    }
  }, [isAuthenticated]);

  return (
    <NoSsr>
      <TopSection/>
      <CustomDivider/>
      <Sections/>
    </NoSsr>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  }
}

export default connect(mapStateToProps)(withLayout(Profile, 'profile'));
