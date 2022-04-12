import {useContext} from "react";

import {Grid} from "@material-ui/core";

import {ContactStyle} from "./style";
import ThemeContextProvider from "../../../contexts/themeContext";
import ContactInfo from "./components/contactInfo";
import ContactForm from "./components/contactForm";

const Contact = () => {
    const customTheme = useContext(ThemeContextProvider);
    const classes = ContactStyle(customTheme);

        return (
            <Grid container spacing={3} className={classes.contactWrapper} id="contact" >
                <ContactInfo classes={classes.contactWrapper} />
                <ContactForm classes={classes.contactWrapper} />
            </Grid>
        );
}

export default Contact;
