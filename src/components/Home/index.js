import React, {useContext} from 'react';

import {Grid} from "@material-ui/core";

import ThemeContextProvider from "../../contexts/themeContext";
import {profileData} from "../../../API/mock/profileData";
import TypeWriter from "./typeWriter";
import SocialLink from "./socialLink";
import SKill from "./skill";
import {HomeStyle} from "./style";

const Home = () => {
    const customTheme = useContext(ThemeContextProvider);
    const classes = HomeStyle(customTheme);
    const expertises = profileData.expertises.map(expertise => expertise + '. ');

    return (
            <Grid container className={classes.homeWrapper}>
                <Grid item xs={12} md={7} className={`${classes.homeWrapper}__left`} >
                    <div className={`${classes.homeWrapper}__left-top`}>
                        <span className={`${classes.homeWrapper}__left-top__headline`}>{profileData.headline}</span>
                        <TypeWriter expertises={expertises} classes={classes}/>
                        <p className={`${classes.homeWrapper}__left-top__bio`}>{profileData.bio}</p>
                    </div>
                    <div className={`${classes.homeWrapper}__left-bottom`}>
                        <div>
                            <span className={`${classes.homeWrapper}__left-bottom__title`}>find with me</span>
                            <div className={`${classes.homeWrapper}__left-bottom__social-links`}>
                                {profileData.socialLinks.map(link =>
                                    <SocialLink link={link} key={link.id} classes={classes}/>
                                )}
                            </div>
                        </div>
                        <div>
                            <span className={`${classes.homeWrapper}__left-bottom__title`}>best skill on</span>
                            <div className={`${classes.homeWrapper}__left-bottom__social-links`}>
                                {profileData.skills.map(skill =>
                                    <SKill skill={skill} key={skill.id} classes={classes}/>
                                )}
                            </div>
                        </div>
                    </div>

                </Grid >
                <Grid item xs={12} md={5}>
                    <div className={`${classes.homeWrapper}__thumbnail`}>
                        <img src={profileData.avatar} alt={profileData.name} className={`${classes.homeWrapper}__thumbnail--img`} />
                    </div>
                </Grid>
            </Grid>
    );
};

export default Home;
