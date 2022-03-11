import React, {useContext} from 'react';

import ThemeContextProvider from "../../contexts/themeContext";
import {SkillStyle} from "./style";

const Skill = () => {
  const customTheme = useContext(ThemeContextProvider);
  const classes = SkillStyle(customTheme);

  return (
      <div className={classes.skillWrapper} >
        <span>Ruby on Rails</span>
      </div>
  );
};

export default Skill;
