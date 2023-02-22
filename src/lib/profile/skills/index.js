import {connect} from "react-redux";

import {useTheme} from "@material-ui/core/styles";

import Skill from "./skill";
import {SkillsStyle} from "./style";
import FontAwesomeIcons from "../../../../styles/FontAwesomeIcons";
import DefaultSkill from "./defaultSkill";

const Skills = (props) => {
  const theme = useTheme();
  const classes = SkillsStyle(theme);

  let skillLength = Object.keys(props.skills).length;
  const defaultSkills = [
    {'id': 1, 'name': 'skill 1', 'icon': FontAwesomeIcons.cogs},
    {'id': 2, 'name': 'skill 2', 'icon': FontAwesomeIcons.cogs},
    {'id': 3, 'name': 'skill 3', 'icon': FontAwesomeIcons.cogs}
  ]

  return (
    <div className={classes.skillsWrapper}>
      <div>
        <span className={`${classes.skillsWrapper}__title`}>best skill</span>
        {skillLength === 0 ? (
          <div className={`${classes.skillsWrapper}__skills`}>
            {defaultSkills.map(skill =>
              <DefaultSkill skill={skill} key={skill.id} classes={classes}/>
            )}
          </div>
        ) : (
          <div className={`${classes.skillsWrapper}__skills`}>
            {props.skills.map(skill =>
              <Skill skill={skill} key={skill.id} classes={classes}/>
            )}
          </div>
        )}
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
