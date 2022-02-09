import React from 'react';

import {Card, Grid, Link, Paper} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import FontAwesomeIcons from "../../../styles/FontAwesomeIcons";

const ContactForm = ({classes}) => {
  return (
    <Grid item md={7}>
      <Card className={`${classes}__contact-form`}>
        <form>
          <Grid container spacing={4}>
            <Grid item md={6} className={`${classes}__contact-form__input-wrapper`}>
              <label className={`${classes}__contact-form__label`}>Your Name</label>
              <input className={`${classes}__contact-form__input`}/>
            </Grid>
            <Grid item md={6} className={`${classes}__contact-form__input-wrapper`}>
              <label className={`${classes}__contact-form__label`}>Phone Number</label>
              <input className={`${classes}__contact-form__input`}/>
            </Grid>
            <Grid item md={12} className={`${classes}__contact-form__input-wrapper`}>
              <label className={`${classes}__contact-form__label`}>Email</label>
              <input className={`${classes}__contact-form__input`}/>
            </Grid>
            <Grid item md={12} className={`${classes}__contact-form__input-wrapper`}>
              <label className={`${classes}__contact-form__label`}>Subject</label>
              <input className={`${classes}__contact-form__input`}/>
            </Grid>
            <Grid item md={12} className={`${classes}__contact-form__input-wrapper`}>
              <label className={`${classes}__contact-form__label`}>Your Message</label>
              <textarea className={`${classes}__contact-form__input message-field`}/>
            </Grid>

            <Grid item md={12} className={`${classes}__contact-form__button-wrapper`} >
              <Link href="#" className={`${classes}__contact-form__button-link`}>
                  <Paper elevation={3} className={`${classes}__send-message-btn`}>
                    <span className={`${classes}__send-message-btn__text`}>Send Message</span>
                    <Icon className={`${classes}__send-message-btn__icon ${FontAwesomeIcons.arrow}`} />
                  </Paper>
              </Link>
            </Grid>

          </Grid>
        </form>
      </Card>
    </Grid>
  );
}

export default ContactForm;
