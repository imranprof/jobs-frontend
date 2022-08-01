import {useDispatch} from "react-redux";
import {useFormik} from "formik";

import {TextField} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import {FeaturesAddStyle} from "../style";
import ErrorMessage from "../../../../../lib/errorMessage";
import CustomButtons from "../../../../../lib/profile/customButtons";
import {addFeatureAction} from "../../../../../store/actions/featureActions";
import ModalTitle from "../../../../../lib/profile/modalTitle";
import EditModalDivider from "../../../../../lib/profile/editModalDivider";

const FeaturesAdd = (props) => {
  const theme = useTheme();
  const classes = FeaturesAddStyle(theme);
  const {handleClose, setToast} = props;
  const dispatch = useDispatch();

  const initialFeatureAddValue = {
    title: "",
    description: ""
  }

  const featureAdd = ({title, description}) => {
    dispatch(addFeatureAction({title, description}))
    setToast({show: true, severity: "success", text: "Successfully created the feature"});
    handleClose()
  }

  const featureAddValidation = (values) => {
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
    initialValues: initialFeatureAddValue,
    onSubmit: featureAdd,
    validate: featureAddValidation
  })

  return (
    <div>
      <ModalTitle title="Add feature"/>
      <EditModalDivider />

      <div className={`${classes.featuresAddWrapper}__content-wrapper`}>
        <div className={`${classes.featuresAddWrapper}__content-wrapper__gap`}>
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
        <div className={`${classes.featuresAddWrapper}__content-wrapper__gap`}>
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
      <CustomButtons handler={formik.handleSubmit} mode={handleClose} actionText="Add" />
    </div>
  );
};

export default FeaturesAdd;
