import {Paper} from "@material-ui/core";
import Icon from '@material-ui/core/Icon';

import FontAwesomeIcons from "../../../../styles/FontAwesomeIcons";

const SocialLink = ({classes, link, iconName}) => {
  if(iconName === "linkedin"){
    link = 'https://'+iconName+'.com/in/'+link
  }
  else{
    link = 'https://'+iconName+'.com/'+link
  }
  return (
    <a href={link || void(0)} target="_blank" aria-label={`will redirect to the user's ${iconName} profile`}>
      <Paper elevation={3} className={`${classes.socialLinksWrapper}__social-links__paper`}>
        <Icon className={`${classes.socialLinksWrapper}__social-links__paper--icon ${FontAwesomeIcons[iconName]}`}/>
      </Paper>
    </a>
  );
}

export default SocialLink;
