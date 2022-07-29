import React, {useState, useEffect} from 'react';
import {connect, useDispatch} from "react-redux";

import {Card, Grid} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

import FontAwesomeIcons from "../../../../../styles/FontAwesomeIcons";
import InputWrapper from "./inputWrapper";
import {useFormik} from "formik";
import {sendMessageAction} from "../../../../store/actions/contactActions";

const ContactForm = (props) => {
  const {classes, profileID} = props;
  const dispatch = useDispatch();
  const initialInputValues = {
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  }

  const [formValues, setFormValues] = useState(initialInputValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactHandler = useFormik({
    initialValues: initialInputValues,
    onSubmit: values => {
      dispatch(sendMessageAction({name: values.name, phone: values.phone, email: values.email, subject: values.subject, message: values.message, userID: profileID, messengerId: null}))
      contactHandler.resetForm()
    }
  })

  return (
    <Grid item md={7}>
      <Card className={`${classes}__contact-form`}>
          <Grid container spacing={4}>
            <InputWrapper type="input" extraSmall={12} small={6} classes={classes} labelFor="name" labelName="Your Name"  formValues={contactHandler.values.name} changeHandler={contactHandler.handleChange}/>
            <InputWrapper type="input" extraSmall={12} small={6} classes={classes} labelFor="phone" labelName="Phone Number"  formValues={contactHandler.values.phone} changeHandler={contactHandler.handleChange}/>
            <InputWrapper type="input" extraSmall={12} small={12} classes={classes} labelFor="email" labelName="Email" formValues={contactHandler.values.email} changeHandler={contactHandler.handleChange}/>
            <InputWrapper type="input" extraSmall={12} small={12} classes={classes} labelFor="subject" labelName="Subject" formValues={contactHandler.values.subject} changeHandler={contactHandler.handleChange}/>
            <InputWrapper type="textarea" extraSmall={12} small={12} classes={classes} labelFor="message" labelName="Your Message" formValues={contactHandler.values.message} changeHandler={contactHandler.handleChange}/>
            <Grid item xs={12} className={`${classes}__contact-form__button-wrapper`}>
              <button type="submit" className={`${classes}__send-message-btn`} onClick={contactHandler.handleSubmit}>
                <span className={`${classes}__send-message-btn__text`}>Send Message</span>
                <Icon className={`${classes}__send-message-btn__icon ${FontAwesomeIcons.arrowRight}`} />
              </button>
            </Grid>
            {(Object.keys(formErrors).length > 0) && (
              <div className={`${classes}__contact-form__error-message`}>
                <p>* {Object.values(formErrors)[0]}!</p>
              </div>
            )}
            {(Object.keys(formErrors).length === 0 && isSubmitted) && (
              <div className={`${classes}__contact-form__success-message`}>
                <p>Email has been sent successfully!</p>
              </div>
            )}
          </Grid>
      </Card>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return{
    profileID: state.topSection.id
  }
}

export default connect(mapStateToProps)(ContactForm);
