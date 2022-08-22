import {Paper} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import Skill from "../../lib/skill";
import {JobStyle} from "./style";

const Job = ({job}) => {
  const theme = useTheme();
  const classes = JobStyle(theme);
  const {title, description, skills, location} = job

  return (
    <Paper elevation={3} className={classes.jobWrapper}>
      <h1 className={`${classes.jobWrapper}__title`}>{title}</h1>
      <p className={`${classes.jobWrapper}__description`}>{description}</p>
      {skills?.map(skill => (
        <Skill skill={skill} key={skill} />
      ))}

      <p className={`${classes.jobWrapper}__location`}>Location: {location}</p>
    </Paper>
  );
};

export default Job;
