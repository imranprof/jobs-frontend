import React, {useContext} from 'react';

import {Grid} from "@material-ui/core";

import {HomeStyle} from "./style";
import ThemeContextProvider from "../../contexts/themeContext";
import {profileData} from "../../../API/mock/profileData";
import TypeWriter from "./typeWriter";
import SocialLink from "./socialLink";
import SKill from "./skill";


const Home = () => {
    const customTheme = useContext(ThemeContextProvider);
    const classes = HomeStyle(customTheme);
    const expertises = profileData.expertises.map(expertise => expertise + '. ');

    return (
        <div className={classes.homeWrapper}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={7} className={`${classes.homeWrapper}__left`}>
                    <div className={`${classes.homeWrapper}__left-top`}>
                        <span className={`${classes.homeWrapper}__headline`}>{profileData.headline}</span>
                        <TypeWriter expertises={expertises} classes={classes}/>
                        <p className={`${classes.homeWrapper}__bio`}>{profileData.bio}</p>
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
                            <span className={`${classes.homeWrapper}__left-bottom__title`}>Best skill on</span>
                            <div className={`${classes.homeWrapper}__left-bottom__social-links`}>
                                {profileData.skills.map(skill =>
                                    <SKill skill={skill} key={skill.id} classes={classes}/>
                                )}
                            </div>
                        </div>
                    </div>

                </Grid>
                <Grid item xs={12} sm={12} md={5}>
                    <img src={profileData.avatar} alt={profileData.name} style={{width: '100%'}}/>
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;