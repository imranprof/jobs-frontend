import {useState} from 'react';
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import moment from "moment";
import 'date-fns';
import DateFnsUtils from "@date-io/date-fns";

import {MenuItem, TextField} from "@material-ui/core";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";

import ModalTitle from "../../../../lib/profile/modalTitle";
import CustomButtons from "../../../../lib/profile/customButtons";
import {getAllTimeSheets, timesheetCreateDetails, updateTimeSheet} from "../../../../store/actions/jobAction";

const TimesheetRecordContents = (props) => {
  const dispatch = useDispatch()
  const {classes, handleClose, jobContractId, setToast, mode, timesheetData} = props
  const [startDate, setStartDate] = useState(mode === 'edit' ? moment(timesheetData.start_date, "DD-MM-YYYY") : new Date());
  const [endDate, setEndDate] = useState(mode === 'edit' ? moment(timesheetData.end_date, "DD-MM-YYYY") : new Date());

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const formik = useFormik({
    initialValues: {
      hours: mode === 'edit' ? timesheetData.work_hours : 0,
      minutes: mode === 'edit' ? timesheetData.work_minutes : 0,
      description: mode === 'edit' ? timesheetData.work_description : ''
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

  const timesheetRecordHandler = async () => {
    if (mode === 'edit') {
      timesheetData.id && await dispatch(updateTimeSheet({id: timesheetData.id, start_date: formatDate(startDate), end_date: formatDate(endDate), work_description: formik.values.description, work_hours: formik.values.hours, work_minutes: formik.values.minutes}))
      jobContractId && await dispatch(getAllTimeSheets(jobContractId))
      setToast({show: true, severity: "success", text: "Work record updated Successfully"});
      handleClose()
    } else {
      jobContractId && await dispatch(timesheetCreateDetails(jobContractId, formatDate(startDate), formatDate(endDate), formik.values.hours, formik.values.minutes, formik.values.description))
      jobContractId && await dispatch(getAllTimeSheets(jobContractId))
      setToast({show: true, severity: "success", text: "Work record created Successfully"});
      handleClose()
    }
  }

  const generateMinuteList = (range) => {
    const minutes = []
    for (let i = 0; i <= range; i++) {
      minutes.push(i)
    }
    return minutes;
  }

  return (
    <div>
      <ModalTitle title={`${mode === 'edit' ? 'Edit' : 'Add new'} record`} />

      <div className={`${classes}__picker`}>
        <div className={`${classes}__picker-wrapper`}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
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
              format="dd/MM/yyyy"
              margin="normal"
              label="End date"
              value={endDate}
              onChange={handleEndDateChange}
            />
          </MuiPickersUtilsProvider>
        </div>

        <div className={`${classes}__picker-wrapper`}>
          <TextField size="medium" label="Hours" type="number" name="hours" value={formik.values.hours} onChange={formik.handleChange} />
        </div>

        <div className={`${classes}__picker-wrapper`}>
          <TextField
            fullWidth
            select
            size="medium"
            label="Minutes"
            name="minutes"
            value={formik.values.minutes}
            onChange={formik.handleChange}
          >
            {generateMinuteList(59).map((minutes, index) => (
              <MenuItem value={minutes} key={index}>{minutes}</MenuItem>
            ))}
          </TextField>
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

      <CustomButtons handler={timesheetRecordHandler} mode={handleClose} actionText={mode === 'edit' ? 'Update' : "Add"} />
    </div>
  );
};

export default TimesheetRecordContents;
