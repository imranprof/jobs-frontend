import React, {useState} from 'react';
import {Divider, Paper, Radio, TextField} from "@material-ui/core";
import EditButton from "../../../lib/editButton";
import {useFormik} from "formik";
import Icon from "@material-ui/core/Icon";
import FontAwesomeIcons from "../../../../styles/FontAwesomeIcons";

const JobSeekerHireForm = () => {
  const [payTypeEditMode, setPayTypeEditMode] = useState(true)
  const [rateEditMode, setRateEditMode] = useState(true)
  const [selectedValue, setSetSelectedValue] = useState('payByHour')

  const handleTypeChange = (e) => {
    setSetSelectedValue(e.target.value)
    formik.values.payTypeValue = selectedValue
  }
  // const handlePayTypeMode = () => {
  //   setPayTypeEditMode(!payTypeEditMode)
  // }
  // const handleRateMode = () => {
  //   setRateEditMode(!rateEditMode)
  // }

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
          <div style={{width: "50%", display: "flex"}}>
            <div style={{display: "flex", border: "1px solid", padding: 5, borderRadius: 10, marginRight: 10}}>
              <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Icon className={FontAwesomeIcons.clock}/>
                <h4>Pay By The Hour</h4>
              </div>
              <span>
                  <Radio
                    checked={selectedValue === 'payByHour'}
                    color="primary"
                    value="payByHour"
                    onChange={handleTypeChange}
                  />
                </span>
            </div>

            <div style={{display: "flex", border: "1px solid", padding: 5, borderRadius: 10}}>
              <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Icon className={FontAwesomeIcons.dollar}/>
                <h4>Pay A Fixed Price</h4>
              </div>
              <span>
                  <Radio
                    checked={selectedValue === 'payFixedPrice'}
                    color="primary"
                    value="payFixedPrice"
                    onChange={handleTypeChange}
                  />
                </span>
            </div>
          </div>

          {selectedValue === "payByHour" ? (
            <h3>Pay By the Hour</h3>
          ) : (
            <h3>Pay a Fixed Price</h3>
          )}

          <div style={{paddingBottom: 20}}>
            <h4>Hire Rate</h4>
            <h4>${formik.values.hireRate}</h4>
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

        </div>
      </Paper>
    </>
  );
};

export default JobSeekerHireForm;