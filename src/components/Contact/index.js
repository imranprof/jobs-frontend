import {useContext} from "react";

import {Grid} from "@material-ui/core";

import {ContactStyle} from "./style";
import ThemeContextProvider from "../../contexts/themeContext";
import ContactInfo from "./contactInfo";
import ContactForm from "./contactForm";
import {ContactData} from "../../../API/mock/contactData";

const Contact = () => {
    const customTheme = useContext(ThemeContextProvider);
    const classes = ContactStyle(customTheme);

        return (
            <Grid container spacing={3} className={classes.contactWrapper} >
                <ContactInfo classes={classes} contactData={ContactData} />
                <ContactForm />
            </Grid>
        );
}

export default Contact;
