import React, {useState} from "react";
import {useFormik} from "formik";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import {useDispatch} from "react-redux";

import {Button, Icon, IconButton, TextField} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";

import ModalTitle from "../../../lib/profile/modalTitle";
import ErrorMessage from "../../../lib/errorMessage";
import {JobPostFormStyle} from "./style";
import FontAwesomeIcons from "../../../../styles/FontAwesomeIcons";
import {addJobAction, getIndividualJobs} from "../../../store/actions/jobAction";
import CustomSnackbar from "../../../lib/customSnackbar";
import JobShow from "./JobShow";

const JobPostForm = (props) => {
  const theme = useTheme();
  const classes = JobPostFormStyle(theme);
  const dispatch = useDispatch()
  const [toast, setToast] = useState({show: false, severity: "", text: ""});
  const [mode, setMode] = useState(false);
  const [jobData, setJobData] = useState({});
  const {handleClose} = props
  const [submitType, setSubmitType] = useState('Published')

  const jobSkillsData = [
    {value: 1, label: "Ruby"},
    {value: 2, label: "Python"},
    {value: 3, label: "Java"},
    {value: 4, label: "Javascript"},
    {value: 5, label: "Golang"}
  ]

  const payTypeData = [
    {value: 1, label: "Pay by the hour"},
    {value: 2, label: "Pay a fixed price"}
  ]

  const initialJobPostValues = {
    title: '',
    description: '',
    skills: [],
    payType: '',
    location: '',
    minRate: '',
    maxRate: '',
  }

  const jobPostHandler = async (values) => {
    const {title, description, location, payType, minRate, maxRate} = values
    let skills = values.skills.map(
      skill => skill.label
    )

    const budget = payType.label === 'Pay by the hour' ? [minRate, maxRate] : [minRate]

    const response = await dispatch(addJobAction({
      title: title.trim(),
      description: description.trim(),
      location: location.trim(),
      skills: skills,
      payType: payType.label,
      budget: budget,
      status: submitType
    }))
    if (response && response.status === 201) {
      setJobData(response.data.job)
      dispatch(getIndividualJobs())
      formik.resetForm()
      setToast({show: true, severity: "success", text: "Posted new job successfully!"});
      setMode(true);
    }
  }

  const jobPostValidation = values => {
    let errors = {}
    if (!values.title) {
      errors.title = "Title can't be empty"
    }
    if (!values.description) {
      errors.description = "Description can't be empty"
    }
    if (values.skills.length === 0) {
      errors.skills = "Please select a skill!"
    }
    if (values.payType === "") {
      errors.payType = "Please select a pay type!"
    }
    if (values.payType.label === 'Pay by the hour') {
      if (values.minRate === "") {
        errors.minRate = "Budget can't be empty"
      }
      if (values.maxRate === "") {
        errors.maxRate = "Budget can't be empty"
      }
    }
    if (values.payType.label === 'Pay a fixed price') {
      if (values.minRate === "") {
        errors.minRate = "Budget can't be empty"
      }
    }
    if (!values.location) {
      errors.location = "Location can't be empty"
    }
    return errors;
  }

  const formik = useFormik({
    initialValues: initialJobPostValues,
    onSubmit: jobPostHandler,
    validateOnChange: false,
    validate: jobPostValidation
  })

  return (
    <>
      {
        mode ? (
          <JobShow data={jobData} handleClose={handleClose} />
        ):(
          <div className={classes.jobPostFormWrapper}>
            <div className={`${classes.jobPostFormWrapper}__close-button`}>
            <span onClick={handleClose}>
              <IconButton><CloseIcon/></IconButton>
            </span>
            </div>

            <ModalTitle title="Post New Job"/>

            <div className={`${classes.jobPostFormWrapper}__contentWrapper`}>

              <div className={`${classes.jobPostFormWrapper}__contentWrapper__gap`}>
                <TextField
                  size="small"
                  required
                  fullWidth
                  variant="outlined"
                  label="Job title"
                  name="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                />
                {formik.errors.title ? <ErrorMessage error={formik.errors.title}/> : null}
              </div>

              <div className={`${classes.jobPostFormWrapper}__contentWrapper__gap`}>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={8}
                  variant="outlined"
                  label="Job description"
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                />
                {formik.errors.description ? <ErrorMessage error={formik.errors.description}/> : null}
              </div>

              <div className={`${classes.jobPostFormWrapper}__contentWrapper__gap`}>
                <CreatableSelect
                  isMulti
                  name="skills"
                  options={jobSkillsData}
                  value={formik.values.skills}
                  onChange={skills => formik.setFieldValue("skills", skills)}
                  menuPosition="fixed"
                  styles={{menuPortal: (base) => ({...base, zIndex: 2})}}
                  placeholder="Select skills"
                  className={`${classes.jobPostFormWrapper}__contentWrapper__selectDropdown`}
                />
                {formik.errors.skills && <ErrorMessage error={formik.errors.skills}/>}
              </div>

              <div className={`${classes.jobPostFormWrapper}__contentWrapper__gap`}>
                <h4>How would you like to pay?</h4>
                <Select
                  name="payType"
                  options={payTypeData}
                  value={formik.values.payType}
                  onChange={payType => formik.setFieldValue("payType", payType)}
                  placeholder="Select type"
                  menuPosition="fixed"
                  styles={{menuPortal: (base) => ({...base, zIndex: 2})}}
                />
                {formik.errors.payType && <ErrorMessage error={formik.errors.payType}/>}
              </div>

              {formik.values.payType.label === 'Pay by the hour' && (
                <>
                  <h4>Set your own hourly range *</h4>
                  <div className={`${classes.jobPostFormWrapper}__rate-wrapper`}>
                    <div className={`${classes.jobPostFormWrapper}__job-rate`}>
                      <TextField
                        type="number"
                        size="small"
                        variant="outlined"
                        label="$"
                        name="minRate"
                        value={formik.values.minRate}
                        onChange={formik.handleChange}
                        className={`${classes.jobPostFormWrapper}__job-rate__field`}
                      />
                      <span>/hr</span>
                    </div>
                    <span className={`${classes.jobPostFormWrapper}__job-rate__to`}>_</span>
                    <div className={`${classes.jobPostFormWrapper}__job-rate`}>
                      <TextField
                        type="number"
                        size="small"
                        variant="outlined"
                        label="$"
                        name="maxRate"
                        value={formik.values.maxRate}
                        onChange={formik.handleChange}
                        className={`${classes.jobPostFormWrapper}__job-rate__field`}
                      />
                      <span>/hr</span>
                    </div>
                  </div>
                  {formik.errors.maxRate && <ErrorMessage error={formik.errors.maxRate}/>}
                </>
              )}

              {formik.values.payType.label === 'Pay a fixed price' && (
                <>
                  <h4>Do you have a specific budget? *</h4>
                  <div className={`${classes.jobPostFormWrapper}__job-rate`}>
                    <TextField
                      type="number"
                      size="small"
                      variant="outlined"
                      label="$"
                      name="minRate"
                      value={formik.values.minRate}
                      onChange={formik.handleChange}
                      className={`${classes.jobPostFormWrapper}__job-rate__field`}
                    />
                  </div>
                  {formik.errors.maxRate && <ErrorMessage error={formik.errors.maxRate}/>}
                </>
              )}

              <div className={`${classes.jobPostFormWrapper}__contentWrapper__gap`}>
                <TextField
                  size="small"
                  required
                  fullWidth
                  variant="outlined"
                  label="Location"
                  name="location"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                />
                {formik.errors.location ? <ErrorMessage error={formik.errors.location}/> : null}
              </div>
            </div>

            <Button onClick={formik.handleSubmit} endIcon={<Icon className={FontAwesomeIcons.signIn}/>}
                    className={`${classes.jobPostFormWrapper}__button`}
            >
              job post
            </Button>
            <Button onClick={()=>{
              setSubmitType('Draft')
              formik.handleSubmit()
            }}  className={`${classes.jobPostFormWrapper}__button`}>Save as Draft</Button>
          </div>
        )
      }

      {toast.show &&
      <CustomSnackbar
        toast={toast}
        setToast={setToast}/>
      }
    </>
  );
};

export default JobPostForm;
