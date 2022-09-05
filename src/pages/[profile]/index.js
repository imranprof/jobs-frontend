import {connect, useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {useEffect} from "react";

import {NoSsr} from "@material-ui/core";

import CustomDivider from "../../lib/profile/divider/divider";
import Sections from "../../lib/profile/sections";
import TopSection from "../../views/Profile/TopSection";
import withLayout from "../../views/Layout";
import {setProfileSlug} from "../../store/actions/authAction";
import CustomLoader from "../../lib/customLoader";
import {getProfileAction} from "../../store/actions/topSectionActions";
import {getRole} from "../../auth/operations";
import {getIndividualJobs} from "../../store/actions/jobAction";

const Profile = (props) => {
  const {profileSlug, loader} = props;
  const dispatch = useDispatch();
  const router = useRouter();
  const {profile} = router.query;
  const {role} = props

  useEffect(() => {
    profile && dispatch(setProfileSlug(profile));
    profileSlug && dispatch(getProfileAction())
  }, [profile, profileSlug]);

  return (
    <NoSsr>
      {
        loader ? <CustomLoader/> : <>
          <TopSection/>
          <CustomDivider/>
          {<Sections />}
        </>
      }
    </NoSsr>
  );
}

const mapStateToProps = (state) =>
{
  return {
    loader: state.topSection.loader,
    profileSlug: state.auth.profileSlug,
    role: state.topSection.role
  }
}

export default connect(mapStateToProps)(withLayout(Profile, 'profile'));
