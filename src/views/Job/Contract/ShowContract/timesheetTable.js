import {useState} from "react";
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
  Typography
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import FontAwesomeIcons from "../../../../../styles/FontAwesomeIcons";
import {getRole} from "../../../../auth/operations";
import {deleteTimeSheet, getAllTimeSheets} from "../../../../store/actions/jobAction";
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
                <TableCell>{timesheet.work_hours}</TableCell>

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
                        <i onClick={() => editTimesheetHandler(timesheet)} className={`${FontAwesomeIcons.pencil} ${classes}__timesheet-wrapper__table-actions__edit`}/>
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

      <EditCustomModal handleClose={modalClose} open={openModal}>
        <TimesheetRecordContents classes={classes} handleClose={modalClose} timesheetData={timesheetData} jobContractId={jobContractId} mode="edit" setToast={setToast} />
      </EditCustomModal>
    </>
  );
};

export default TimesheetTable;
