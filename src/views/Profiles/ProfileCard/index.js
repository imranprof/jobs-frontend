import React, {useContext} from 'react';
import Link from 'next/link';

import { Button, Card, CardMedia } from "@material-ui/core";

import {ProfileCardStyle} from "./style";
import ThemeContextProvider from "../../../contexts/themeContext";
import CardContents from "./components/cardContents";
import SkillSet from "./components/skillSet";

function ProfileCard({profile}) {
  const customTheme = useContext(ThemeContextProvider);
  const classes = ProfileCardStyle(customTheme);
  const {name, image} = profile;

  return (
    <Card xs={12} sm={6} md={4} lg={3} className={classes.profileCardWrapper}>
      <div className={`${classes.profileCardWrapper}__image-wrapper`}>
        <CardMedia
          className={`${classes.profileCardWrapper}__image`}
          image={image}
          title={name}
        />
      </div>

      <CardContents classes={classes.profileCardWrapper} profileInfo={profile} />

      <SkillSet classes={classes.profileCardWrapper} />

      <Link href="#">
        <Button size="small" className={`${classes.profileCardWrapper}__button-wrapper`} >
          See More
        </Button>
      </Link>
    </Card>
  );
};

export default ProfileCard;
