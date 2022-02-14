import React, {useState, useEffect} from 'react';

import {Card, Grid} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

import FontAwesomeIcons from "../../../styles/FontAwesomeIcons";

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
  const [isSubmitSuccessfully, setIsSubmitSuccessfully] = useState(false)

  const inputChangeHandler = (event) => {
    const {name, value} = event.target
    setFormValues({ ...formValues, [name]: value })
  }

  const submitFormHandler = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues))
    setIsSubmit(true)
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      setFormValues(initialInputValues);
      setIsSubmitSuccessfully(true)
      setTimeout(() => {
        setIsSubmitSuccessfully(false)
      }, 2500)
    }
  }, [formErrors])

  const validate = (values) => {
    const errors = {};
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    let {name, phone, email, message} = values;
    name = name.trim()
    phone = phone.trim()
    email = email.trim()
    message = message.trim()

    if (!name) {
      errors.name = "Name can not be empty"
    }
    if(!phone) {
      errors.phone = "Phone number can not be empty"
    }
    if (!email) {
      errors.email = "Email can not be empty"
    }
    if (!regex.test(email)) {
      errors.email = "Please put a valid email address"
    }
    if (!message) {
      errors.message = "Message can not be empty"
    }
    return errors;
  }

  return (
    <Grid item md={7}>
      <Card className={`${classes}__contact-form`}>
        <form onSubmit={submitFormHandler} >
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} className={`${classes}__contact-form__input-wrapper`}>
              <label htmlFor='name' className={`${classes}__contact-form__label`}>Your Name</label>
              <input type='text' id='name' name="name" value={formValues.name} className={`${classes}__contact-form__input`} onChange={inputChangeHandler} />
            </Grid>
            <Grid item xs={12} sm={6} className={`${classes}__contact-form__input-wrapper`}>
              <label htmlFor='phone' className={`${classes}__contact-form__label`}>Phone Number</label>
              <input type='text' id='phone' name="phone" value={formValues.phone} className={`${classes}__contact-form__input`} onChange={inputChangeHandler} />
            </Grid>
            <Grid item xs={12} className={`${classes}__contact-form__input-wrapper`}>
              <label htmlFor='email' className={`${classes}__contact-form__label`}>Email</label>
              <input type='email' id='email' name="email" value={formValues.email} className={`${classes}__contact-form__input`} onChange={inputChangeHandler} />
            </Grid>
            <Grid item xs={12} className={`${classes}__contact-form__input-wrapper`}>
              <label htmlFor='subject' className={`${classes}__contact-form__label`}>Subject <span>(Optional)</span></label>
              <input type='text' id='subject' name="subject" value={formValues.subject} className={`${classes}__contact-form__input`} onChange={inputChangeHandler} />
            </Grid>
            <Grid item xs={12} className={`${classes}__contact-form__input-wrapper`}>
              <label htmlFor='message' className={`${classes}__contact-form__label`}>Your Message</label>
              <textarea id='message' name="message" value={formValues.message} className={`${classes}__contact-form__input message-field`} onChange={inputChangeHandler} />
            </Grid>
            <Grid item xs={12} className={`${classes}__contact-form__button-wrapper`}>
              <button type='submit' className={`${classes}__send-message-btn`}>
                <span className={`${classes}__send-message-btn__text`}>Send Message</span>
                <Icon className={`${classes}__send-message-btn__icon ${FontAwesomeIcons.arrow}`} />
              </button>
            </Grid>
            {(Object.keys(formErrors).length > 0) && (
              <div className={`${classes}__contact-form__error-message`}>
                <p>* {Object.values(formErrors)[0]}!</p>
              </div>
            )}
            {(Object.keys(formErrors).length === 0 && isSubmitSuccessfully) && (
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
