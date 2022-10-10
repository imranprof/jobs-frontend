import React, {useState} from 'react';
import {Divider, Paper, Radio, TextField} from "@material-ui/core";
import {useFormik} from "formik";
import Icon from "@material-ui/core/Icon";
import FontAwesomeIcons from "../../../../styles/FontAwesomeIcons";
import {useTheme} from "@material-ui/styles";
import {HireFormStyle} from "./style";
import JobDetails from "./JobDetails/jobDetails";
import Confirmation from "./Confirmation";
import {useDispatch} from "react-redux";
import {hireJobSeeker} from "../../../store/actions/jobAction";

const JobSeekerHireForm = ({applicationDetails}) => {
  const theme = useTheme()
  const classes = HireFormStyle(theme);
  const [rateEditMode, setRateEditMode] = useState(false)
  const {bid_rate, related_job} = applicationDetails
  const {pay_type} = related_job
  const dispatch = useDispatch()

  const [selectedValue, setSetSelectedValue] = useState(pay_type === 'Pay a fixed price' ? 'payFixedPrice' : 'payByHour')

  const handleTypeChange = (e) => {
    setSetSelectedValue(e.target.value)
    formik.values.payTypeValue = selectedValue
  }

  const handleRateMode = () => {
    setRateEditMode(!rateEditMode)
  }

  const handleHireFormSubmit =()=> {
    const {hireRate} = formik.values
    let payType = selectedValue === 'payFixedPrice' ? 'Pay a fixed price' : 'Pay by the hour'
    dispatch(hireJobSeeker({id: applicationDetails.id, rate: hireRate, payType: payType}))
  }

  const formik = useFormik({
    initialValues: {
      payTypeValue: selectedValue,
      hireRate: bid_rate ? bid_rate : ''
    }
  })

  return (
    <>
      <Paper className={classes.hireFormWrapper}>
        <h1 className={`${classes.hireFormWrapper}__heading`}>Terms</h1>
        <Divider className={`${classes.hireFormWrapper}__divider`}/>
        <div className={`${classes.hireFormWrapper}__payment-option-rate-wrapper`}>
          <h3>Payment Option</h3>
          <div className={`${classes.hireFormWrapper}__payment-option-wrapper`}>
            <div className={`${classes.hireFormWrapper}__payment-type-box-wrapper`}>
              <div className={`${classes.hireFormWrapper}__payment-type-icon-wrapper`}>
                <Icon className={FontAwesomeIcons.clock}/>
                <h4 className={`${classes.hireFormWrapper}__pay-type-text`}>Pay By The Hour</h4>
              </div>
              <span  className={`${classes.hireFormWrapper}__radio-button-wrapper`}>
                  <Radio
                    checked={selectedValue === 'payByHour'}
                    value="payByHour"
                    onChange={handleTypeChange}
                    className={`${classes.hireFormWrapper}__radio-button`}
                  />
                </span>
            </div>

            <div className={`${classes.hireFormWrapper}__payment-type-box-wrapper`}>
              <div className={`${classes.hireFormWrapper}__payment-type-icon-wrapper`}>
                <Icon className={FontAwesomeIcons.dollar}/>
                <h4 className={`${classes.hireFormWrapper}__pay-type-text`}>Pay A Fixed Price</h4>
              </div>
              <span className={`${classes.hireFormWrapper}__radio-button-wrapper`}>
                  <Radio
                    checked={selectedValue === 'payFixedPrice'}
                    value="payFixedPrice"
                    onChange={handleTypeChange}
                    className={`${classes.hireFormWrapper}__radio-button`}
                  />
                </span>
            </div>
          </div>

          {selectedValue === "payByHour" ? (
            <h3>Pay By the Hour</h3>
          ) : (
            <h3>Pay a Fixed Price</h3>
          )}

          <div className={`${classes.hireFormWrapper}__hire-rate-wrapper`}>
            <h4 className={`${classes.hireFormWrapper}__hire-rate-title`}>Hire Rate</h4>
            {rateEditMode ? (
              <TextField
                type="number"
                size="small"
                variant="outlined"
                label="$"
                name="hireRate"
                value={formik.values.hireRate}
                onChange={formik.handleChange}
              />

            ) : (
              <div className={`${classes.hireFormWrapper}__hire-rate-button-wrapper`}>
                <h4 className={`${classes.hireFormWrapper}__hire-rate`}>$ {formik.values.hireRate}.00</h4>
                <span onClick={handleRateMode} className={`${classes.hireFormWrapper}__edit-button`}>
                  <i className={`${FontAwesomeIcons.pencil}`} />
                </span>
              </div>
            )}
          </div>

        </div>
      </Paper>
      <JobDetails details={related_job}/>
      <Confirmation applicationDetails={applicationDetails} handleHireFormSubmit={handleHireFormSubmit}/>
    </>
  );
};

export default JobSeekerHireForm;