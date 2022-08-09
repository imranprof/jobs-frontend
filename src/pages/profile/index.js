import {useEffect} from "react";
import {connect, useDispatch} from "react-redux";

import {NoSsr} from "@material-ui/core";

import CustomDivider from "../../lib/profile/divider/divider";
import Sections from "../../lib/profile/sections";
import TopSection from "../../views/Profile/TopSection";
import withLayout from "../../views/Layout";
import CustomLoader from "../../lib/customLoader";
import {getDemoProfileAction} from "../../store/actions/topSectionActions";

const Profile = (props) => {
  const {loader} = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDemoProfileAction());
  }, []);

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
    loader: state.topSection.loader
  }
}

export default connect(mapStateToProps)(withLayout(Profile, 'profile'));
