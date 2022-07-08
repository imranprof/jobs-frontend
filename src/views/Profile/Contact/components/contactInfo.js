import Link from 'next/link';
import {useState} from "react";
import {connect} from "react-redux";
import {useFormik} from "formik";

import {Card, CardMedia, Grid, TextField} from "@material-ui/core";

import SocialLinks from "../../../../lib/profile/socialLinks";
import EditButton from "../../../../lib/editButton";
import ErrorMessage from "../../../../lib/errorMessage";
import CustomButton from "../../../../lib/profile/customButtons";
import CustomSnackbar from "../../../../lib/customSnackbar";
import {ProfileData} from "../../../../../API/mock/profile/profileData";
import {
  designationUpdate,
  designationEditMode,
  contactDescriptionUpdate,
  contactDescriptionEditMode,
  phoneUpdate,
  phoneEditMode
} from "../../../../store/actions/contactActions";

const ContactInfo = (props) => {
  const {
    classes,
    designation,
    designationMode,
    contactDescription,
    contactDescriptionMode,
    phone,
    phoneMode
  } = props;
  const [toast, setToast] = useState({show: false, severity: "", text: ""})
  const {name, email} = ProfileData;

  const designationHandler = useFormik({
    initialValues: {
      designation: designation
    },
    onSubmit: values => {
      props.setDesignation(values.designation);
      props.setDesignationMode(false);
      setToast({show: true, severity: "success", text: "Successfully updated the designation"});
    },
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
    onSubmit: values => {
      props.setContactDescription(values.contactDescription);
      props.setContactDescriptionMode(false);
      setToast({show: true, severity: "success", text: "Successfully updated the description"});
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
    onSubmit: values => {
      props.setPhone(values.phone);
      props.setPhoneMode(false);
      setToast({show: true, severity: "success", text: "Successfully updated the phone number"});
    },
    validate: values => {
      let errors = {}
      if (!values.phone) {
        errors.phone = "Phone number can't be empty"
      }
      return errors;
    }
  })

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
            <h1 className={`${classes}__contact-info__title-area__name`}>{name}</h1>

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
                <CustomButton handler={designationHandler.handleSubmit} mode={props.setDesignationMode}/>
              </div>
            ) : (
              <div className={`${classes}__contact-info__title-area__designationWrapper`}>
                <p className={`${classes}__contact-info__title-area__designation`}>{designation}</p>
                <span onClick={() => props.setDesignationMode(true)}>
                  <EditButton/>
                </span>
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
                <CustomButton handler={contactDescriptionHandler.handleSubmit} mode={props.setContactDescriptionMode}/>
              </div>
            ) : (
              <div className={`${classes}__contact-info__descriptionWrapper`}>
                <p className={`${classes}__contact-info__description`}>{contactDescription}</p>
                <span onClick={() => props.setContactDescriptionMode(true)}>
                  <EditButton/>
                </span>
              </div>
            )}

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
                <CustomButton handler={phoneHandler.handleSubmit} mode={props.setPhoneMode}/>
              </div>
            ) : (
              <div className={`${classes}__contact-info__phoneWrapper`}>
              <span className={`${classes}__contact-info__phone`}>
                Phone: <Link href="#"><a>{phone}</a></Link>
              </span>
                <span onClick={() => props.setPhoneMode(true)}>
                <EditButton/>
              </span>
              </div>
            )}

            <span className={`${classes}__contact-info__email`}>Email: <Link href="#"><a>{email}</a></Link></span>
          </div>
          <SocialLinks/>
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
    designation: state.contacts.designation,
    designationMode: state.contacts.designationMode,
    contactDescription: state.contacts.contactDescription,
    contactDescriptionMode: state.contacts.contactDescriptionMode,
    phone: state.contacts.phone,
    phoneMode: state.contacts.phoneMode,
  }
}

const mapDispatchToProps = (dispatch) => ({
  setDesignation: (value) => dispatch(designationUpdate(value)),
  setDesignationMode: (boolean) => dispatch(designationEditMode(boolean)),
  setContactDescription: (value) => dispatch(contactDescriptionUpdate(value)),
  setContactDescriptionMode: (boolean) => dispatch(contactDescriptionEditMode(boolean)),
  setPhone: (value) => dispatch(phoneUpdate(value)),
  setPhoneMode: (boolean) => dispatch(phoneEditMode(boolean)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfo);
