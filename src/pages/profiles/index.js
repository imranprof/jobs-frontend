import {useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import {Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import {ProfileCardData} from "../../../API/mock/profiles/profileCardData";
import withLayout from "../../views/Layout";
import ProfileCard from "../../views/Profiles/ProfileCard";
import SectionHeader from "../../lib/sectionHeader";

const useStyles = makeStyles({
  profilesWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  ProfilesLoader: {
    width: "100%",
    textAlign: "center"
  }
});

const Profiles = () => {
  const classes = useStyles();
  const itemLength = ProfileCardData.length
  const chunkedData = ProfileCardData.slice(0, 8)
  const [items, setItems] = useState(chunkedData)
  const [hasMore, setHasMore] = useState(true)

  const fetchData = () => {
    if (items.length >= itemLength) {
      setHasMore(false)
    } else {
      setTimeout(() => {
        setHasMore(true)
        let endLength = items.length + 8
        setItems(ProfileCardData.slice(0, endLength))
      }, 1000)
    }
  }

  return (
    <>
      <SectionHeader text="top talents on SeekRightJobs"/>
      <Grid container>
        <InfiniteScroll
          dataLength={items.length}
          next={fetchData}
          hasMore={hasMore}
          className={classes.profilesWrapper}
        >
          {items.map(profile => (
            <ProfileCard key={profile.id} profile={profile}/>
          ))}
        </InfiniteScroll>
        {(items.length >= itemLength) ? "" : <h4 className={classes.ProfilesLoader} >Loading...</h4> }
      </Grid>
    </>
  );
}

export default withLayout(Profiles, 'profiles');
