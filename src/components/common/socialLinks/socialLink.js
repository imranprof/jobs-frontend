import React from 'react';

import {Paper} from "@material-ui/core";
import Icon from '@material-ui/core/Icon';
import FontAwesomeIcons from "../../../../styles/FontAwesomeIcons";

const SocialLink = ({classes, link}) => {
    return (
        <a href={link.url} aria-label={`will redirect to the user's ${link.iconName} profile`}>
            <Paper elevation={3} className={`${classes.socialLinksWrapper}__social-links__paper`}>
                <Icon
                    className={`${classes.socialLinksWrapper}__social-links__paper--icon ${FontAwesomeIcons[link.iconName]}`}/>
            </Paper>
        </a>
    );
}

export default SocialLink;
