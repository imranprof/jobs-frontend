import {connect, useDispatch} from "react-redux";
import {useFormik} from "formik";

import {Slider} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import {resumeUpdateAction} from "../../../../../store/actions/resumeActions";
import CustomButtons from "../../../../../lib/profile/customButtons";
import ErrorMessage from "../../../../../lib/errorMessage";
import {ResumeEditStyle} from "../style";
import ModalTitle from "../../../../../lib/profile/modalTitle";
import EditModalDivider from "../../../../../lib/profile/editModalDivider";

const ResumeSkillsEdit = (props) => {
  const theme = useTheme();
  const classes = ResumeEditStyle(theme);
  const {cardType, cardContent, handleClose} = props;
  const {id, name, rating} = cardContent;
  const dispatch = useDispatch();

  const initialSkillValues = {
    id: id,
    name: name,
    rating: rating
  }

  const skillsUpdate = values => {
    dispatch(resumeUpdateAction({
      resumeItem: values,
      cardType: cardType
    }));
    props.setToast({show: true, severity: "success", text: "Successfully updated the skill"})
    handleClose()
  }

  const formik = useFormik({
    initialValues: initialSkillValues,
    validateOnChange: true,
    onSubmit: skillsUpdate,
    validate: values => {
      let errors = {};
      if (values.rating === 0) {
        errors.rating = "Skill rating can't be zero!"
      }
      return errors;
    }
  })

  return (
    <div>
      <ModalTitle title="Edit skill"/>
      <EditModalDivider />

      <div className={`${classes.resumeEditWrapper}__content-wrapper`}>
        <div className={`${classes.resumeEditWrapper}__content-wrapper__gap`}>
          <h4 className={`${classes.resumeEditWrapper}__content-wrapper__edit-skill`}>Rate your {name} skill</h4>
          <Slider
            key={`slider-${formik.values.rating}`}
            valueLabelDisplay="on"
            defaultValue={formik.values.rating}
            onChangeCommitted={(e, val) => formik.setFieldValue("rating", val)}
          />
          {formik.errors.rating && <ErrorMessage error={formik.errors.rating}/>}
        </div>
      </div>

      <EditModalDivider />
      <CustomButtons handler={formik.handleSubmit} mode={handleClose}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    resume: state.resumeItems.resume
  }
}

export default connect(mapStateToProps)(ResumeSkillsEdit);
