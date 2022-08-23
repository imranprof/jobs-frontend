import {useState} from "react";

import {Paper} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import Skill from "../../lib/skill";
import JobShow from "../Profile/JobPostForm/JobShow";
import EditCustomModal from "../../lib/profile/editCustomModal";
import {JobStyle} from "./style";

const Job = ({job}) => {
  const theme = useTheme();
  const classes = JobStyle(theme);
  const {title, description, skills, location} = job
  const [openModal, setOpenModal] = useState(false)

  const openModalHandler = () => {
    setOpenModal(true)
  }

  const handleClose = () => {
    setOpenModal(false)
  }

  return (
    <>
      <Paper onClick={openModalHandler} elevation={3} className={classes.jobWrapper}>
        <h1 className={`${classes.jobWrapper}__title`}>{title}</h1>
        <p className={`${classes.jobWrapper}__description`}>{description}</p>
        {skills?.map(skill => (
          <Skill skill={skill} key={skill}/>
        ))}

        <p className={`${classes.jobWrapper}__location`}>Location: {location}</p>
      </Paper>

      <EditCustomModal open={openModal} handleClose={handleClose} >
        <JobShow data={job} handleClose={handleClose} />
      </EditCustomModal>
    </>
  );
};

export default Job;
