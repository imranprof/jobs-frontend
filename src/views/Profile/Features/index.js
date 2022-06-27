import {connect} from "react-redux";

import {Grid} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import Feature from "./components/feature";
import {FeatureStyle} from "./style";
import {featuresRemove} from "../../../store/actions/editProfileActions";

const Features = (props) => {
  const theme = useTheme();
  const classes = FeatureStyle(theme);

  const featureRemoveHandler = (item) => {
    if (props.features.length > 1) {
      const filteredItems = props.features.filter(feature => feature.id !== item.id)
      props.featuresRemove(filteredItems)
    } else {
      alert("You must have at least one feature!")
    }
  }

  return (
    <Grid container spacing={3} className={classes.featureWrapper} id="features">
      {props.features.map(feature => (
          <Feature key={feature.id} feature={feature} featureRemove={featureRemoveHandler} classes={classes}/>
        )
      )}
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    features: state.editProfile.features
  }
}

const mapDispatchToProps = (dispatch) => ({
  featuresRemove: (values) => dispatch(featuresRemove(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(Features);
