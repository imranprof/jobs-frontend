import React from 'react';

import Skill from "../../../../lib/skill";

const SkillSet = ({ classes, skills }) => {
  const slicedSkills = skills.slice(0, 4)

  return (
    <div className={`${classes}__skills`}>
      {slicedSkills.map((skill, key) => (
        <Skill key={key} skill={skill} />
      ))}
    </div>
  );
};

export default SkillSet;
