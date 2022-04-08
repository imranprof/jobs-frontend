import React, {useContext} from 'react';
import Link from 'next/link';

import {connect} from "react-redux";

import {Button, Card, CardMedia} from "@material-ui/core";

import {ProfileCardStyle} from "./style";
import ThemeContextProvider from "../../../contexts/themeContext";
import CardContents from "./components/cardContents";
import SkillSet from "./components/skillSet";

function ProfileCard(props) {
  const customTheme = useContext(ThemeContextProvider);
  const classes = ProfileCardStyle(customTheme);
  const {profileList} = props;

  return (
    <>
      {
        profileList && profileList.map((profile) => (
          <Card key={profile.id} xs={12} sm={6} md={4} lg={3} className={classes.profileCardWrapper}>
            <div className={`${classes.profileCardWrapper}__image-wrapper`}>
              <CardMedia
                className={`${classes.profileCardWrapper}__image`}
                image={profile.image}
                title={profile.name}
              />
            </div>

            <CardContents classes={classes.profileCardWrapper} profileId={profile.id} />

            <SkillSet classes={classes.profileCardWrapper} skills={profile.skills} />

            <Link href="#">
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
    profileList: state.allProfiles.profiles
  }
}

export default connect(mapStateToProps)(ProfileCard);
