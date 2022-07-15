import {connect} from "react-redux";
import Select from "react-select";

import {useTheme} from "@material-ui/core/styles";

import {TopSectionEditStyle} from "../style";
import CustomButton from "../../../../../lib/profile/customButtons";
import {skillsUpdate} from "../../../../../store/actions/topSectionActions";
import ErrorMessage from "../../../../../lib/errorMessage";

const skillsData = [
  {id: 1, name: "Ruby", image: "ruby.png", value: "Ruby", label: "Ruby"},
  {id: 2, name: "Javascript", image: "javascript.png", value: "Javascript", label: "Javascript"},
  {id: 3, name: "Python", image: "python.png", value: "Python", label: "Python"},
  {id: 4, name: "Golang", image: "golang.png", value: "Golang", label: "Golang"},
  {id: 5, name: "React", image: "react.png", value: "React", label: "React"},
  {id: 6, name: "Java", image: "java.png", value: "Java", label: "Java"},
]

const SkillsEdit = (props) => {
  const theme = useTheme();
  const classes = TopSectionEditStyle(theme);
  const {skillsEditHandler, skillsEditValue, setSkillsEditValue, handleClose} = props;

  props.skills.forEach(obj => {
    obj.value = obj.name
    obj.label = obj.name
  })

  const selectChangeHandler = (elements) => {
    setSkillsEditValue({
      skills: elements
    })
  }

  return (
    <div className={`${classes.topSectionEditWrapper}__skillsWrapper`}>
      <div>
        <h3>Edit skills</h3>
        <p>Select your best skills (Max. 3 skills)</p>
        <Select
          isMulti
          options={skillsData}
          defaultValue={props.skills}
          onChange={selectChangeHandler}
          className={`${classes.topSectionEditWrapper}__skillsWrapper__selectDropdown`}
        />
        {(skillsEditValue.skills.length > 3) && <ErrorMessage error="Maximum 3 skills" />}
        {(skillsEditValue.skills.length === 0) && <ErrorMessage error="Select at least one skill" />}
      </div>

      <CustomButton handler={skillsEditHandler} mode={handleClose}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    skills: state.topSection.skills,
  }
}

const mapDispatchToProps = (dispatch) => ({
  setSkills: (editValue) => dispatch(skillsUpdate(editValue)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SkillsEdit);
