import {connect} from "react-redux";

import {Grid} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import Feature from "./components/feature";
import {FeatureStyle} from "./style";
import {featuresRemove} from "../../../store/actions/featureActions";
import CustomSnackbar from "../../../lib/customSnackbar";
import {useState} from "react";

const Features = (props) => {
  const theme = useTheme();
  const classes = FeatureStyle(theme);
  const [toast, setToast] = useState({show: false, severity: "", text: ""})

  const featureRemoveHandler = (item) => {
    if (props.features.length > 1) {
      const filteredItems = props.features.filter(feature => feature.id !== item.id);
      props.featuresRemove(filteredItems);
      setToast({show: true, severity: "success", text: "Successfully deleted the feature!"});
    } else {
      setToast({show: true, severity: "error", text: "You must have at least one feature!"});
    }
  }

  return (
    <>
      <Grid container spacing={3} className={classes.featureWrapper} id="features">
        {props.features.map(feature => (
            <Feature key={feature.id} feature={feature} featureRemove={featureRemoveHandler} setToast={setToast}
                     classes={classes}/>
          )
        )}
      </Grid>
      {toast.show &&
      <CustomSnackbar
        toast={toast}
        setToast={setToast}/>
      }
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    features: state.features
  }
}

const mapDispatchToProps = (dispatch) => ({
  featuresRemove: (values) => dispatch(featuresRemove(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(Features);
