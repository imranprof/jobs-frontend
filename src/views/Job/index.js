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
import {getIndividualJobs, removeJobAction} from "../../store/actions/jobAction";
import moment from "moment";

const Job = (props) => {
  const theme = useTheme();
  const classes = JobStyle(theme);
  const {setToast, job, setIsDelete, isDelete, type, setJobs} = props
  const {title, description, skills, location, id, pay_type, created_at, total_applied} = job
  const [openModal, setOpenModal] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const dispatch = useDispatch()

  const payTypeText = pay_type === 'Pay by the hour' ? 'Hourly' : 'Fixed-price'

  const jobPostedTime = moment(created_at).fromNow();

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

  const removeHandler = async (e) => {
    e.stopPropagation();
    const response = await dispatch(removeJobAction(id))
    if (response.status === 204) {
      await dispatch(getIndividualJobs())
      await setIsDelete(!isDelete);
    }
    setToast({show: true, severity: "success", text: "Successfully deleted the job."});
  }

  return (
    <>
      <Paper onClick={openModalHandler} elevation={3} className={classes.jobWrapper}>
        {type === 'myJob' &&
        (<span className={`${classes.jobWrapper}__action-btn`}>
          <span onClick={openEditModalHandler}>
            <EditButton/>
          </span>
          <span onClick={removeHandler}>
            <RemoveButton/>
          </span>
        </span>)}

        <h1 className={`${classes.jobWrapper}__title`}>{title}</h1>
        <div>
          <span className={`${classes.jobWrapper}__pay-type`}>{payTypeText}</span>
          <span className={`${classes.jobWrapper}__hyphen`}>-</span>
          <span className={`${classes.jobWrapper}__pay-type`}>{`Posted ${jobPostedTime}`}</span>
        </div>
        <p className={`${classes.jobWrapper}__description`}>{description}</p>
        {skills?.map(skill => (
          <Skill skill={skill} key={skill}/>
        ))}

        <p className={`${classes.jobWrapper}__location`}>Location: {location}</p>

        <p className={`${classes.jobWrapper}__total-applied`}>{`Total applied: ${total_applied}`}</p>
      </Paper>

      <EditCustomModal open={openModal} handleClose={handleClose}>
        {editMode ? <JobEdit job={job} handleClose={handleClose} setToast={setToast}/> :
          <JobShow
            data={job}
            setJobs={setJobs}
            handleClose={handleClose}
            payTypeText={payTypeText}
            jobPostedTime={jobPostedTime}
            totalApplied={total_applied}
          />}
      </EditCustomModal>
    </>
  );
};

export default Job;
