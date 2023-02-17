import {useEffect, useState} from "react";
import {useDispatch, connect} from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import {Grid} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import withLayout from "../../views/Layout";
import ProfileCard from "../../views/Profiles/ProfileCard";
import SectionHeader from "../../lib/sectionHeader";
import CustomLoader from "../../lib/customLoader";
import EndMessage from "../../lib/endMessage";
import {getProfiles, setPage, showProfiles} from "../../store/actions/profilesAction";
import {ProfilesStyle} from "../../views/PagesStyle/profiles/style";

const Profiles = (props) => {
  const theme = useTheme();
  const classes = ProfilesStyle(theme);
  const dispatch = useDispatch();
  const [hasMore, setHasMore] = useState(true)
  const {profileList, page, initialLoader, set} = props;

  useEffect(() => {
    fetchProfiles();
    return () => {
      dispatch(showProfiles([]));
      dispatch(setPage(0));
    }
  }, []);

  const fetchProfiles = () => {
    if (profileList.length % 8 > 0) {
      setHasMore(false);
    } else {
      dispatch(getProfiles(profileList, page));
      setHasMore(true);
    }
  }

  return (
    <>
      <SectionHeader title="top talents on SeekRightJobs"/>
      {initialLoader && <CustomLoader/>}
      <Grid container>
        <InfiniteScroll
          className={classes.profilesWrapper}
          dataLength={profileList.length}
          next={fetchProfiles}
          loader={((profileList.length % 8 !== 0) || (profileList.length === 0) || (page > 1 && profileList.length % 8 === 0) || !set) ?
            <EndMessage title="Yay! You have seen it all"/> : (<CustomLoader/>)}
          hasMore={hasMore}
          endMessage={<EndMessage title="Yay! You have seen it all"/>}
        >
          <ProfileCard/>
        </InfiniteScroll>
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    profileList: state.allProfiles.profiles,
    page: state.allProfiles.page,
    initialLoader: state.allProfiles.initialLoader,
    set: state.allProfiles.set
  }
}

export default connect(mapStateToProps)(withLayout(Profiles, 'profiles'))
