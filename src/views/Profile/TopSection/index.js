import {useEffect, useRef, useState} from 'react';
import {connect} from "react-redux";
import {useFormik} from "formik";
import {animateScroll as scroll} from 'react-scroll';

import {Grid, TextField} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import TypeWriter from "./typeWriter";
import FontAwesomeIcons from "../../../../styles/FontAwesomeIcons";
import SocialLinks from "../../../lib/profile/socialLinks";
import Skills from "../../../lib/profile/skills";
import EditCustomModal from "../../../lib/profile/editCustomModal";
import {TopSectionStyle} from "./style";
import {ProfileData} from "../../../../API/mock/profile/profileData";
import EditButton from "../../../lib/editButton";
import CustomButton from "../../../lib/profile/customButtons";
import IntroExpertisesEdit from "../EditComponents/topSection/components/introExpertisesEdit";
import ErrorMessage from "../../../lib/errorMessage";
import {
  headlineText,
  headlineEditMode,
  introText,
  bioText,
  bioEditMode,
  expertisesText
} from "../../../store/actions/editProfileActions";

const TopSection = (props) => {
  const theme = useTheme();
  const classes = TopSectionStyle(theme);
  const backToTopRef = useRef(null);
  const {name, avatar} = ProfileData;

  const [introEditValue, setIntroEditValue] = useState({intro: props.intro})
  const [openModal, setOpenModal] = useState(false);
  const [expertisesEditValue, setExpertisesEditValue] = useState({expertises: props.expertises})
  const expertisesList = props.expertises.map(expertise => `${expertise}.`);
  const {intro} = introEditValue;
  const {expertises} = expertisesEditValue;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let backToTop = backToTopRef.current;
      let scrollTop = window.scrollY;
      backToTop.style.display = scrollTop >= 80 ? "flex" : "none";
    })
  }, [])

  const headlineHandler = useFormik({
    initialValues: {headline: props.headline},
    onSubmit: values => {
      props.setHeadline(values.headline);
      props.setHeadlineMode(false);
    },
    validate: values => {
      let errors = {}
      if (!values.headline) {
        errors.headline = "Headline can't be empty"
      } else if (values.headline.length > 50) {
        errors.headline = "Headline must have within 50 characters"
      }
      return errors;
    }
  })

  const bioHandler = useFormik({
    initialValues: {bio: props.bio},
    onSubmit: values => {
      props.setBio(values.bio);
      props.setBioMode(false);
    },
    validate: values => {
      let errors = {}
      if (!values.bio) {
        errors.bio = "Bio can't be empty"
      } else if (values.bio.length > 500) {
        errors.bio = "Bio must have within 500 characters"
      }
      return errors;
    }
  })

  const inputIntroChangeHandler = (e) => {
    setIntroEditValue({
      intro: e.target.value
    })
  }

  const introEditHandler = () => {
    if ((intro && intro.length <= 15) && expertises.length > 0) {
      props.setIntro(introEditValue.intro);
      props.setExpertises(expertisesEditValue.expertises);
      setOpenModal(false);
    } else {
      setOpenModal(true);
    }
  };

  const modalClose = () => {
    setOpenModal(false);
  };

  return (
    <Grid container className={classes.topSectionWrapper} id="topSection">
      <Grid item xs={12} md={7} className={`${classes.topSectionWrapper}__left`}>
        <div className={`${classes.topSectionWrapper}__left-top`}>
          {props.headlineEditMode ? (
            <div className={`${classes.topSectionWrapper}__left-top__headline-inputWrapper`}>
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                name='headline'
                value={headlineHandler.values.headline}
                onChange={headlineHandler.handleChange}
              />
              {headlineHandler.errors.headline ? <ErrorMessage error={headlineHandler.errors.headline}/> : null}
              <CustomButton handler={headlineHandler.handleSubmit} mode={props.setHeadlineMode}/>
            </div>
          ) : (
            <div className={`${classes.topSectionWrapper}__left-top__headline`}>
              <span className={`${classes.topSectionWrapper}__left-top__headline-text`}>{props.headline}</span>
              <span onClick={() => props.setHeadlineMode(true)}>
                <EditButton/>
              </span>
            </div>
          )}

          <EditCustomModal handleClose={modalClose} open={openModal}>
            <IntroExpertisesEdit
              handleClose={modalClose}
              fullName={name}
              inputValue={introEditValue.intro}
              inputIntroChangeHandler={inputIntroChangeHandler}
              introEditHandler={introEditHandler}
              expertisesEditValue={expertisesEditValue.expertises}
              setExpertisesEditValue={setExpertisesEditValue}
            />
          </EditCustomModal>

          <div className={`${classes.topSectionWrapper}__left-top__greetings-expertise`}>
            <TypeWriter name={name} intro={props.intro} expertises={expertisesList} classes={classes}/>
            <span className={`${classes.topSectionWrapper}__left-top__editBtnWrapper`}
                  onClick={() => setOpenModal(true)}>
                <EditButton/>
              </span>
          </div>

          {props.bioEditMode ? (
            <div className={`${classes.topSectionWrapper}__left-top__bio-inputWrapper`}>
              <TextField
                fullWidth
                multiline
                rows={5}
                variant="outlined"
                name="bio"
                value={bioHandler.values.bio}
                onChange={bioHandler.handleChange}
              />
              {bioHandler.errors.bio ? <ErrorMessage error={bioHandler.errors.bio}/> : null}
              <CustomButton handler={bioHandler.handleSubmit} mode={props.setBioMode}/>
            </div>
          ) : (
            <div className={`${classes.topSectionWrapper}__left-top__bio-wrapper`}>
              <p className={`${classes.topSectionWrapper}__left-top__bio-text`}>{props.bio}</p>
              <span
                className={`${classes.topSectionWrapper}__left-top__editBtnWrapper`}
                onClick={() => props.setBioMode(true)}
              >
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
    headline: state.editProfile.headline,
    headlineEditMode: state.editProfile.headlineMode,
    intro: state.editProfile.intro,
    bio: state.editProfile.bio,
    bioEditMode: state.editProfile.bioMode,
    expertises: state.editProfile.expertises
  }
}

const mapDispatchToProps = (dispatch) => ({
  setHeadlineMode: (boolean) => dispatch(headlineEditMode(boolean)),
  setHeadline: (value) => dispatch(headlineText(value)),
  setIntro: (editValue) => dispatch(introText(editValue)),
  setExpertises: (expertisesValue) => dispatch(expertisesText(expertisesValue)),
  setBioMode: (boolean) => dispatch(bioEditMode(boolean)),
  setBio: (editValue) => dispatch(bioText(editValue))
});

export default connect(mapStateToProps, mapDispatchToProps)(TopSection);
