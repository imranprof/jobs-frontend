import CustomDivider from "../../lib/profile/divider/divider";
import Sections from "../../lib/profile/sections";
import TopSection from "../../views/Profile/TopSection";
import withLayout from "../../views/Layout";
import {connect, useDispatch} from "react-redux";
import {modalType} from "../../store/actions/authAction";
import {useEffect} from "react";

const Profile = (props) => {
  const {isAuthenticated} = props;
  const dispatch = useDispatch();

  useEffect(() => {
    if(isAuthenticated){
      dispatch(modalType(''))
    }
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
