import {useState} from "react";
import {connect} from "react-redux";

import {useTheme} from "@material-ui/core/styles";

import Skill from "./skill";
import {SkillsStyle} from "./style";
import EditButton from "../../editButton";
import SkillsEdit from "../../../views/Profile/EditComponents/topSection/components/skillsEdit";
import MuiCustomModal from "../muiCustomModal";
import {skillsUpdate} from "../../../store/actions/editProfileActions";

const Skills = (props) => {
  const theme = useTheme();
  const classes = SkillsStyle(theme);
  const [openModal, setOpenModal] = useState(false);
  const [skillsEditValue, setSkillsEditValue] = useState({skills: props.skills})

  const modalClose = () => {
    setOpenModal(false)
  }

  const skillsEditHandler = () => {
    if (skillsEditValue.skills.length !== 0 && skillsEditValue.skills.length <= 3) {
      props.setSkills(skillsEditValue.skills);
      setOpenModal(false);
    } else {
      setOpenModal(true);
    }
  }

  return (
    <div className={classes.skillsWrapper}>
      <div>
        <span className={`${classes.skillsWrapper}__title`}>best skill on</span>
        <div className={`${classes.skillsWrapper}__skills`}>
          {props.skills.map(skill =>
            <Skill skill={skill} key={skill.id} classes={classes}/>
          )}
        </div>
      </div>

      <MuiCustomModal handleClose={modalClose} open={openModal}>
        <SkillsEdit
          skillsEditHandler={skillsEditHandler}
          skillsEditValue={skillsEditValue}
          setSkillsEditValue={setSkillsEditValue}
          handleClose={modalClose}
        />
      </MuiCustomModal>

      <span className={`${classes.skillsWrapper}__skills__editBtnWrapper`} onClick={() => setOpenModal(true)}>
        <EditButton/>
      </span>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    skills: state.editProfile.skills
  }
}

const mapDispatchToProps = (dispatch) => ({
  setSkills: (value) => dispatch(skillsUpdate(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Skills);
