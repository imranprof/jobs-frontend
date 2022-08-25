import {useState} from "react";
import {useDispatch} from "react-redux";

import {Paper} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import Skill from "../../lib/skill";
import JobShow from "../Profile/JobPostForm/JobShow";
import JobEdit from "../Profile/EditComponents/job/components/jobEdit";
import EditCustomModal from "../../lib/profile/editCustomModal";
import {JobStyle} from "./style";
import EditButton from "../../lib/editButton";
import RemoveButton from "../../lib/removeButton";
import {removeJobAction} from "../../store/actions/jobAction";

const Job = (props) => {
  const theme = useTheme();
  const classes = JobStyle(theme);
  const {setToast, job} = props
  const {title, description, skills, location, id} = job
  const [openModal, setOpenModal] = useState(false)
  const [editMode, setEditMode] = useState(false)

  const dispatch = useDispatch()

  const openModalHandler = (e) => {
    setEditMode(false)
    setOpenModal(true)
  }

  const handleClose = () => {
    setOpenModal(false)
  }

  const openEditModalHandler = (e) => {
    setEditMode(true)
    setOpenModal(true)
    e.stopPropagation();
  }
  const removeHandler = (e) => {
    dispatch(removeJobAction(id))
    setToast({show: true, severity: "success", text: "Successfully deleted the job."});
    e.stopPropagation();
  }

  return (
    <>
      <Paper onClick={openModalHandler} elevation={3} className={classes.jobWrapper}>
        <span className={`${classes.jobWrapper}__action-btn`}>
          <span onClick={openEditModalHandler}>
            <EditButton/>
          </span>
          <span onClick={removeHandler}>
            <RemoveButton/>
          </span>
        </span>

        <h1 className={`${classes.jobWrapper}__title`}>{title}</h1>
        <p className={`${classes.jobWrapper}__description`}>{description}</p>
        {skills?.map(skill => (
          <Skill skill={skill} key={skill}/>
        ))}

        <p className={`${classes.jobWrapper}__location`}>Location: {location}</p>
      </Paper>

      <EditCustomModal open={openModal} handleClose={handleClose}>
        {editMode ? <JobEdit job={job} handleClose={handleClose} setToast={setToast} /> : <JobShow data={job} handleClose={handleClose} />}
      </EditCustomModal>
    </>
  );
};

export default Job;
