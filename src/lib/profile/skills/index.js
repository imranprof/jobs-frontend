import React, {useContext} from 'react';
import {connect} from "react-redux";

import {topSectionData} from "../../../../API/mock/profile/topSectionData";
import ThemeContextProvider from "../../../contexts/themeContext";
import Skill from "./skill";
import {SkillsStyle} from "./style";

const Skills = (props) =>  {
    const customTheme = useContext(ThemeContextProvider);
    const classes = SkillsStyle(customTheme);

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
