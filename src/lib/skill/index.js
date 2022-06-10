import {useTheme} from "@material-ui/core/styles";

import {SkillStyle} from "./style";

const Skill = ({skill}) => {
  const theme = useTheme();
  const classes = SkillStyle(theme);

  return (
      <div className={classes.skillWrapper} >
        <span>{skill}</span>
      </div>
  );
};

export default Skill;
