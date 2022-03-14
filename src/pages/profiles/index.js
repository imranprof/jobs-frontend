import {Grid} from "@material-ui/core";

import withLayout from "../../views/Layout";
import ProfileCard from "../../views/Profiles/ProfileCard";
import {ProfileCardData} from "../../../API/mock/profiles/profileCardData";

import SectionHeader from "../../lib/sectionHeader";

const Profiles = () => {
  return (
    <>
      <SectionHeader text="checkout profiles on SeekRightJobs" />
      <Grid container justifyContent="space-around">
        {ProfileCardData.map(profile => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </Grid>
    </>
  );
};

export default withLayout(Profiles, 'profiles');
