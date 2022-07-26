import {connect, useDispatch} from "react-redux";
import {useFormik} from "formik";
import Select from "react-select";

import {Slider} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import {addResumeItemAction} from "../../../../../store/actions/resumeActions";
import {ResumeAddStyle} from "../style";
import CustomButtons from "../../../../../lib/profile/customButtons";
import ErrorMessage from "../../../../../lib/errorMessage";

const ResumeSkillsAdd = (props) => {
  const theme = useTheme();
  const classes = ResumeAddStyle(theme);
  const {cardType, handleClose, allSkills, userSkills, setToast} = props;
  const dispatch = useDispatch();

  const initialSkillValues = {
    skill: null,
    rating: 70
  }

  const options = () => {
    return allSkills.filter(
      skill => {
        for (let i = 0; i < userSkills.length; i++) {
          if (userSkills[i].skill_id === skill.id) return false;
        }
        return true;
      }
    ).map(skill => ({value: skill.id, label: skill.title}));
  }

  const skillsAdd = values => {
    dispatch(addResumeItemAction({
      resumeItem: {skill_id: values.skill.value, rating: values.rating},
      cardType: cardType
    }));
    setToast({show: true, severity: "success", text: "Successfully added the skill!"})
    handleClose()
  }

  const formik = useFormik({
    initialValues: initialSkillValues,
    validate: values => {
      let errors = {};
      if (!values.skill) {
        errors.skill = "Please select a skill!"
      }
      return errors;
    },
    onSubmit: skillsAdd,
  })

  return (
    <div>
      <h3>Add skill</h3>
      <div className={`${classes.resumeAddWrapper}__content-wrapper`}>
        <div className={`${classes.resumeAddWrapper}__content-wrapper__addSkill-wrapper`}>
          <h4>Select a skill</h4>
          <Select
            name="skill"
            options={options()}
            onChange={skill => formik.setFieldValue("skill", skill)}
            values={formik.values.skill}
            menuPosition="fixed"
            styles={{menuPortal: (base) => ({...base, zIndex: 2})}}
            className={`${classes.resumeAddWrapper}__content-wrapper__addSkill-wrapper__selectDropdown`}
          />
        </div>
        <h4>Rate your skill</h4>
        <Slider
          key={`slider-${formik.values.rating}`}
          valueLabelDisplay="on"
          defaultValue={formik.values.rating}
          onChangeCommitted={(e, val) => formik.values.rating = val}
        />
      </div>
      {formik.errors.skill && <ErrorMessage error={formik.errors.skill}/>}
      <CustomButtons handler={formik.handleSubmit} mode={handleClose} actionText="Add"/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allSkills: state.resumeItems.allSkills,
    userSkills: state.resumeItems.resume.skills
  }
}

export default connect(mapStateToProps)(ResumeSkillsAdd);
