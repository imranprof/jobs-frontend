import {connect} from "react-redux";
import {useFormik} from "formik";

import {useTheme} from "@material-ui/core/styles";

import {FeaturesEditStyle} from "../style";
import CustomButtons from "../../../../../lib/customButtons";
import {featuresUpdate} from "../../../../../store/actions/editProfileActions";
import ErrorMessages from "../../../../../lib/errorMessages";

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
    onSubmit: featureUpdate,
    validate: values => {
      let errors = {}
      if(!values.title) {
        errors.title = "Title can't be empty"
      }
      if(!values.description) {
        errors.description = "Description can't be empty"
      }
      return errors;
    }
  })

  return (
    <div>
      <h3 className={`${classes.featuresEditWrapper}__top-label`}>Edit feature</h3>

      <div className={`${classes.featuresEditWrapper}__content-wrapper`}>
        <div>
          <h4 className={`${classes.featuresEditWrapper}__content-label`}>Title</h4>
          <input type="text" name="title" value={formik.values.title} onChange={formik.handleChange} className={`${classes.featuresEditWrapper}__title`} />
          {formik.errors.title ? <ErrorMessages error={formik.errors.title} /> : null}
        </div>
        <div>
          <h4 className={`${classes.featuresEditWrapper}__content-label`}>Description</h4>
          <textarea name="description" value={formik.values.description} onChange={formik.handleChange} className={`${classes.featuresEditWrapper}__description`} />
          {formik.errors.description ? <ErrorMessages error={formik.errors.description} /> : null}
        </div>

        <CustomButtons handler={formik.handleSubmit} mode={handleClose} />
      </div>
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
