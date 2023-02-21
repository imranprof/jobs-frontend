import {Paper} from "@material-ui/core";

const DefaultSkill = ({classes, skill}) => {
  return (
    <Paper elevation={3} className={`${classes.skillsWrapper}__skills__paper`}>
      <i className={`${skill.icon} fa-2x`}/>
    </Paper>
  );
}

export default DefaultSkill;
