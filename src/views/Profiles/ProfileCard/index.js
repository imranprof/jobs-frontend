import Link from 'next/link';
import {connect} from "react-redux";

import {Button, Card, CardMedia} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import CardContents from "./components/cardContents";
import SkillSet from "./components/skillSet";
import {ProfileCardStyle} from "./style";

function ProfileCard(props) {
  const theme = useTheme();
  const classes = ProfileCardStyle(theme);
  const {profileList, searchProfiles, set} = props;

  let profilesData = profileList;
  if(!set){
    profilesData = searchProfiles;
  }

  return (
    <>
      {
        profilesData && profilesData.map((profile) => (
          <Card key={profile.profile_slug} xs={12} sm={6} md={4} lg={3} className={classes.profileCardWrapper}>
            <div className={`${classes.profileCardWrapper}__image-wrapper`}>
              <CardMedia
                className={`${classes.profileCardWrapper}__image`}
                image={profile.image}
                title={profile.first_name}
              />
            </div>

            <CardContents classes={classes.profileCardWrapper} profile={profile}/>

            <SkillSet classes={classes.profileCardWrapper} skills={profile.skills}/>

            <Link href={`/${profile.profile_slug}`}>
              <Button size="small" className={`${classes.profileCardWrapper}__button-wrapper`}>
                See More
              </Button>
            </Link>
          </Card>
        ))
      }
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    profileList: state.allProfiles.profiles,
    searchProfiles: state.allProfiles.searchProfiles,
    set: state.allProfiles.set
  }
}

export default connect(mapStateToProps)(ProfileCard);
