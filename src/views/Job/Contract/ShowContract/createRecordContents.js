import {useState} from 'react';
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import 'date-fns';
import DateFnsUtils from "@date-io/date-fns";

import {TextField} from "@material-ui/core";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";

import ModalTitle from "../../../../lib/profile/modalTitle";
import CustomButtons from "../../../../lib/profile/customButtons";
import {timesheetCreateDetails} from "../../../../store/actions/jobAction";

const CreateRecordContents = (props) => {
  const dispatch = useDispatch()
  const {classes, handleClose, jobContractId, setToast} = props
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const formik = useFormik({
    initialValues: {
      hours: 0,
      description: ''
    }
  })

  const formatDate = (date) => {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }

    return [year, month, day].join('-');
  }

  const createRecordHandler = () => {
    jobContractId && dispatch(timesheetCreateDetails(jobContractId, formatDate(startDate), formatDate(endDate), formik.values.hours, formik.values.description))
    setToast({show: true, severity: "success", text: "Work record created Successfully"});
    handleClose()
  }

  return (
    <div>
      <ModalTitle title="Add new record" />

      <div className={`${classes}__picker`}>
        <div className={`${classes}__picker-wrapper`}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              label="Start date"
              value={startDate}
              onChange={handleStartDateChange}
            />
          </MuiPickersUtilsProvider>
        </div>
        <div className={`${classes}__picker-wrapper`}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              label="End date"
              value={endDate}
              onChange={handleEndDateChange}
            />
          </MuiPickersUtilsProvider>
        </div>

        <div className={`${classes}__picker-wrapper`}>
          <TextField size="small" label="Hours" type="number" name="hours" value={formik.values.hours} onChange={formik.handleChange} />
        </div>
      </div>

      <div>
        <TextField
          multiline
          fullWidth
          variant="outlined"
          rows={3}
          name="description"
          label="Work description"
          value={formik.values.description}
          onChange={formik.handleChange}
        />
      </div>

      <CustomButtons handler={createRecordHandler} mode={handleClose} actionText="Add" />
    </div>
  );
};

export default CreateRecordContents;
