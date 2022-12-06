import {useEffect, useState} from "react";
import {useDispatch, connect} from "react-redux";
import moment from "moment";

import {Select, MenuItem} from "@material-ui/core";
import Button from "@material-ui/core/Button";

import TimesheetRecordContents from "./timesheetRecordContents";
import EditCustomModal from "../../../../lib/profile/editCustomModal";
import CustomSnackbar from "../../../../lib/customSnackbar";
import {getAllTimeSheets} from "../../../../store/actions/jobAction";
import TimesheetTable from "./timesheetTable";
import {getRole} from "../../../../auth/operations";

const ContractTimesheet = (props) => {
  const dispatch = useDispatch()
  const {classes, jobContractId, getAllTimeSheetList} = props
  const [openModal, setOpenModal] = useState(false);
  const [toast, setToast] = useState({show: false, severity: "", text: ""})
  const [select, setSelect] = useState('all');

  useEffect(() => {
    jobContractId && dispatch(getAllTimeSheets(jobContractId))
  }, [jobContractId])

  const modalOpen = () => {
    setOpenModal(true);
  };

  const modalClose = () => {
    setOpenModal(false);
  };

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  const findCurrentWeekData = () => {
    return getAllTimeSheetList.filter(data =>
      moment(data.start_date, 'DD-MM-YYYY').week() === moment().week()
    )
  }

  const dataList = select === 'week' ? findCurrentWeekData() : getAllTimeSheetList

  return (
    <div>
      <div className={`${classes}__timesheet-wrapper`}>
        <div className={`${classes}__timesheet-wrapper__left`}>
          <h2 className={`${classes}__timesheet-title`}>Work diary</h2>
          {getRole() === 'employee' && (
            <Select
              value={select}
              onChange={handleChange}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="week">Current week</MenuItem>
            </Select>
          )}
        </div>

        {getRole() === 'employee' ? (
          <Button size="small" variant="outlined" onClick={modalOpen} className={`${classes}__create-record`}>
            Create record
          </Button>
        ) : (
          <div className={`${classes}__btn-wrapper`}>
            <Button size="small" variant="contained" className={`${classes}__btn-wrapper__approve`}>
              Approve
            </Button>
            <Button size="small" variant="outlined" color="secondary">
              Reject
            </Button>
          </div>
        )}
      </div>

      <TimesheetTable
        timeSheetList={dataList}
        jobContractId={jobContractId}
        classes={`${classes}`}
        setToast={setToast}
      />

      <EditCustomModal handleClose={modalClose} open={openModal}>
        <TimesheetRecordContents classes={classes} handleClose={modalClose} jobContractId={jobContractId}
                                 setToast={setToast} mode=""/>
      </EditCustomModal>

      {toast.show &&
      <CustomSnackbar
        toast={toast}
        setToast={setToast}/>
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    getAllTimeSheetList: state.allJobs.allTimeSheets
  }
}

export default connect(mapStateToProps)(ContractTimesheet);
