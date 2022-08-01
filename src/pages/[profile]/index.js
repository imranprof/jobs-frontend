import {connect, useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {useEffect} from "react";

import CustomDivider from "../../lib/profile/divider/divider";
import Sections from "../../lib/profile/sections";
import TopSection from "../../views/Profile/TopSection";
import withLayout from "../../views/Layout";
import {modalType} from "../../store/actions/authAction";
import {setProfileSlug} from "../../store/actions/authAction";

const Profile = (props) => {
  const {isAuthenticated} = props;
  const dispatch = useDispatch();
  const router = useRouter();
  const {profile} = router.query;

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(modalType(''))
    }
  }, [isAuthenticated]);

  useEffect(() => {
    dispatch(setProfileSlug(profile));
  }, [profile]);

  return (
    <>
      <TopSection/>
      <CustomDivider/>
      <Sections/>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  }
}

export default connect(mapStateToProps)(withLayout(Profile, 'profile'));
