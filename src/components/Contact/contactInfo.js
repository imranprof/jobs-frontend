import {Card, CardMedia} from "@material-ui/core";

import SocialLinks from "../common/socialLinks";

const ContactInfo = ({classes, contactData}) => {
    const {name, email, designation, description, phone} = contactData;

    return (
        <Card xs={12} md={6} className={`${classes.contactWrapper}__contact-info`}>
            <div className={`${classes.contactWrapper}__contact-info__image-wrapper`}>
                <CardMedia
                    className={`${classes.contactWrapper}__contact-info__image`}
                    image="contact1.png"
                    title="Contact"
                />
            </div>
            <div className={`${classes.contactWrapper}__contact-info__title-area`}>
                <h1 className={`${classes.contactWrapper}__contact-info__title-area__name`}>{name}</h1>
                <p className={`${classes.contactWrapper}__contact-info__title-area__designation`}>{designation}</p>
            </div>
            <div className={`${classes.contactWrapper}__contact-info__description-area`}>
                <p className={`${classes.contactWrapper}__contact-info__description`}>{description}.</p>
                <span className={`${classes.contactWrapper}__contact-info__phone`}>Phone: <a href="#">{phone}</a></span>
                <span className={`${classes.contactWrapper}__contact-info__email`}>Email: <a href="#">{email}</a></span>
            </div>
            <SocialLinks />
        </Card>
    );
}

export default ContactInfo;
