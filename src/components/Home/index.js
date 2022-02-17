import React, {useContext, useEffect, useRef} from 'react';
import {animateScroll as scroll} from 'react-scroll';

import {Grid} from "@material-ui/core";

import ThemeContextProvider from "../../contexts/themeContext";
import {profileData} from "../../../API/mock/profileData";
import TypeWriter from "./typeWriter";
import SocialLinks from "../common/socialLinks";
import Skills from "../common/skills";
import {HomeStyle} from "./style";
import FontAwesomeIcons from "../../../styles/FontAwesomeIcons";

const Home = () => {
  const backToTopRef = useRef(null);
  const customTheme = useContext(ThemeContextProvider);
  const classes = HomeStyle(customTheme);
  const {name, avatar, headline, bio} = profileData;
  const expertises = profileData.expertises.map(expertise => `${expertise}.`);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const backToTop = backToTopRef.current;
      const scrollTop = window.scrollY;
      scrollTop >= 80 ? backToTop.style.display = "flex" : backToTop.style.display = "none";
    })
  }, [])

  return (
    <Grid container className={classes.homeWrapper} id="home">
      <Grid item xs={12} md={7} className={`${classes.homeWrapper}__left`}>
        <div className={`${classes.homeWrapper}__left-top`}>
          <span className={`${classes.homeWrapper}__left-top__headline`}>{headline}</span>
          <TypeWriter name={name} expertises={expertises} classes={classes}/>
          <p className={`${classes.homeWrapper}__left-top__bio`}>{bio}</p>
        </div>
        <div className={`${classes.homeWrapper}__left-bottom`}>
          <SocialLinks/>
          <Skills/>
        </div>
      </Grid>

      <Grid item xs={12} md={5}>
        <div className={`${classes.homeWrapper}__thumbnail`}>
          <img src={avatar} alt={name} className={`${classes.homeWrapper}__thumbnail--img`}/>
        </div>
      </Grid>

      <div className={`${classes.homeWrapper}__backto-top`} ref={backToTopRef} onClick={() => scroll.scrollToTop()}>
        <i className={`${FontAwesomeIcons.arrowUp}`}/>
      </div>
    </Grid>
  );
};

export default Home;
