import React, {useContext, useEffect, useRef} from 'react';
import {animateScroll as scroll} from 'react-scroll';

import {Grid} from "@material-ui/core";

import ThemeContextProvider from "../../../contexts/themeContext";
import {profileData} from "../../../../API/mock/profile/profileData";
import TypeWriter from "./typeWriter";
import SocialLinks from "../../../lib/profile/socialLinks";
import Skills from "../../../lib/profile/skills";
import {TopSectionStyle} from "./style";
import FontAwesomeIcons from "../../../../styles/FontAwesomeIcons";
import EditButton from "../../../lib/editButton";

const TopSection = () => {
  const backToTopRef = useRef(null);
  const customTheme = useContext(ThemeContextProvider);
  const classes = TopSectionStyle(customTheme);
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
    <Grid container className={classes.topSectionWrapper} id="topSection">
      <Grid item xs={12} md={7} className={`${classes.topSectionWrapper}__left`}>
        <div className={`${classes.topSectionWrapper}__left-top`}>
          <span className={`${classes.topSectionWrapper}__left-top__headline`}>
            {headline}
            <EditButton />
          </span>
          <TypeWriter name={name} expertises={expertises} classes={classes}/>
          <p className={`${classes.topSectionWrapper}__left-top__bio`}>{bio}</p>
        </div>
        <div className={`${classes.topSectionWrapper}__left-bottom`}>
          <SocialLinks/>
          <Skills/>
        </div>
      </Grid>

      <Grid item xs={12} md={5}>
        <div className={`${classes.topSectionWrapper}__thumbnail`}>
          <img src={avatar} alt={name} className={`${classes.topSectionWrapper}__thumbnail--img`}/>
        </div>
      </Grid>

      <div className={`${classes.topSectionWrapper}__backto-top`} ref={backToTopRef} onClick={() => scroll.scrollToTop()}>
        <i className={`${FontAwesomeIcons.arrowUp}`}/>
      </div>
    </Grid>
  );
};

export default TopSection;
