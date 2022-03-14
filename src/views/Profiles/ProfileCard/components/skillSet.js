import React from 'react';

import Skill from "../../../../lib/skill";

const SkillSet = ({ classes, skillsData }) => {

  return (
    <div className={`${classes}__skills`}>
      {skillsData.map((skill, key) => (
        <Skill skill={skill} key={key} />
      ))}
    </div>
  );
};

export default SkillSet;
