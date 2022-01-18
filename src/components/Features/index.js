import React, {useContext} from 'react';

import {Grid} from "@material-ui/core";

import SectionHeader from "../common/sectionHeaders/sectionHeader";
import Feature from "./feature";
import {featuresData} from "../../../API/mock/featuresData";
import ThemeContextProvider from "../../contexts/themeContext";
import {FeatureStyle} from "./style";
import {SectionHeaders} from "../../../API/elements/sectionHeaders";

const Features = () => {
    const customTheme = useContext(ThemeContextProvider);
    const classes = FeatureStyle(customTheme);

    return (
        <>
            <SectionHeader SectionHeader={SectionHeaders[0]}/>
            <Grid container spacing={3} className={classes.featureWrapper}>
                {featuresData.map(feature => (
                        <Feature key={feature.id} feature={feature} classes={classes}/>
                    )
                )}
            </Grid>
        </>
    );
}

export default Features;
