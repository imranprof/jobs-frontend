import {Paper, Tooltip} from "@material-ui/core";
import Fade from "@material-ui/core/Fade";

const Skill = ({classes, skill}) => {
  return (
    <Tooltip title={skill.title} placement="top" size="md" TransitionComponent={Fade} TransitionProps={{timeout: 600}}>
      <Paper elevation={3} className={`${classes.skillsWrapper}__skills__paper`}>
        <img className={`${classes.skillsWrapper}__skills__paper--img`} src={skill.icon} alt={skill.name}/>
      </Paper>
    </Tooltip>
  );
}

export default Skill;
