import {useEffect, useState} from "react";
import {useDispatch, connect} from "react-redux";

import Button from "@material-ui/core/Button";

import CreateRecordContents from "./createRecordContents";
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

  useEffect(() => {
    jobContractId && dispatch(getAllTimeSheets(jobContractId))
  }, [jobContractId])

  const modalOpen = () => {
    setOpenModal(true);
  };

  const modalClose = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <div className={`${classes}__timesheet-wrapper`}>
        <h2 className={`${classes}__timesheet-title`}>Work diary</h2>

        {getRole() === 'employee' && (
          <Button size="small" variant="outlined" onClick={modalOpen} className={`${classes}__create-record`}>
            Create record
          </Button>
        )}
      </div>

      <TimesheetTable timeSheetList={getAllTimeSheetList} jobContractId={jobContractId} classes={`${classes}__timesheet-wrapper`} setToast={setToast} />

      <EditCustomModal handleClose={modalClose} open={openModal}>
        <CreateRecordContents classes={classes} handleClose={modalClose} jobContractId={jobContractId} setToast={setToast} />
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
