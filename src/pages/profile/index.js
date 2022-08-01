import {useEffect} from "react";
import {connect, useDispatch} from "react-redux";

import CustomDivider from "../../lib/profile/divider/divider";
import Sections from "../../lib/profile/sections";
import TopSection from "../../views/Profile/TopSection";
import withLayout from "../../views/Layout";
import {modalType, setProfileSlug} from "../../store/actions/authAction";


const Profile = (props) => {
  const {isAuthenticated} = props;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(modalType(''))
    }
    dispatch(setProfileSlug(null));
  }, [isAuthenticated]);

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
