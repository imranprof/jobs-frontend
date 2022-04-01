import {useContext} from "react";
import {useDispatch, useSelector} from "react-redux";

import InfiniteScroll from "react-infinite-scroll-component";

import {Grid} from "@material-ui/core";
import {ProfileCardData} from "../../../API/mock/profiles/profileCardData";
import withLayout from "../../views/Layout";
import ProfileCard from "../../views/Profiles/ProfileCard";
import SectionHeader from "../../lib/sectionHeader";
import CustomLoader from "../../lib/customLoader";
import EndMessage from "../../lib/endMessage";
import ThemeContextProvider from "../../contexts/themeContext";
import {ProfilesStyle} from "./style";
import {hasMoreProfiles, showProfiles} from "../../store/actions/profilesAction";

const Profiles = () => {
    const customTheme = useContext(ThemeContextProvider);
    const classes = ProfilesStyle(customTheme);
    const dispatch = useDispatch();
    const profilesLength = ProfileCardData.length;
    const profiles = useSelector(state => state.allProfiles.profiles)
    const hasMore = useSelector(state => state.allProfiles.hasMore)

    const fetchProfiles = () => {
        if (profiles.length >= profilesLength) {
            dispatch(hasMoreProfiles({hasMore: false}))
        } else {
            setTimeout(() => {
                let endLength = profiles.length + 8
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
                    dataLength={profiles.length}
                    next={fetchProfiles}
                    hasMore={hasMore}
                    loader={<CustomLoader/>}
                    endMessage={<EndMessage title="Yay! You have seen it all" />}
                    className={classes.profilesWrapper}
                >
                    {profiles && profiles.map(profile => (
                        <ProfileCard key={profile.id} profile={profile}/>
                    ))}
                </InfiniteScroll>
            </Grid>
        </>
    );
};

export default withLayout(Profiles, 'profiles');
