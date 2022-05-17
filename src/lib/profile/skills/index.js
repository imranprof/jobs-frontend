import {connect} from "react-redux";

import {useTheme} from "@material-ui/core/styles";

import Skill from "./skill";
import {SkillsStyle} from "./style";

const Skills = (props) => {
  const theme = useTheme();
  const classes = SkillsStyle(theme);

  return (
    <div>
      <span className={`${classes.skillsWrapper}__title`}>best skill on</span>
      <div className={`${classes.skillsWrapper}__skills`}>
        {props.skills.map(skill =>
          <Skill skill={skill} key={skill.id} classes={classes}/>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    skills: state.profile.skills
  }
}

export default connect(mapStateToProps)(Skills);
