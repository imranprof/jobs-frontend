import {useFormik} from "formik";
import CreatableSelect from "react-select/creatable";
import {connect, useDispatch} from "react-redux";

import {Button, Icon, TextField} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import ModalTitle from "../../../lib/profile/modalTitle";
import ErrorMessage from "../../../lib/errorMessage";
import {JobPostFormStyle} from "./style";
import FontAwesomeIcons from "../../../../styles/FontAwesomeIcons";
import {addJobAction} from "../../../store/actions/jobAction";
import CustomSnackbar from "../../../lib/customSnackbar";
import React, {useState} from "react";

const JobPostForm = (props) => {
  const theme = useTheme();
  const classes = JobPostFormStyle(theme);
  const dispatch = useDispatch()
  const [toast,setToast] = useState({show: false, severity: "", text: ""});

  const jobSkillsData = [
    {value: 1, label: "Ruby"},
    {value: 2, label: "Python"},
    {value: 3, label: "Java"},
    {value: 4, label: "Javascript"},
    {value: 5, label: "Golang"}
  ]

  const initialJobPostValues = {
    title: '',
    description: '',
    skills: [],
    location: ''
  }

  const jobPostHandler = values => {
    const {title, description, location} = values
    let skills = values.skills.map(
      skill => skill.label
    )
    dispatch(addJobAction({title: title, description: description, location: location, skills: skills}))
    setToast({show: true, severity: "success", text: "Job Created successfully!"});
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
      <div className={classes.jobPostFormWrapper}>
        <ModalTitle title="Post New Job"/>

        <div className={`${classes.jobPostFormWrapper}__contentWrapper`}>

          <div className={`${classes.jobPostFormWrapper}__contentWrapper__gap`}>
            <TextField
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
            <TextField
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

        <Button fullWidth onClick={formik.handleSubmit} endIcon={<Icon className={FontAwesomeIcons.signIn}/>}>
          post
        </Button>
      </div>
      {toast.show &&
      <CustomSnackbar
        toast={toast}
        setToast={setToast}/>
      }
    </>
  );
};

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(JobPostForm);
