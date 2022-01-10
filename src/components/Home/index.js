import React, {useContext} from 'react';

import {Grid} from "@material-ui/core";

import Typewriter from 'typewriter-effect';

import {HomeStyle} from "./style";
import ThemeContextProvider from "../../contexts/themeContext";
import {profileInfo} from "../../../API/mock/profileInfo";

const Home = () => {
    const customTheme = useContext(ThemeContextProvider);
    const classes = HomeStyle(customTheme);
    const expertises = profileInfo.expertises.map(s => s + '. ');

    return (
        <div className={classes.homeWrapper}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={7} className={`${classes.homeWrapper}__left`}>
                    <span className={`${classes.homeWrapper}__headline`}>{profileInfo.headline}</span>
                    <h1 className={`${classes.homeWrapper}__title`}>
                        Hi, I'm <span className={`${classes.homeWrapper}__name`}>{profileInfo.name}</span><br/>
                        <span className={`${classes.homeWrapper}__expertise`}>
                            <span>a&nbsp;</span>
                            <Typewriter
                                options={{
                                    strings: expertises,
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 30,
                                    delay: 40,
                                    pauseFor: 1500,
                                    cursor: ""
                                }}
                            />
                            <span className={`${classes.homeWrapper}__cursor`} />
                        </span>
                    </h1>
                    <p className={`${classes.homeWrapper}__bio`}>{profileInfo.bio}</p>
                </Grid>
                <Grid item xs={12} sm={12} md={5}>
                    <img src={profileInfo.avatar} alt={profileInfo.name} style={{width: '100%'}}/>
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;