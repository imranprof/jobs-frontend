import React from 'react';

import {Paper} from "@material-ui/core";

const SKill = ({classes, skill}) =>  {
    return (
            <Paper elevation={3} className={`${classes.homeWrapper}__paper`}>
                <img className={`${classes.homeWrapper}__paper--img`} src={skill.image}/>
            </Paper>
    );
}

export default SKill;