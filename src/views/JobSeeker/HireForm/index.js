import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import {useFormik} from "formik";

import {Divider, NoSsr, Paper, Radio, TextField} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import {useTheme} from "@material-ui/styles";

import FontAwesomeIcons from "../../../../styles/FontAwesomeIcons";
import {HireFormStyle} from "./style";
import JobDetails from "./JobDetails/jobDetails";
import Confirmation from "./Confirmation";
import {hireJobSeeker} from "../../../store/actions/jobAction";
import Hired from "./Hired";
import JobSeekerDetails from "./JobSeekerDetails/JobSeekerDetails";

const JobSeekerHireForm = ({applicationDetails}) => {
  const theme = useTheme()
  const classes = HireFormStyle(theme);
  const [rateEditMode, setRateEditMode] = useState(false)
  const {bid_rate, related_job, hire, applicant_details} = applicationDetails
  const {pay_type} = related_job
  const [hired, setHired] = useState(!!hire)
  const dispatch = useDispatch()

  const [selectedValue, setSetSelectedValue] = useState(pay_type === 'Pay a fixed price' ? 'payFixedPrice' : 'payByHour')

  const handleTypeChange = (e) => {
    setSetSelectedValue(e.target.value)
    formik.values.payTypeValue = selectedValue
  }

  const handleRateMode = () => {
    setRateEditMode(!rateEditMode)
  }

  const handleHireFormSubmit = () => {
    const {hireRate} = formik.values
    let payType = selectedValue === 'payFixedPrice' ? 'Pay a fixed price' : 'Pay by the hour'
    dispatch(hireJobSeeker({id: applicationDetails.id, rate: hireRate, payType: payType})).then(setHired(true))
  }

  const formik = useFormik({
    initialValues: {
      payTypeValue: selectedValue,
      hireRate: bid_rate ? bid_rate : ''
    }
  })

  return (
    <NoSsr>
      {hired ?
        <div className={`${classes.hireFormWrapper}__hired-wrapper`}><Hired applicantName={applicant_details.name}/>
        </div> :
        <>
          <JobSeekerDetails avatar={applicant_details.avatar} name={applicant_details.name}
                            email={applicant_details.email}/>
          <Paper elevation={3} className={classes.hireFormWrapper}>
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
                  <span className={`${classes.hireFormWrapper}__radio-button-wrapper`}>
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
                  <i className={`${FontAwesomeIcons.pencil}`}/>
                </span>
                  </div>
                )}
              </div>

            </div>
          </Paper>
          <JobDetails details={related_job}/>
          <Confirmation applicationDetails={applicationDetails} handleHireFormSubmit={handleHireFormSubmit}/>
        </>
      }
    </NoSsr>
  );
};

export default JobSeekerHireForm;