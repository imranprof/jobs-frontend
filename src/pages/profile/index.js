import CustomDivider from "../../lib/profile/divider/divider";
import Sections from "../../lib/profile/sections";
import TopSection from "../../views/Profile/TopSection";
import withLayout from "../../views/Layout";
import {connect, useDispatch} from "react-redux";
import {modalType} from "../../store/actions/authAction";
import {useEffect} from "react";
import CustomLoader from "../../lib/customLoader";
import {getProfileAction} from "../../store/actions/topSectionActions";

const Profile = (props) => {
  const {isAuthenticated, userID} = props;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(modalType(''))
    }
    userID && dispatch(getProfileAction(userID))
  }, [isAuthenticated, userID]);

  return (
    <>
      {props.loader ? <CustomLoader/> : <>
        <TopSection/>
        <CustomDivider/>
        <Sections/>
      </>}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    loader: state.topSection.loader,
    userID: state.auth.userID
  }
}

export default connect(mapStateToProps)(withLayout(Profile, 'profile'));
