import React, {useContext} from 'react';

import {Grid} from "@material-ui/core";

import ThemeContextProvider from "../../contexts/themeContext";
import {profileData} from "../../../API/mock/profileData";
import TypeWriter from "./typeWriter";
import SocialLinks from "../common/socialLinks";
import Skills from "../common/skills";
import {HomeStyle} from "./style";

const Home = () => {
    const customTheme = useContext(ThemeContextProvider);
    const classes = HomeStyle(customTheme);
    const {name, avatar, headline, bio } = profileData;
    const expertises = profileData.expertises.map(expertise => `${expertise}.`);

    return (
            <Grid container className={classes.homeWrapper}>
                <Grid item xs={12} md={7} className={`${classes.homeWrapper}__left`} >
                    <div className={`${classes.homeWrapper}__left-top`}>
                        <span className={`${classes.homeWrapper}__left-top__headline`}>{headline}</span>
                        <TypeWriter name={name} expertises={expertises}  classes={classes}/>
                        <p className={`${classes.homeWrapper}__left-top__bio`}>{bio}</p>
                    </div>

                    <div className={`${classes.homeWrapper}__left-bottom`}>
                        <SocialLinks />
                        <Skills />
                    </div>
                </Grid >
                <Grid item xs={12} md={5}>
                    <div className={`${classes.homeWrapper}__thumbnail`}>
                        <img src={avatar} alt={name} className={`${classes.homeWrapper}__thumbnail--img`} />
                    </div>
                </Grid>
            </Grid>
    );
};

export default Home;
