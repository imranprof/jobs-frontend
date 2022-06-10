import {useState} from "react";
import {useDispatch, connect} from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import {Grid} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import {ProfileCardData} from "../../../API/mock/profiles/profileCardData";
import withLayout from "../../views/Layout";
import ProfileCard from "../../views/Profiles/ProfileCard";
import SectionHeader from "../../lib/sectionHeader";
import CustomLoader from "../../lib/customLoader";
import EndMessage from "../../lib/endMessage";
import {showProfiles} from "../../store/actions/profilesAction";
import {ProfilesStyle} from "./style";

const Profiles = (props) => {
  const theme = useTheme();
  const classes = ProfilesStyle(theme);
  const dispatch = useDispatch();
  const profilesLength = ProfileCardData.length;
  const [hasMore, setHasMore] = useState(true)
  const {profileList} = props;

  const fetchProfiles = () => {
    if (profileList.length >= profilesLength) {
      setHasMore(false)
    } else {
      setTimeout(() => {
        setHasMore(true)
        let endLength = profileList.length + 8
        let profileCardData = ProfileCardData.slice(0, endLength)
        dispatch(showProfiles(profileCardData))
      }, 1000)
    }
  }

  return (
    <>
      <SectionHeader title="top talents on SeekRightJobs"/>
      <Grid container>
        <InfiniteScroll
          dataLength={profileList.length}
          next={fetchProfiles}
          hasMore={hasMore}
          loader={<CustomLoader/>}
          endMessage={<EndMessage title="Yay! You have seen it all"/>}
          className={classes.profilesWrapper}
        >
          <ProfileCard/>
        </InfiniteScroll>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    profileList: state.allProfiles.profiles,
  }
}

export default connect(mapStateToProps)(withLayout(Profiles, 'profiles'))
