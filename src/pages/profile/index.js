import {useEffect} from "react";
import {connect, useDispatch} from "react-redux";

import {NoSsr} from "@material-ui/core";

import CustomDivider from "../../lib/profile/divider/divider";
import Sections from "../../lib/profile/sections";
import TopSection from "../../views/Profile/TopSection";
import withLayout from "../../views/Layout";
import CustomLoader from "../../lib/customLoader";
import {getProfileAction} from "../../store/actions/topSectionActions";

const Profile = (props) => {
  const {profileSlug, loader} = props;
  const dispatch = useDispatch();

  useEffect(() => {
    profileSlug && dispatch(getProfileAction())
  }, [profileSlug]);

  return (
    <NoSsr>
      {loader ? <CustomLoader/> : <>
        <TopSection/>
        <CustomDivider/>
        <Sections/>
      </>}
    </NoSsr>
  );
}

const mapStateToProps = (state) => {
  return {
    loader: state.topSection.loader,
    profileSlug: state.auth.profileSlug
  }
}

export default connect(mapStateToProps)(withLayout(Profile, 'profile'));
