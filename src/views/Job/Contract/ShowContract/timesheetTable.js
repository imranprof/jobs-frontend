import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import {
  Fade,
  Popper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
  Paper,
  Button
} from "@material-ui/core";

import FontAwesomeIcons from "../../../../../styles/FontAwesomeIcons";
import {getRole} from "../../../../auth/operations";
import {deleteTimeSheet, getAllTimeSheets, sendTimesheetToEmployer} from "../../../../store/actions/jobAction";
import EditCustomModal from "../../../../lib/profile/editCustomModal";
import TimesheetRecordContents from "./timesheetRecordContents";

const TimesheetTable = (props) => {
  const dispatch = useDispatch()
  const {timeSheetList, classes, jobContractId, setToast} = props
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState('')
  const [timesheetData, setTimesheetData] = useState({})
  const [openModal, setOpenModal] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false)
  const [click, setClick] = useState(false)

  useEffect(() => {
    let countStatus = 0;
    timeSheetList.map(timeSheet => {
      if (timeSheet.status === 'requested') countStatus++
    })
    if (timeSheetList.length === countStatus && countStatus !== 0) {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
  }, [timeSheetList.length, click])

  const modalOpen = () => {
    setOpenModal(true);
  };

  const modalClose = () => {
    setOpenModal(false);
  };

  const truncateDescription = (str, n) => {
    return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
  };

  const seeMoreHandler = (event, value) => {
    setAnchorEl(event.currentTarget);
    setData(value)
    setOpen(!open);
  };

  const deleteTimesheetHandler = async (id) => {
    await dispatch(deleteTimeSheet(id))
    await dispatch(getAllTimeSheets(jobContractId))
    setToast({show: true, severity: "success", text: "Work record deleted Successfully"});
  }

  const editTimesheetHandler = async (data) => {
    await setTimesheetData(data)
    await modalOpen()
  }

  const pluralize = (count, noun, suffix = 's') =>
    `${count} ${noun}${count !== 1 ? suffix : ''}`;

  const timeConverter = () => {
    let totalHours = 0, totalMinutes = 0
    timeSheetList.map(timesheet => {
      totalHours += timesheet.work_hours
      totalMinutes += timesheet.work_minutes
    })

    let temp = (totalHours * 60) + totalMinutes;
    totalHours = Math.floor(temp / 60);
    totalMinutes = temp % 60;
    return `${pluralize(totalHours, 'hour', 's')} ${pluralize(totalMinutes, 'minute', 's')}`
  }

  const sendToEmployer = () => {
    const timesheetIds = timeSheetList.map(timesheet => timesheet.id)
    dispatch(sendTimesheetToEmployer(timesheetIds, jobContractId)).then(async () => {
        await dispatch(getAllTimeSheets(jobContractId))
        await setClick(!click)
    })
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={`${classes}__timesheet-wrapper__table`}>
          <TableHead>
            <TableRow>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Work Hours</TableCell>
              <TableCell>Work Description</TableCell>
              {getRole() === 'employee' && <TableCell>Actions</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {timeSheetList.map((timesheet) => (
              <TableRow key={timesheet.id}>
                <TableCell>{timesheet.start_date}</TableCell>
                <TableCell>{timesheet.end_date}</TableCell>
                <TableCell>
                  {pluralize(timesheet.work_hours, 'hr', 's')} {pluralize(timesheet.work_minutes, 'min', 's')}
                </TableCell>

                <Popper open={open} anchorEl={anchorEl} placement="top" transition>
                  {({TransitionProps}) => (
                    <Fade {...TransitionProps} timeout={350}>
                      <Paper style={{maxWidth: 300, padding: 15}}>
                        <Typography>{data}</Typography>
                      </Paper>
                    </Fade>
                  )}
                </Popper>
                <TableCell>
                  {truncateDescription(timesheet.work_description, 50)}
                  {timesheet.work_description.length > 50 && (
                    <Button
                      size="small"
                      variant="text"
                      onClick={(e) => seeMoreHandler(e, timesheet.work_description)}
                    >
                      See more
                    </Button>
                  )}
                </TableCell>

                {getRole() === 'employee' && (
                  <TableCell>
                    <div className={`${classes}__timesheet-wrapper__table-actions`}>
                      <Tooltip title="Edit" placement="top">
                        <i onClick={() => editTimesheetHandler(timesheet)}
                           className={`${FontAwesomeIcons.pencil} ${classes}__timesheet-wrapper__table-actions__edit`}/>
                      </Tooltip>
                      <Tooltip title="Delete" placement="top">
                        <i onClick={() => deleteTimesheetHandler(timesheet.id)}
                           className={`${FontAwesomeIcons.trash} ${classes}__timesheet-wrapper__table-actions__delete`}/>
                      </Tooltip>
                    </div>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className={`${classes}__timesheet-wrapper__bottom`}>
        <span className={`${classes}__timesheet-wrapper__hours`}>
          {`Total hours: ${timeConverter()}`}
        </span>

        {getRole() === 'employee' && (
          <Button
            variant="contained"
            onClick={sendToEmployer}
            className={`${classes}__timesheet-wrapper__send-timesheet`}
            disabled={isDisabled}
          >
            {isDisabled ? 'Sent' : 'Send'} to employer
          </Button>
        )}
      </div>

      <EditCustomModal handleClose={modalClose} open={openModal}>
        <TimesheetRecordContents classes={classes} handleClose={modalClose} timesheetData={timesheetData}
                                 jobContractId={jobContractId} mode="edit" setToast={setToast}/>
      </EditCustomModal>
    </>
  );
}

export default TimesheetTable;
