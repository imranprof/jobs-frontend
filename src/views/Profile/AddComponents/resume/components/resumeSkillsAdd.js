import {connect, useDispatch} from "react-redux";
import {useFormik} from "formik";
import CreatableSelect from "react-select/creatable";

import {Slider} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import {addResumeItemAction} from "../../../../../store/actions/resumeActions";
import CustomButtons from "../../../../../lib/profile/customButtons";
import ErrorMessage from "../../../../../lib/errorMessage";
import {ResumeAddStyle} from "../style";
import ModalTitle from "../../../../../lib/profile/modalTitle";
import EditModalDivider from "../../../../../lib/profile/editModalDivider";

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
      if (values.rating === 0) {
        errors.rating = "Skill rating can't be zero!"
      }
      if (!values.skill) {
        errors.skill = "Please select a skill!"
      }
      return errors;
    },
    onSubmit: skillsAdd,
  })

  return (
    <div>
      <ModalTitle title="Add skill" />
      <EditModalDivider />

      <div className={`${classes.resumeAddWrapper}__content-wrapper`}>
        <div className={`${classes.resumeAddWrapper}__content-wrapper__addSkill-wrapper`}>
          <h4 className={`${classes.resumeAddWrapper}__content-wrapper__addSkill-wrapper__title`}>Select your skill</h4>
          <CreatableSelect
            name="skill"
            options={options()}
            onChange={skill => formik.setFieldValue("skill", skill)}
            values={formik.values.skill}
            menuPosition="fixed"
            styles={{menuPortal: (base) => ({...base, zIndex: 2})}}
            className={`${classes.resumeAddWrapper}__content-wrapper__addSkill-wrapper__selectDropdown`}
          />
          {formik.errors.skill && <ErrorMessage error={formik.errors.skill}/>}
        </div>
        <h4 className={`${classes.resumeAddWrapper}__content-wrapper__addSkill-wrapper__title`}>Rate your skill</h4>
        <Slider
          key={`slider-${formik.values.rating}`}
          valueLabelDisplay="on"
          defaultValue={formik.values.rating}
          onChangeCommitted={(e, val) => formik.setFieldValue("rating", val)}
        />
        {formik.errors.rating && <ErrorMessage error={formik.errors.rating}/>}
      </div>

      <EditModalDivider />
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
