import {Grid} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import {ContactStyle} from "./style";
import ContactInfo from "./components/contactInfo";
import ContactForm from "./components/contactForm";

const Contact = () => {
  const theme = useTheme();
  const classes = ContactStyle(theme);

  return (
    <Grid container spacing={3} className={classes.contactWrapper} id="contact">
      <ContactInfo classes={classes.contactWrapper}/>
      <ContactForm classes={classes.contactWrapper}/>
    </Grid>
  );
}

export default Contact;
