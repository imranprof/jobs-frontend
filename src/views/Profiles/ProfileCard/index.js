import React, {useContext} from 'react';
import Link from 'next/link';

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography
} from "@material-ui/core";

import {ProfileCardStyle} from "./style";
import ThemeContextProvider from "../../../contexts/themeContext";

function ProfileCard({profile}) {
  const customTheme = useContext(ThemeContextProvider);
  const classes = ProfileCardStyle(customTheme);
  const {name, designation, image, hourlyRate, ratings, totalJob} = profile;

  return (
    <Card xs={12} sm={6} md={4} lg={3} className={classes.profileCardWrapper}>
      <div className={`${classes.profileCardWrapper}__image-wrapper`}>
        <CardMedia
          className={`${classes.profileCardWrapper}__image`}
          image={image}
          title={name}
        />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {designation}
        </Typography>
      </CardContent>
        <Divider />
      <CardContent>
        <div className={`${classes.profileCardWrapper}__rate-info`}>
          <Typography variant="body2" color="textSecondary" component="p">
            ${hourlyRate}/hr
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`${ratings} (${totalJob})`}
          </Typography>
        </div>
      </CardContent>

      <Divider />

      <Link href="#">
        <Button size="small" color="secondary" className={`${classes.profileCardWrapper}__button-wrapper`} >
          See More
        </Button>
      </Link>
    </Card>
  );
};

export default ProfileCard;
