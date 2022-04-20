import {connect} from "react-redux";

import {Grid} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import Feature from "./components/feature";
import {FeatureStyle} from "./style";

const Features = (props) => {
    const theme = useTheme();
    const classes = FeatureStyle(theme);
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
