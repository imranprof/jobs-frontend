import {connect} from "react-redux";
import {useFormik} from "formik";

import {Slider, TextField} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import {resumeUpdate} from "../../../../../store/actions/resumeActions";
import CustomButtons from "../../../../../lib/customButtons";
import ErrorMessages from "../../../../../lib/errorMessages";
import {ResumeEditStyle} from "../style";

const ResumeSkillsEdit = (props) => {
  const theme = useTheme();
  const classes = ResumeEditStyle(theme);
  const {cardType, cardContent, handleClose} = props;
  const {id, name, rating} = cardContent;

  const initialSkillValues = {
    id: id,
    name: name,
    rating: rating
  }

  const skillsUpdate = values => {
    const skillIndex = props.resume[cardType].findIndex(type => type.id === values.id)
    props.resume[cardType][skillIndex].name = values.name
    props.resume[cardType][skillIndex].rating = values.rating

    props.setResume(props.resume)
    props.setToast({show: true, severity: "success", text: "Successfully updated the skill"})
    handleClose()
  }

  const skillValidation = values => {
    let errors = {}
    if(!values.name) {
      errors.name = `Skill name can't be empty`
    }
    return errors;
  }

  const formik = useFormik({
    initialValues: initialSkillValues,
    onSubmit: skillsUpdate,
    validate: skillValidation
  })

  return (
    <div>
      <h3>Edit skill</h3>

      <div className={`${classes.resumeEditWrapper}__content-wrapper`}>
        <div className={`${classes.resumeEditWrapper}__content-wrapper__gap`}>
          <TextField
            required
            fullWidth
            size="small"
            variant="outlined"
            label="Skill name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name ? <ErrorMessages error={formik.errors.name} /> : null}
        </div>
        <div className={`${classes.resumeEditWrapper}__content-wrapper__gap`}>
          <h4>Select your rating</h4>
          <Slider
            key={`slider-${formik.values.rating}`}
            valueLabelDisplay="on"
            defaultValue={formik.values.rating}
            onChangeCommitted={ (e, val) => formik.values.rating = val }
          />
        </div>
      </div>

      <CustomButtons handler={formik.handleSubmit} mode={handleClose} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    resume: state.editResume.resume
  }
}

const mapDispatchToProps = (dispatch) => ({
  setResume: (values) => dispatch(resumeUpdate(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(ResumeSkillsEdit);
