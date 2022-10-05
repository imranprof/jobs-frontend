import React, {useState} from 'react';
import {Divider, Paper, Radio, TextField} from "@material-ui/core";
import EditButton from "../../../lib/editButton";
import {useFormik} from "formik";

const JobSeekerHireForm = () => {
  const [payTypeEditMode, setPayTypeEditMode] = useState(true)
  const [rateEditMode, setRateEditMode] = useState(true)
  const [selectedValue, setSetSelectedValue] = useState('payByHour')

  const handleTypeChange = (e) => {
    setSetSelectedValue(e.target.value)
    formik.values.payTypeValue = selectedValue
  }
  const handlePayTypeMode = () => {
    setPayTypeEditMode(!payTypeEditMode)
  }
  const handleRateMode = () => {
    setRateEditMode(!rateEditMode)
  }

  const formik = useFormik({
    initialValues: {
      payTypeValue: selectedValue,
      hireRate: ''
    },
    onSubmit: values => console.log(values)
  })

  return (
    <>
      <Paper style={{marginTop: 20}}>
        <h1 style={{marginLeft: 40, paddingTop: 20}}>Terms</h1>
        <Divider style={{marginBottom: 10}}/>
        <div style={{marginLeft: 20}}>
          <h3>Payment Option</h3>
          {payTypeEditMode ? (
            <div style={{display: "flex", alignItems: "center"}}>
              <h4>Pay Type ?</h4>
              <span onClick={handlePayTypeMode}>
                <EditButton/>
              </span>
            </div>
          ) : (
            <div>
              <Radio
                checked={selectedValue === 'payByHour'}
                color="primary"
                value="payByHour"
                onChange={handleTypeChange}
              />
              <Radio
                checked={selectedValue === 'payFixedPrice'}
                color="primary"
                value="payFixedPrice"
                onChange={handleTypeChange}
              />
            </div>
          )}
          {selectedValue === "payByHour" ? (
            <h3>Pay By the Hour</h3>
          ) : (
            <h3>Pay a Fixed Price</h3>
          )}
          {rateEditMode ? (
            <div style={{display: "flex", alignItems: "center", paddingBottom: 20}}>
              <h4>$price here</h4>
              <span onClick={handleRateMode}><EditButton/></span>
            </div>
          ) : (
            <div style={{paddingBottom: 20}}>
              <TextField
                type="number"
                size="small"
                variant="outlined"
                label="$"
                name="hireRate"
                value={formik.values.hireRate}
                onChange={formik.handleChange}
              />
            </div>
          )

          }

        </div>
      </Paper>
    </>
  );
};

export default JobSeekerHireForm;