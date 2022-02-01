import React, {useContext} from 'react';

import {profileData} from "../../../../API/mock/profileData";
import ThemeContextProvider from "../../../contexts/themeContext";
import Skill from "./skill";
import {SkillsStyle} from "./style";

const Skills = () =>  {
    const customTheme = useContext(ThemeContextProvider);
    const classes = SkillsStyle(customTheme);

    return (
        <div>
            <span className={`${classes.skillsWrapper}__title`}>best skill on</span>
            <div className={`${classes.skillsWrapper}__skills`}>
                {profileData.skills.map(skill =>
                    <Skill skill={skill} key={skill.id} classes={classes}/>
                )}
            </div>
        </div>
    );
}

export default Skills;
