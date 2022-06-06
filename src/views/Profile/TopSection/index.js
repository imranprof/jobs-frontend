import React, {useEffect, useRef, useState} from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {connect} from "react-redux";

import {Grid} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import TypeWriter from "./typeWriter";
import SocialLinks from "../../../lib/profile/socialLinks";
import Skills from "../../../lib/profile/skills";
import {TopSectionStyle} from "./style";
import FontAwesomeIcons from "../../../../styles/FontAwesomeIcons";
import EditButton from "../../../lib/editButton";
import CustomButton from "../../../lib/customButtons";
import MuiCustomModal from "../../../lib/profile/muiCustomModal";

const TopSection = (props) => {
  const theme = useTheme();
  const classes = TopSectionStyle(theme);
  const backToTopRef = useRef(null);
  const {name, avatar, headline, bio, intro, expertisesList} = profileData;
  const expertises = profileData.expertises.map(expertise => `${expertise}.`);
  // Headline
  const [headlineText, setHeadlineText] = useState(headline);
  const [headlineEditState, setHeadlineEditState] = useState({headline: headlineText})
  const [headlineEditMode, setHeadlineEditMode] = useState(false);
  // Intro/Expertises
  const [introText, setIntroText] = useState(intro);
  const [introEditState, setIntroEditState] = useState({intro: introText})
  const [openModal, setOpenModal] = useState(false);
  // Bio
  const [bioText, setBioText] = useState(bio);
  const [bioEditState, setBioEditState] = useState({bio: bioText})
  const [bioEditMode, setBioEditMode] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let backToTop = backToTopRef.current;
      let scrollTop = window.scrollY;
      backToTop.style.display = scrollTop >= 80 ? "flex" : "none";
    })
  }, [])

  const inputHeadlineChangeHandler = (e) => {
    setHeadlineEditState({
      headline: e.target.value
    })
  }

  const inputIntroChangeHandler = (e) => {
    setIntroEditState({
      intro: e.target.value
    })
  }

  const inputBioChangeHandler = (e) => {
    setBioEditState({
      bio: e.target.value
    })
  }

  const headlineEditHandler = () => {
    if (headlineEditState.headline !== "") {
      setHeadlineText(headlineEditState.headline);
      setHeadlineEditMode(false);
    }
  };

  const bioEditHandler = () => {
    if (bioEditState.bio !== "") {
      setBioText(bioEditState.bio);
      setBioEditMode(false);
    }
  };

  const introEditHandler = () => {
    if (introEditState.intro !== "") {
      setIntroText(introEditState.intro);
      handleClose();
    }
  };

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <Grid container className={classes.topSectionWrapper} id="topSection">
      <Grid item xs={12} md={7} className={`${classes.topSectionWrapper}__left`}>
        <div className={`${classes.topSectionWrapper}__left-top`}>
          {headlineEditMode ? (
            <div>
              <input
                value={headlineEditState.headline}
                onChange={inputHeadlineChangeHandler}
                className={`${classes.topSectionWrapper}__left-top__headline-input`}
              />
              <CustomButton handler={headlineEditHandler} mode={setHeadlineEditMode}/>
            </div>
          ) : (
            <div className={`${classes.topSectionWrapper}__left-top__headline`}>
              <span className={`${classes.topSectionWrapper}__left-top__headline-text`}>{headlineText}</span>
              <span onClick={() => setHeadlineEditMode(true)}>
                <EditButton/>
              </span>
            </div>
          )}

          <MuiCustomModal
            handleClose={handleClose}
            open={openModal}
            fullName={name}
            inputValue={introEditState.intro}
            inputIntroChangeHandler={inputIntroChangeHandler}
            introEditHandler={introEditHandler}
          />
          <div className={`${classes.topSectionWrapper}__left-top__greetings-expertise`}>
            <TypeWriter name={name} intro={introText} expertises={expertises} classes={classes}/>
            <span onClick={handleOpen}>
                <EditButton/>
              </span>
          </div>

          {bioEditMode ? (
            <div>
              <textarea
                value={bioEditState.bio}
                onChange={inputBioChangeHandler}
                className={`${classes.topSectionWrapper}__left-top__bio-input`}
              />
              <CustomButton handler={bioEditHandler} mode={setBioEditMode}/>
            </div>
          ) : (
            <div className={`${classes.topSectionWrapper}__left-top__bio-wrapper`}>
              <p className={`${classes.topSectionWrapper}__left-top__bio-text`}>{bioText}</p>
              <span onClick={() => setBioEditMode(true)}>
              <EditButton/>
            </span>
            </div>
          )}

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

      <div className={`${classes.topSectionWrapper}__backto-top`} ref={backToTopRef}
           onClick={() => scroll.scrollToTop()}>
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
