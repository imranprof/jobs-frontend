import {useEffect, useRef, useState} from 'react';
import {connect, useDispatch} from "react-redux";
import {useFormik} from "formik";
import {animateScroll as scroll} from 'react-scroll';

import {Grid, TextField, Tooltip, Zoom} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import TypeWriter from "./typeWriter";
import SocialLinks from "../../../lib/profile/socialLinks";
import Skills from "../../../lib/profile/skills";
import EditCustomModal from "../../../lib/profile/editCustomModal";
import {TopSectionStyle} from "./style";
import EditButton from "../../../lib/editButton";
import CustomButton from "../../../lib/profile/customButtons";
import IntroExpertisesEdit from "../EditComponents/topSection/components/introExpertisesEdit";
import ErrorMessage from "../../../lib/errorMessage";
import CustomSnackbar from "../../../lib/customSnackbar";
import AvatarEdit from "../EditComponents/topSection/components/avatarEdit";
import {
  bioEditMode,
  getProfileAction,
  headlineEditMode, updateBio,
  updateHeadline
} from "../../../store/actions/topSectionActions";
import FontAwesomeIcons from "../../../../styles/FontAwesomeIcons";

const TopSection = (props) => {
  const theme = useTheme();
  const classes = TopSectionStyle(theme);
  const backToTopRef = useRef(null);
  const topSectionRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [openAvatarModal, setOpenAvatarModal] = useState(false);
  const [toast, setToast] = useState({show: false, severity: "", text: ""})
  const expertisesList = props.expertises.map(expertise => `${expertise}.`);
  const {userID, avatar, firstName, lastName} = props;
  const dispatch = useDispatch();

  const modalClose = () => {
    setOpenModal(false);
  };

  const avatarModalClose = () => {
    setOpenAvatarModal(false);
  };

  let scrollTop;
  useEffect(() => {
    window.addEventListener('scroll', () => {
      scrollTop = window.scrollY;
      const backToTop = backToTopRef?.current;
      const topSection = topSectionRef?.current;

      if (scrollTop >= 130) {
        if (backToTop) backToTop.style.display = "flex"
        if (topSection) topSection.classList.add("addMargin")
      } else if (scrollTop < 130) {
        if (backToTop) backToTop.style.display = "none"
        if (topSection) topSection.classList.remove("addMargin")
      }
    });
    userID && dispatch(getProfileAction(userID));
  }, [])

  const headlineHandler = useFormik({
    initialValues: {headline: props.headline},
    enableReinitialize: true,
    onSubmit: (values) => {
      dispatch(updateHeadline({
        headline: values.headline,
        profileID: props.profileID
      }));
      props.setHeadlineMode(false);
      setToast({show: true, severity: "success", text: "Successfully updated the headline"});
    },
    onReset: () => {
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
    enableReinitialize: true,
    onSubmit: values => {
      dispatch(updateBio({
        bio: values.bio,
        profileID: props.profileID
      }));
      props.setBioMode(false);
      setToast({show: true, severity: "success", text: "Successfully updated the bio"});
    },
    onReset: () => {
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


  return (
    <>
      <Grid container className={classes.topSectionWrapper} id="topSection" ref={topSectionRef}>
        <Grid item xs={12} md={7} className={`${classes.topSectionWrapper}__left`}>
          <div className={`${classes.topSectionWrapper}__left-top`}>
            {props.headlineEditMode ? (
              <div className={`${classes.topSectionWrapper}__left-top__headline-inputWrapper`}>
                <TextField
                  fullWidth
                  variant="outlined"
                  name='headline'
                  value={headlineHandler.values.headline}
                  onChange={headlineHandler.handleChange}
                />
                {headlineHandler.errors.headline ? <ErrorMessage error={headlineHandler.errors.headline}/> : null}
                <CustomButton handler={headlineHandler.handleSubmit} mode={headlineHandler.handleReset}/>
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
                fullName={`${props.firstName} ${props.lastName}`}
                profileID={props.profileID}
                setToast={setToast}
              />
            </EditCustomModal>

            <div className={`${classes.topSectionWrapper}__left-top__greetings-expertise`}>
              <TypeWriter name={`${props.firstName} ${props.lastName}`} intro={props.intro} expertises={expertisesList}
                          classes={classes}/>
              <span
                onClick={() => setOpenModal(true)}
                className={`${classes.topSectionWrapper}__left-top__editBtnWrapper`}
              >
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
                <CustomButton handler={bioHandler.handleSubmit} mode={bioHandler.handleReset}/>
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
            <SocialLinks setToast={setToast}/>
            <Skills setToast={setToast}/>
          </div>
        </Grid>

        <Grid item xs={12} md={5} className={`${classes.topSectionWrapper}__profilePhotoWrapper`}>
          <span onClick={() => setOpenAvatarModal(true)} className={`${classes.topSectionWrapper}__profilePhotoWrapper__editBtn`} >
            <EditButton/>
          </span>
          <div className={`${classes.topSectionWrapper}__thumbnail`}>
            <img
              src={avatar}
              alt={`${firstName} ${lastName}`}
              className={`${classes.topSectionWrapper}__thumbnail--img`}
            />
          </div>

          <EditCustomModal handleClose={avatarModalClose} open={openAvatarModal}>
            <AvatarEdit firstName={firstName} lastName={lastName} handleClose={avatarModalClose} setToast={setToast} />
          </EditCustomModal>
        </Grid>

        <Tooltip TransitionComponent={Zoom} title="Back to top" placement="left">
          <div className={`${classes.topSectionWrapper}__backto-top`} ref={backToTopRef}
               onClick={() => scroll.scrollToTop()}>
            <i className={`${FontAwesomeIcons.arrowUp}`}/>
          </div>
        </Tooltip>
      </Grid>

      {toast.show &&
      <CustomSnackbar
        toast={toast}
        setToast={setToast}/>
      }
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userID: state.auth.userID,
    profileID: state.topSection.id,
    firstName: state.topSection.firstName,
    lastName: state.topSection.lastName,
    headline: state.topSection.headline,
    headlineEditMode: state.topSection.headlineMode,
    intro: state.topSection.intro,
    bio: state.topSection.bio,
    avatar: state.topSection.avatar,
    bioEditMode: state.topSection.bioMode,
    expertises: state.topSection.expertises,
  }
}

const mapDispatchToProps = (dispatch) => ({
  setHeadlineMode: (boolean) => dispatch(headlineEditMode(boolean)),
  setBioMode: (boolean) => dispatch(bioEditMode(boolean)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopSection);
