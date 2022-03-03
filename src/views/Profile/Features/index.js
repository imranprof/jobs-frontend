import React, {useContext} from 'react';

import {Grid} from "@material-ui/core";

import Feature from "./components/feature";
import {featuresData} from "../../../../API/mock/featuresData";
import ThemeContextProvider from "../../../contexts/themeContext";
import {FeatureStyle} from "./style";

const Features = () => {
    const customTheme = useContext(ThemeContextProvider);
    const classes = FeatureStyle(customTheme);

    return (
        <Grid container spacing={3} className={classes.featureWrapper} id="features">
            {featuresData.map(feature => (
                    <Feature key={feature.id} feature={feature} classes={classes}/>
                )
            )}
        </Grid>
    );
}

export default Features;
