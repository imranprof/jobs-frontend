import {connect} from "react-redux";
import {useFormik} from "formik";

import {useTheme} from "@material-ui/core/styles";

import {FeaturesEditStyle} from "../style";
import CustomButtons from "../../../../../lib/customButtons";
import {featuresUpdate} from "../../../../../store/actions/editProfileActions";

const FeaturesEdit = (props) => {
  const theme = useTheme();
  const classes = FeaturesEditStyle(theme);
  const {feature, handleClose} = props;
  const {id, title, description} = feature

  const initialFeatureValue = {
    id: id,
    title: title,
    description: description
  }

  const featureUpdate = (values) => {
    const featureIndex = props.features.findIndex(feature => feature.id === values.id);
    props.features[featureIndex].title = values.title
    props.features[featureIndex].description = values.description

    props.editFeatures(props.features)
    handleClose()
  }

  const formik = useFormik({
    initialValues: initialFeatureValue,
    onSubmit: featureUpdate
  })

  return (
    <div>
      <h3 className={`${classes.featuresEditWrapper}__top-label`}>Edit feature</h3>

      <div className={`${classes.featuresEditWrapper}__content-wrapper`}>
        <div>
          <h5 className={`${classes.featuresEditWrapper}__content-label`}>Title</h5>
          <input type="text" name="title" value={formik.values.title} onChange={formik.handleChange} className={`${classes.featuresEditWrapper}__title`} />
        </div>
        <div>
          <h5 className={`${classes.featuresEditWrapper}__content-label`}>Description</h5>
          <textarea name="description" value={formik.values.description} onChange={formik.handleChange} className={`${classes.featuresEditWrapper}__description`} />
        </div>
      </div>

      <CustomButtons handler={formik.handleSubmit} mode={handleClose} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    features: state.editProfile.features,
  }
}

const mapDispatchToProps = (dispatch) => ({
  editFeatures: (values) => dispatch(featuresUpdate(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(FeaturesEdit);
