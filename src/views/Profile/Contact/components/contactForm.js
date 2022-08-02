import React, {useState, useEffect} from 'react';
import {connect, useDispatch} from "react-redux";

import {Card, Grid} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

import FontAwesomeIcons from "../../../../../styles/FontAwesomeIcons";
import InputWrapper from "./inputWrapper";
import {useFormik} from "formik";
import {sendMessageAction} from "../../../../store/actions/contactActions";
import CustomSnackbar from "../../../../lib/customSnackbar";

const ContactForm = (props) => {
  const {classes, profileID, userID} = props;
  const dispatch = useDispatch();
  const [toast, setToast] = useState({show: false, severity: "", text: ""})
  const initialInputValues = {
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  }

  const contactHandler = useFormik({
    initialValues: initialInputValues,
    onSubmit: values => {
      dispatch(sendMessageAction({
        name: values.name,
        phone: values.phone,
        email: values.email,
        subject: values.subject,
        message: values.message,
        userID: profileID,
        messengerId: userID
      }))
      setToast({show: true, severity: "success", text: "Message sent successfully."});
      contactHandler.resetForm()
    },
    validateOnChange: false,
    validateOnBlur: false,
    validate: values => {
      let errors = {}
      if (!values.name) {
        errors.name = "Name can't be empty"
        setToast({show: true, severity: "error", text: errors.name});
      }
      if (!values.email) {
        errors.email = "Email can't be empty"
        setToast({show: true, severity: "error", text: errors.email});
      }
      return errors;
    }
  })

  return (
    <Grid item md={7}>
      <Card className={`${classes}__contact-form`}>
        <Grid container spacing={4}>
          <InputWrapper type="input" extraSmall={12} small={6} classes={classes} labelFor="name" labelName="Your Name"
                        formValues={contactHandler.values.name} changeHandler={contactHandler.handleChange}/>
          <InputWrapper type="input" extraSmall={12} small={6} classes={classes} labelFor="phone"
                        labelName="Phone Number" formValues={contactHandler.values.phone}
                        changeHandler={contactHandler.handleChange}/>
          <InputWrapper type="input" extraSmall={12} small={12} classes={classes} labelFor="email" labelName="Email"
                        formValues={contactHandler.values.email} changeHandler={contactHandler.handleChange}/>
          <InputWrapper type="input" extraSmall={12} small={12} classes={classes} labelFor="subject" labelName="Subject"
                        formValues={contactHandler.values.subject} changeHandler={contactHandler.handleChange}/>
          <InputWrapper type="textarea" extraSmall={12} small={12} classes={classes} labelFor="message"
                        labelName="Your Message" formValues={contactHandler.values.message}
                        changeHandler={contactHandler.handleChange}/>
          <Grid item xs={12} className={`${classes}__contact-form__button-wrapper`}>
            <button type="submit" className={`${classes}__send-message-btn`} onClick={contactHandler.handleSubmit}>
              <span className={`${classes}__send-message-btn__text`}>Send Message</span>
              <Icon className={`${classes}__send-message-btn__icon ${FontAwesomeIcons.arrowRight}`}/>
            </button>
          </Grid>
          {toast.show &&
          <CustomSnackbar
            toast={toast}
            setToast={setToast}
          />
          }
        </Grid>
      </Card>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    profileID: state.topSection.id,
    userID: state.auth.userID
  }
}

export default connect(mapStateToProps)(ContactForm);
