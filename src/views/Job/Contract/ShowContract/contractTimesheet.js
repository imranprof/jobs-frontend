import {useState} from "react";

import Button from "@material-ui/core/Button";

import CreateRecordContents from "./createRecordContents";
import EditCustomModal from "../../../../lib/profile/editCustomModal";
import CustomSnackbar from "../../../../lib/customSnackbar";

const ContractTimesheet = (props) => {
  const {classes, jobContractId} = props
  const [openModal, setOpenModal] = useState(false);
  const [toast, setToast] = useState({show: false, severity: "", text: ""})

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
        <Button size="small" variant="outlined" onClick={modalOpen} className={`${classes}__create-record`}>Create record</Button>
      </div>

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

export default ContractTimesheet;
