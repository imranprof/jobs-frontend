import React from 'react';

import Skill from "../../../../lib/skill";

const SkillSet = ({ classes, skillsData }) => {
  const slicedSkills = skillsData.slice(0, 4)

  return (
    <div className={`${classes}__skills`}>
      {slicedSkills.map((skill, key) => (
        <Skill skill={skill} key={key} />
      ))}
    </div>
  );
};

export default SkillSet;
