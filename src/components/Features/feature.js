import React from 'react';

import {Grid, Paper} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import FontAwesomeIcons from "../../../styles/FontAwesomeIcons";

const Feature = ({feature, classes}) => {
    return (
        <Grid item xs={12} md={6} lg={4} className={`${classes.featureWrapper}__item`}>
            <a href="#">
                <Paper elevation={3} className={`${classes.featureWrapper}__feature`}>
                    <div className={`${classes.featureWrapper}__feature-wrapper`}>
                        <Icon
                            className={`${classes.featureWrapper}__feature__icon ${FontAwesomeIcons[feature.iconName]}`}/>
                        <div className={`${classes.featureWrapper}__feature__content`}>
                            <h4 className={`${classes.featureWrapper}__feature__content__title`}>{feature.title}</h4>
                            <p className={`${classes.featureWrapper}__feature__content__description`}>{feature.description}</p>
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
