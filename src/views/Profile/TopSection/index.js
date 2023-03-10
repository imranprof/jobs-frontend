import {useRouter} from "next/router";
import {useEffect, useRef, useState} from 'react';
import {connect, useDispatch} from "react-redux";
import {useFormik} from "formik";
import {animateScroll as scroll} from 'react-scroll';

import {Button, Grid, Paper, TextField, Tooltip, Zoom} from "@material-ui/core";
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
import Location from "../../../lib/profile/location";
import {
  bioEditMode,
  getDemoProfileAction,
  getProfileAction,
  headlineEditMode,
  updateBio,
  updateHeadline,
  updateHourlyRate
} from "../../../store/actions/topSectionActions";
import FontAwesomeIcons from "../../../../styles/FontAwesomeIcons";
import {updateRoleAction} from "../../../store/actions/profileAction";

const TopSection = (props) => {
  const theme = useTheme();
  const classes = TopSectionStyle(theme);
  const backToTopRef = useRef(null);
  const topSectionRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [openAvatarModal, setOpenAvatarModal] = useState(false);
  const [toast, setToast] = useState({show: false, severity: "", text: ""})
  const expertisesList = props.expertises.map(expertise => `${expertise}.`);
  const {profileSlug, avatar, firstName, lastName, editPermission, publicRole} = props;
  const dispatch = useDispatch();
  const {profile} = useRouter().query;
  const [rateEditMode, setRateEditMode] = useState(false);

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
    profile && profileSlug ? dispatch(getProfileAction()) : dispatch(getDemoProfileAction());
  }, [profile, profileSlug])

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

  const hourlyRateHandler = useFormik({
    initialValues: {hourlyRate: props.hourlyRate},
    enableReinitialize: true,
    onSubmit: (values) => {
      dispatch(updateHourlyRate({
        rate: values.hourlyRate,
        profileID: props.profileID
      }));
      setRateEditMode(false);
      setToast({show: true, severity: "success", text: "Successfully updated the hourlyRate"});
    },
    onReset: () => {
      setRateEditMode(false);
    },
    validate: values => {
      let errors = {}
      if (!values.hourlyRate) {
        errors.hourlyRate = "Hourly Rate can't be empty"
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

  const getPermission = () => {
    return !!(profileSlug && editPermission);
  }

  const roleChangeHandler = (choice) => {
    dispatch(updateRoleAction(props.profileID, choice))
  }

  return (
    <>
      {getPermission() && props.roleModifyPermission &&
      <Paper className={`${classes.topSectionWrapper}__role-confirmation`}>
        <p className={`${classes.topSectionWrapper}__role-confirmation__heading`}>Since you logged in with linkedin. Your profile type is now job seeker. Do you want to change your profile type job seeker to employer?</p>
        <div>
          <Button
            onClick={() => roleChangeHandler(true)}
            variant='outlined'
            size='small'
            className={`${classes.topSectionWrapper}__role-confirmation__yes-btn`}
          >Yes</Button>
          <Button
            onClick={() => roleChangeHandler(false)}
            variant='outlined'
            size='small'
            className={`${classes.topSectionWrapper}__role-confirmation__no-btn`}
          >No</Button>
        </div>
        <p className={`${classes.topSectionWrapper}__role-confirmation__alert-text`}>
          This can be change only once, choose it carefully.</p>
      </Paper>
      }
      <Grid container className={classes.topSectionWrapper} id="topSection" ref={topSectionRef}>
        <Grid item xs={12} md={7} className={`${classes.topSectionWrapper}__left`}>
          <div className={`${classes.topSectionWrapper}__left-top`}>
            <div className={`${classes.topSectionWrapper}__left-top__headlineRateWrapper`}>
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
                  {getPermission() &&
                  <span onClick={() => props.setHeadlineMode(true)}>
                <EditButton/>
              </span>
                  }
                </div>
              )}
              {publicRole && publicRole === 'employee' && <>
              {rateEditMode ? (<div className={`${classes.topSectionWrapper}__left-top__rate-inputWrapper`}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    name='hourlyRate'
                    type='number'
                    value={hourlyRateHandler.values.hourlyRate}
                    onChange={hourlyRateHandler.handleChange}
                  />
                  {hourlyRateHandler.errors.hourlyRate ?
                    <ErrorMessage error={hourlyRateHandler.errors.hourlyRate}/> : null}
                  <CustomButton handler={hourlyRateHandler.handleSubmit} mode={hourlyRateHandler.handleReset}/>
                </div>
              ) : (
                <div className={`${classes.topSectionWrapper}__left-top__hourlyRate`}>
                  <span
                    className={`${classes.topSectionWrapper}__left-top__hourlyRate-text`}>${props.hourlyRate}/hr</span>
                  {getPermission() &&
                  <span onClick={() => setRateEditMode(true)}>
                <EditButton/>
              </span>
                  }
                </div>
              )}
            </>}
            </div>

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
              {getPermission() &&
              <span
                onClick={() => setOpenModal(true)}
                className={`${classes.topSectionWrapper}__left-top__editBtnWrapper`}
              >
                <EditButton/>
              </span>
              }
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
                { getPermission() &&
                <span
                  className={`${classes.topSectionWrapper}__left-top__editBtnWrapper`}
                  onClick={() => props.setBioMode(true)}
                >
              <EditButton/>
            </span> }
              </div>
            )}
          </div>

          {(publicRole && publicRole === 'employee' || publicRole === '') ? (
            <div className={`${classes.topSectionWrapper}__left-bottom`}>
              <SocialLinks setToast={setToast} editPermission={getPermission()}/>
              <Skills setToast={setToast}/>
            </div>
          ) : (
            <div className={`${classes.topSectionWrapper}__left-bottom`}>
              <Location setToast={setToast} editPermission={getPermission()} />
            </div>
          )}
        </Grid>

        <Grid item xs={12} md={5} className={`${classes.topSectionWrapper}__profilePhotoWrapper`}>
          {getPermission() &&
          <span onClick={() => setOpenAvatarModal(true)}
                className={`${classes.topSectionWrapper}__profilePhotoWrapper__editBtn`}>
            <EditButton/>
          </span>
          }
          <div className={`${classes.topSectionWrapper}__thumbnail`}>
            <img
              src={avatar}
              alt={`${firstName} ${lastName}`}
              className={`${classes.topSectionWrapper}__thumbnail--img`}
            />
          </div>

          <EditCustomModal handleClose={avatarModalClose} open={openAvatarModal}>
            <AvatarEdit firstName={firstName} lastName={lastName} handleClose={avatarModalClose} setToast={setToast}/>
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
    profileSlug: state.auth.profileSlug,
    isAuthenticated: state.auth.isAuthenticated,
    editPermission: state.auth.editPermission,
    profileID: state.topSection.id,
    firstName: state.topSection.firstName,
    lastName: state.topSection.lastName,
    headline: state.topSection.headline,
    hourlyRate: state.topSection.hourlyRate,
    headlineEditMode: state.topSection.headlineMode,
    intro: state.topSection.intro,
    bio: state.topSection.bio,
    avatar: state.topSection.avatar,
    bioEditMode: state.topSection.bioMode,
    expertises: state.topSection.expertises,
    publicRole: state.topSection.role,
    roleModifyPermission: state.topSection.modifyPermission
  }
}

const mapDispatchToProps = (dispatch) => ({
  setHeadlineMode: (boolean) => dispatch(headlineEditMode(boolean)),
  setBioMode: (boolean) => dispatch(bioEditMode(boolean)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopSection);
