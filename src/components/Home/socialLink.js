import React from 'react';

import {Paper} from "@material-ui/core";
import Icon from '@material-ui/core/Icon';
import FontAwesomeIcons from "../../../styles/FontAwesomeIcons";

const SocialLink = ({classes, link}) =>  {
        return (
            <a href={link.url}>
                <Paper elevation={3} className={`${classes.homeWrapper}__paper`}>
                        <Icon className={`${classes.homeWrapper}__paper--icon ${FontAwesomeIcons[link.iconName]}`}></Icon>
                </Paper>
            </a>
        );
}

export default SocialLink;