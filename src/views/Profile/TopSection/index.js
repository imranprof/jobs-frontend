import React, {useContext, useEffect, useRef, useState} from 'react';
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
import CustomButton from "../../../lib/customButtons";

const TopSection = () => {
  const backToTopRef = useRef(null);
  const customTheme = useContext(ThemeContextProvider);
  const classes = TopSectionStyle(customTheme);
  const {name, avatar, headline, bio} = profileData;
  const expertises = profileData.expertises.map(expertise => `${expertise}.`);

  const [editMode, setEditMode] = useState(false);
  const [headlineText, setHeadlineText] = useState(headline);
  const [editState, setEditState] = useState({headline: headlineText})

  const [bioEditMode, setBioEditMode] = useState(false);
  const [bioText, setBioText] = useState(bio);
  const [bioEditState, setBioEditState] = useState({bio: bioText})

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const backToTop = backToTopRef.current;
      const scrollTop = window.scrollY;
      scrollTop >= 80 ? backToTop.style.display = "flex" : backToTop.style.display = "none";
    })
  }, [])

  const inputChangeHandler = (e) => {
    setEditState({
      headline: e.target.value
    })
  }

  const inputBioChangeHandler = (e) => {
    setBioEditState({
      bio: e.target.value
    })
  }

  const editHandler = () => {
    if (editState.headline !== "") {
      setHeadlineText(editState.headline);
      setEditMode(false);
    }
  };

  const bioEditHandler = () => {
    if (bioEditState.bio !== "") {
      setBioText(bioEditState.bio);
      setBioEditMode(false);
    }
  };

  return (
    <Grid container className={classes.topSectionWrapper} id="topSection">
      <Grid item xs={12} md={7} className={`${classes.topSectionWrapper}__left`}>
        <div className={`${classes.topSectionWrapper}__left-top`}>
          {editMode ? (
            <div>
              <input
                value={editState.headline}
                onChange={inputChangeHandler}
                className={`${classes.topSectionWrapper}__left-top__headline-input`}
              />
              <CustomButton handler={editHandler} mode={setEditMode} />
            </div>
          ) : (
            <div className={`${classes.topSectionWrapper}__left-top__headline`}>
              <span className={`${classes.topSectionWrapper}__left-top__headline-text`}>{headlineText}</span>
              <span onClick={() => setEditMode(true)}>
                <EditButton />
              </span>
            </div>
          )}
          <TypeWriter name={name} expertises={expertises} classes={classes}/>
          {bioEditMode ? (
            <div>
              <textarea
                value={bioEditState.bio}
                onChange={inputBioChangeHandler}
                className={`${classes.topSectionWrapper}__left-top__bio-input`}
              />
              <CustomButton handler={bioEditHandler} mode={setBioEditMode} />
            </div>
          ) : (
            <div className={`${classes.topSectionWrapper}__left-top__bio-wrapper`}>
              <p className={`${classes.topSectionWrapper}__left-top__bio-text`}>{bioText}</p>
              <span onClick={() => setBioEditMode(true)}>
              <EditButton />
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

      <div className={`${classes.topSectionWrapper}__backto-top`} ref={backToTopRef} onClick={() => scroll.scrollToTop()}>
        <i className={`${FontAwesomeIcons.arrowUp}`}/>
      </div>
    </Grid>
  );
};

export default TopSection;
