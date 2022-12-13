import Link from 'next/link';
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {connect, useDispatch} from "react-redux";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import {useFormik} from "formik";

import {Card, CardMedia, Grid, TextField} from "@material-ui/core";

import SocialLinks from "../../../../lib/profile/socialLinks";
import EditButton from "../../../../lib/editButton";
import ErrorMessage from "../../../../lib/errorMessage";
import CustomButton from "../../../../lib/profile/customButtons";
import CustomSnackbar from "../../../../lib/customSnackbar";
import {
  designationEditMode,
  contactDescriptionEditMode,
  phoneEditMode,
  phoneUpdateAction,
  locationEditMode,
  locationUpdateAction,
  designationUpdateAction,
  contactDescriptionUpdateAction,
  getDemoContactAction
} from "../../../../store/actions/contactActions";
import {getContactAction} from "../../../../store/actions/contactActions";

const ContactInfo = (props) => {
  const {
    classes,
    profileID,
    firstName,
    lastName,
    designation,
    designationMode,
    contactDescription,
    contactDescriptionMode,
    phone,
    phoneMode,
    location,
    locationMode,
    email,
    editPermission,
    profileSlug
  } = props;
  const getLocation = location?.split(",")
  const getCountry = (getLocation[1])?.trim()
  const getRegion = getLocation[0]?.trim()
  const [toast, setToast] = useState({show: false, severity: "", text: ""})
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const fullName = `${firstName} ${lastName}`
  const dispatch = useDispatch()
  const {profile} = useRouter().query;

  useEffect(() => {
    profile && profileSlug ? dispatch(getContactAction()) : dispatch(getDemoContactAction());
  }, [profile, profileSlug])

  useEffect(()=>{
    if (getCountry !== '' && getRegion !== '') {
      setCountry(getCountry)
      setRegion(getRegion)
    }
  },[getCountry, getRegion])

  const designationHandler = useFormik({
    initialValues: {
      designation: designation
    },
    onSubmit: values => {
      dispatch(designationUpdateAction(profileID, values.designation))
      props.setDesignationMode(false);
      setToast({show: true, severity: "success", text: "Successfully updated the designation"});
    },
    onReset: () => {
      props.setDesignationMode(false);
    },
    enableReinitialize: true,
    validate: values => {
      let errors = {}
      if (!values.designation) {
        errors.designation = "Designation can't be empty"
      }
      return errors;
    }
  })

  const contactDescriptionHandler = useFormik({
    initialValues: {
      contactDescription: contactDescription
    },
    enableReinitialize: true,
    onSubmit: values => {
      dispatch(contactDescriptionUpdateAction(profileID, values.contactDescription));
      props.setContactDescriptionMode(false);
      setToast({show: true, severity: "success", text: "Successfully updated the description"});
    },
    onReset: () => {
      props.setContactDescriptionMode(false);
    },
    validate: values => {
      let errors = {}
      if (!values.contactDescription) {
        errors.contactDescription = "Description can't be empty"
      }
      return errors;
    }
  })

  const phoneHandler = useFormik({
    initialValues: {
      phone: phone
    },
    enableReinitialize: true,
    onSubmit: values => {
      dispatch(phoneUpdateAction(values.phone));
      props.setPhoneMode(false);
      setToast({show: true, severity: "success", text: "Successfully updated the phone number"});
    },
    onReset: () => {
      props.setPhoneMode(false);
    },
    validate: values => {
      let errors = {}
      if (!values.phone) {
        errors.phone = "Phone number can't be empty"
      }
      return errors;
    }
  })

  const locationHandler = useFormik({
    initialValues: {
      location: `${region}, ${country}`
    },
    onSubmit: values => {
      dispatch(locationUpdateAction(profileID, values.location))
      props.setLocationMode(false);
      setToast({show: true, severity: "success", text: "Successfully updated the location"});
    },
    enableReinitialize: true,
    validate: values => {
      let errors = {}
      if (!values.location) {
        errors.location = "Location can't be empty"
      }
      return errors;
    }
  })

  const getPermission = () => {
    return !!(profileSlug && editPermission);
  }

  return (
    <>
      <Grid item md={5}>
        <Card className={`${classes}__contact-info`}>
          <div className={`${classes}__contact-info__image-wrapper`}>
            <CardMedia
              className={`${classes}__contact-info__image`}
              image="contact1.png"
              title="Contact"
            />
          </div>
          <div className={`${classes}__contact-info__title-area`}>
            <h1 className={`${classes}__contact-info__title-area__name`}>{fullName}</h1>

            {designationMode ? (
              <div>
                <TextField
                  fullWidth
                  size="small"
                  variant="outlined"
                  name='designation'
                  value={designationHandler.values.designation}
                  onChange={designationHandler.handleChange}
                />
                {designationHandler.errors.designation ?
                  <ErrorMessage error={designationHandler.errors.designation}/> : null}
                <CustomButton handler={designationHandler.handleSubmit} mode={designationHandler.handleReset}/>
              </div>
            ) : (
              <div className={`${classes}__contact-info__title-area__designationWrapper`}>
                <p className={`${classes}__contact-info__title-area__designation`}>{designation}</p>
                {getPermission() &&
                <span onClick={() => props.setDesignationMode(true)}>
                  <EditButton/>
                </span>
                }
              </div>
            )}
          </div>
          <div className={`${classes}__contact-info__description-area`}>
            {contactDescriptionMode ? (
              <div>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  variant="outlined"
                  name="contactDescription"
                  value={contactDescriptionHandler.values.contactDescription}
                  onChange={contactDescriptionHandler.handleChange}
                />
                {contactDescriptionHandler.errors.contactDescription ?
                  <ErrorMessage error={contactDescriptionHandler.errors.contactDescription}/> : null}
                <CustomButton handler={contactDescriptionHandler.handleSubmit} mode={contactDescriptionHandler.handleReset}/>
              </div>
            ) : (
              <div className={`${classes}__contact-info__descriptionWrapper`}>
                <p className={`${classes}__contact-info__description`}>{contactDescription}</p>
                {getPermission() &&
                <span onClick={() => props.setContactDescriptionMode(true)}>
                  <EditButton/>
                </span>
                }
              </div>
            )}

            <span className={`${classes}__contact-info__email`}>Email: {email}</span>

            {phoneMode ? (
              <div>
                <TextField
                  fullWidth
                  size="small"
                  variant="outlined"
                  name='phone'
                  value={phoneHandler.values.phone}
                  onChange={phoneHandler.handleChange}
                />
                {phoneHandler.errors.phone ?
                  <ErrorMessage error={phoneHandler.errors.phone}/> : null}
                <CustomButton handler={phoneHandler.handleSubmit} mode={phoneHandler.handleReset}/>
              </div>
            ) : (
              <div className={`${classes}__contact-info__phoneWrapper`}>
              <span className={`${classes}__contact-info__phone`}>
                Phone: {phone}
              </span>
                {getPermission() &&
                <span onClick={() => props.setPhoneMode(true)}>
                <EditButton/>
              </span>
                }
              </div>
            )}

            {locationMode ? (
              <div>
                <div className={`${classes}__contact-info__locationWrapper`}>
                  <CountryDropdown
                    name='location'
                    value={country}
                    onChange={(val) => setCountry(val)}
                    classes={`${classes}__contact-info__location`}
                  />
                  <RegionDropdown
                    name='location'
                    country={country}
                    value={region}
                    onChange={(val) => setRegion(val)}
                    classes={`${classes}__contact-info__location`}
                  />
                </div>
                {locationHandler.errors.location ?
                  <ErrorMessage error={locationHandler.errors.location}/> : null}
                <CustomButton handler={locationHandler.handleSubmit} mode={() => props.setLocationMode(false)}/>
              </div>
            ) : (
              <div className={`${classes}__contact-info__phoneWrapper`}>
              <span className={`${classes}__contact-info__phone`}>
                Location: {location}
              </span>
                {getPermission() &&
                <span onClick={() => props.setLocationMode(true)}>
                <EditButton/>
              </span>
                }
              </div>
            )}

          </div>
          <SocialLinks setToast={setToast} editPermission={getPermission()}/>
        </Card>
      </Grid>

      {toast.show &&
      <CustomSnackbar
        toast={toast}
        setToast={setToast}
      />
      }
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    profileSlug: state.auth.profileSlug,
    editPermission: state.auth.editPermission,
    profileID: state.topSection.id,
    firstName: state.topSection.firstName,
    lastName: state.topSection.lastName,
    designation: state.contacts.designation,
    designationMode: state.contacts.designationMode,
    contactDescription: state.contacts.contactDescription,
    contactDescriptionMode: state.contacts.contactDescriptionMode,
    phone: state.contacts.phone,
    phoneMode: state.contacts.phoneMode,
    email: state.contacts.contact_email,
    location: state.contacts.location,
    locationMode: state.contacts.locationMode,
  }
}

const mapDispatchToProps = (dispatch) => ({
  setDesignationMode: (boolean) => dispatch(designationEditMode(boolean)),
  setContactDescriptionMode: (boolean) => dispatch(contactDescriptionEditMode(boolean)),
  setPhoneMode: (boolean) => dispatch(phoneEditMode(boolean)),
  setLocationMode: (boolean) => dispatch(locationEditMode(boolean)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfo);
