import Link from 'next/link';

import {Card, CardMedia, Grid} from "@material-ui/core";

import SocialLinks from "../common/socialLinks";

const ContactInfo = ({classes, contactData}) => {
    const {name, email, designation, description, phone} = contactData;

    return (
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
              <p className={`${classes}__contact-info__title-area__designation`}>{designation}</p>
            </div>
            <div className={`${classes}__contact-info__description-area`}>
              <p className={`${classes}__contact-info__description`}>{description}.</p>
              <span className={`${classes}__contact-info__phone`}>Phone: <Link href="#"><a>{phone}</a></Link></span>
              <span className={`${classes}__contact-info__email`}>Email: <Link href="#"><a>{email}</a></Link></span>
            </div>
            <SocialLinks />
          </Card>
        </Grid>
    );
}

export default ContactInfo;
