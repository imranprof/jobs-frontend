import React from 'react';

import {Grid, Paper} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import FontAwesomeIcons from "../../../styles/FontAwesomeIcons";

const Feature = ({feature, classes}) => {
    const {iconName, title, description} = feature;
    return (
        <Grid item xs={12} md={6} lg={4} className={`${classes.featureWrapper}__item`}>
            <a href="#">
                <Paper elevation={3} className={`${classes.featureWrapper}__feature`}>
                    <div className={`${classes.featureWrapper}__feature-wrapper`}>
                        <Icon
                            className={`${classes.featureWrapper}__feature__icon ${FontAwesomeIcons[iconName]}`}/>
                        <div className={`${classes.featureWrapper}__feature__content`}>
                            <h1 className={`${classes.featureWrapper}__feature__content__title`}>{title}</h4>
                            <p className={`${classes.featureWrapper}__feature__content__description`}>{description}</p>
                            <Icon
                                className={`${classes.featureWrapper}__feature__content__read-more-btn ${FontAwesomeIcons.arrow}`}/>
                        </div>
                    </div>
                </Paper>
            </a>
        </Grid>
    );
}

export default Feature;
