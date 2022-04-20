import React, {useEffect, useRef} from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {connect} from "react-redux";

import {Grid} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import TypeWriter from "./typeWriter";
import SocialLinks from "../../../lib/profile/socialLinks";
import Skills from "../../../lib/profile/skills";
import {TopSectionStyle} from "./style";
import FontAwesomeIcons from "../../../../styles/FontAwesomeIcons";

const TopSection = (props) => {
  const theme = useTheme();
  const classes = TopSectionStyle(theme);
  const backToTopRef = useRef(null);
  const {name, avatar, headline, bio, expertises} = props.profile;
  const profileExpertises = expertises.map(expertise => `${expertise}.`);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let backToTop = backToTopRef.current;
      let scrollTop = window.scrollY;
      scrollTop >= 80 ? backToTop.style.display = "flex" : backToTop.style.display = "none";
    })
  }, [])

  return (
    <Grid container className={classes.topSectionWrapper} id="topSection">
      <Grid item xs={12} md={7} className={`${classes.topSectionWrapper}__left`}>
        <div className={`${classes.topSectionWrapper}__left-top`}>
          <span className={`${classes.topSectionWrapper}__left-top__headline`}>{headline}</span>
          <TypeWriter name={name} expertises={profileExpertises} classes={classes}/>
          <p className={`${classes.topSectionWrapper}__left-top__bio`}>{bio}</p>
        </div>
        <div className={`${classes.topSectionWrapper}__left-bottom`}>
          <SocialLinks />
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

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
  }
}

export default connect(mapStateToProps)(TopSection);
