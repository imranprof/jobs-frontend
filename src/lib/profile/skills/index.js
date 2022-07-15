import {connect} from "react-redux";

import {useTheme} from "@material-ui/core/styles";

import Skill from "./skill";
import {SkillsStyle} from "./style";

const Skills = (props) => {
  const theme = useTheme();
  const classes = SkillsStyle(theme);

  return (
    <div className={classes.skillsWrapper}>
      <div>
        <span className={`${classes.skillsWrapper}__title`}>best skill</span>
        <div className={`${classes.skillsWrapper}__skills`}>
          {props.skills.map(skill =>
            <Skill skill={skill} key={skill.id} classes={classes}/>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    skills: state.topSection.skills
  }
}

export default connect(mapStateToProps)(Skills);
