import React, {useState, useEffect} from 'react';

import {Card, Grid} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

import FontAwesomeIcons from "../../../../../styles/FontAwesomeIcons";
import {FormErrorsData} from "../../../../../API/elements/formErrorsData";
import InputWrapper from "./inputWrapper";

const ContactForm = ({classes}) => {
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

  const inputChangeHandler = (event) => {
    const {name, value} = event.target
    setFormValues({ ...formValues, [name]: value })
  }

  const submitFormHandler = (event) => {
    event.preventDefault();
    setFormErrors(validate())
    setIsSubmit(true)
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setFormValues(initialInputValues);
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
      }, 2500)
    }
  }, [formErrors])

  const validate = () => {
    const errors = {};
    const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    Object.entries(FormErrorsData).map(([key,value]) => {
      let fieldValue = formValues[key]?.trim();
      if(!fieldValue) {
        errors[key] = value["required"]
      } else if(key === "email" && !regex.test(fieldValue)){
        errors[key] = value["regex"]
      }
    })
    return errors;
  }

  return (
    <Grid item md={7}>
      <Card className={`${classes}__contact-form`}>
        <form onSubmit={submitFormHandler} >
          <Grid container spacing={4}>
            <InputWrapper type="input" extraSmall={12} small={6} classes={classes} labelFor="name" labelName="Your Name" formValues={formValues.name} changeHandler={inputChangeHandler} />
            <InputWrapper type="input" extraSmall={12} small={6} classes={classes} labelFor="phone" labelName="Phone Number" formValues={formValues.phone} changeHandler={inputChangeHandler} />
            <InputWrapper type="input" extraSmall={12} small={12} classes={classes} labelFor="email" labelName="Email" formValues={formValues.email} changeHandler={inputChangeHandler} />
            <InputWrapper type="input" extraSmall={12} small={12} classes={classes} labelFor="subject" labelName="Subject" formValues={formValues.subject} changeHandler={inputChangeHandler} />
            <InputWrapper type="textarea" extraSmall={12} small={12} classes={classes} labelFor="message" labelName="Your Message" formValues={formValues.message} changeHandler={inputChangeHandler} />
            <Grid item xs={12} className={`${classes}__contact-form__button-wrapper`}>
              <button type='submit' className={`${classes}__send-message-btn`}>
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
        </form>
      </Card>
    </Grid>
  );
}

export default ContactForm;
