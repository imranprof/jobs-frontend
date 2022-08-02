import {useDispatch} from "react-redux";
import {useFormik} from "formik";

import {TextField} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import {FeaturesEditStyle} from "../style";
import CustomButtons from "../../../../../lib/profile/customButtons";
import ErrorMessage from "../../../../../lib/errorMessage";
import {updateFeatureAction} from "../../../../../store/actions/featureActions";
import CustomSnackbar from "../../../../../lib/customSnackbar";
import ModalTitle from "../../../../../lib/profile/modalTitle";
import EditModalDivider from "../../../../../lib/profile/editModalDivider";

const FeaturesEdit = (props) => {
  const theme = useTheme();
  const classes = FeaturesEditStyle(theme);
  const {feature, handleClose, toast, setToast} = props;
  const {title, description} = feature
  const dispatch = useDispatch();

  const initialFeatureValue = {
    title: title,
    description: description
  }

  const featureUpdate = ({feature, title, description}) => {
    const oldFeature = {...feature};
    feature.title = title;
    feature.description = description;
    dispatch(updateFeatureAction(oldFeature, feature));
    setToast({show: true, severity: "success", text: "Successfully updated the feature."});
    handleClose()
  }

  const featureValidation = (values) => {
    let errors = {}
    if (!values.title) {
      errors.title = "Title can't be empty"
    } else if (values.title.length > 30) {
      errors.title = "Title must be within 30 characters"
    }

    if (!values.description) {
      errors.description = "Description can't be empty"
    } else if (values.description.length > 150) {
      errors.description = "Description must be within 150 characters"
    }

    return errors;
  }

  const formik = useFormik({
    initialValues: initialFeatureValue,
    onSubmit: values => {
      featureUpdate({
        feature: props.feature,
        title: values.title,
        description: values.description
      });
    },
    validate: featureValidation
  })

  return (
    <div>
      <ModalTitle title="Edit feature"/>
      <EditModalDivider />

      <div className={`${classes.featuresEditWrapper}__content-wrapper`}>
        <div className={`${classes.featuresEditWrapper}__content-wrapper__gap`}>
          <TextField
            fullWidth
            variant="outlined"
            required
            size="small"
            name="title"
            label="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          {formik.errors.title ? <ErrorMessage error={formik.errors.title} /> : null}
        </div>
        <div className={`${classes.featuresEditWrapper}__content-wrapper__gap`}>
          <TextField
            required
            multiline={true}
            fullWidth
            rows={5}
            label="Description"
            variant="outlined"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
          {formik.errors.description ? <ErrorMessage error={formik.errors.description} /> : null}
        </div>
      </div>

      <EditModalDivider />
      <CustomButtons handler={formik.handleSubmit} mode={handleClose}/>

      {toast.show &&
      <CustomSnackbar
        toast={toast}
        setToast={setToast}/>
      }
    </div>
  );
};

export default FeaturesEdit;
