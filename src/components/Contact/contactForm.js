import React, {useState} from 'react';

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

  const [inputValue, setInputValue] = useState(initialInputValues)

  const inputChangeHandler = (event) => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log({inputValue})
    setInputValue(initialInputValues)
  }

  return (
    <Grid item md={7}>
      <Card className={`${classes}__contact-form`}>
        <form onSubmit={submitHandler} >
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} className={`${classes}__contact-form__input-wrapper`}>
              <label htmlFor='name' className={`${classes}__contact-form__label`}>Your Name</label>
              <input type='text' id='name' name="name" value={inputValue.name} className={`${classes}__contact-form__input`} onChange={inputChangeHandler} />
            </Grid>
            <Grid item xs={12} sm={6} className={`${classes}__contact-form__input-wrapper`}>
              <label htmlFor='phone' className={`${classes}__contact-form__label`}>Phone Number</label>
              <input type='text' id='phone' name="phone" value={inputValue.phone} className={`${classes}__contact-form__input`} onChange={inputChangeHandler} />
            </Grid>
            <Grid item xs={12} className={`${classes}__contact-form__input-wrapper`}>
              <label htmlFor='email' className={`${classes}__contact-form__label`}>Email</label>
              <input type='email' id='email' name="email" value={inputValue.email} className={`${classes}__contact-form__input`} onChange={inputChangeHandler} />
            </Grid>
            <Grid item xs={12} className={`${classes}__contact-form__input-wrapper`}>
              <label htmlFor='subject' className={`${classes}__contact-form__label`}>Subject</label>
              <input type='text' id='subject' name="subject" value={inputValue.subject} className={`${classes}__contact-form__input`} onChange={inputChangeHandler} />
            </Grid>
            <Grid item xs={12} className={`${classes}__contact-form__input-wrapper`}>
              <label htmlFor='message' className={`${classes}__contact-form__label`}>Your Message</label>
              <textarea id='message' name="message" value={inputValue.message} className={`${classes}__contact-form__input message-field`} onChange={inputChangeHandler} />
            </Grid>
            <Grid item xs={12} className={`${classes}__contact-form__button-wrapper`}>
              <button type='submit' className={`${classes}__send-message-btn`}>
                <span className={`${classes}__send-message-btn__text`}>Send Message</span>
                <Icon className={`${classes}__send-message-btn__icon ${FontAwesomeIcons.arrow}`} />
              </button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Grid>
  );
}

export default ContactForm;
