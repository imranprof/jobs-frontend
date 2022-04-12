import React, {useContext} from 'react';
import {connect} from "react-redux";

import {Grid} from "@material-ui/core";

import Feature from "./components/feature";
import ThemeContextProvider from "../../../contexts/themeContext";
import {FeatureStyle} from "./style";

const Features = (props) => {
    const customTheme = useContext(ThemeContextProvider);
    const classes = FeatureStyle(customTheme);
    const {features} = props;

    return (
        <Grid container spacing={3} className={classes.featureWrapper} id="features">
            {features.map(feature => (
                    <Feature key={feature.id} feature={feature} classes={classes}/>
                )
            )}
        </Grid>
    );
}

const mapStateToProps = (state) => {
    return {
        features: state.profile.features
    }
}

export default connect(mapStateToProps)(Features);
