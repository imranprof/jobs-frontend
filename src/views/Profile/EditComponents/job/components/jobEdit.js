import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";

import {TextField} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import ModalTitle from "../../../../../lib/profile/modalTitle";
import EditModalDivider from "../../../../../lib/profile/editModalDivider";
import {JobEditStyle} from "../style";
import ErrorMessage from "../../../../../lib/errorMessage";
import CustomButtons from "../../../../../lib/profile/customButtons";
import {updateJobAction} from "../../../../../store/actions/jobAction";

const JobEdit = (props) => {
  const theme = useTheme();
  const classes = JobEditStyle(theme);
  const {job, handleClose, setToast} = props
  const {title, description, skills, location, pay_type, budget, status_label, status_value} = job
  const dispatch = useDispatch()

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

  const statusData = [
    {value: 0, label: "Draft"},
    {value: 1, label: "Published"},
    {value: 2, label: "Closed"},
    {value: 3, label: "Canceled"}
  ]

  const filteredSkills = (selectedSkills) => {
    if (selectedSkills !== undefined) {
      return jobSkillsData.filter((item1) => {
        return !selectedSkills.find((item2) => {
          return item1.label === item2.label
        })
      })
    }
  }

  const initialJobValue = {
    title: title,
    description: description,
    skills: skills.map((skill) => (
      {value: skill, label: skill})),
    payType: {value: 3, label: pay_type},
    status: {value: status_value, label: status_label},
    location: location,
    minRate: budget[0],
    maxRate: budget.length === 2 ? budget[1] : '',
  }

  const jobUpdate = ({job, title, description, skills, location, pay_type, minRate, maxRate, status_label, status_value}) => {
    const oldJob = {...job};
    const skillsLabel = skills.map(
      skill => skill.label
    );

    const budget = pay_type.label === 'Pay by the hour' ? [minRate, maxRate] : [minRate]

    job.title = title.trim();
    job.description = description.trim();
    job.skills = skillsLabel
    job.location = location.trim();
    job.budget = budget
    job.pay_type = pay_type.label
    job.status_label =  status_label
    job.status_value = status_value
    dispatch(updateJobAction(oldJob, job));
    setToast({show: true, severity: "success", text: "Successfully updated the job."});
    handleClose()
  }

  const jobValidation = (values) => {
    let errors = {}
    if (!values.title) {
      errors.title = "Title can't be empty"
    }
    if (!values.description) {
      errors.description = "Description can't be empty"
    }
    if (!values.skills) {
      errors.skills = "Skills can't be empty"
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
    initialValues: initialJobValue,
    onSubmit: values => {
      jobUpdate({
        job: job,
        title: values.title,
        description: values.description,
        skills: values.skills,
        location: values.location,
        pay_type: values.payType,
        minRate: values.minRate,
        maxRate: values.maxRate,
        status_label: values.status.label,
        status_value: values.status.value
      });
    },
    validate: jobValidation
  })

  return (
    <>
      <div>
        <ModalTitle title="Edit job"/>
        <EditModalDivider/>

        <div className={`${classes.jobEditWrapper}__content-wrapper`}>
          <div className={`${classes.jobEditWrapper}__content-wrapper__gap`}>
            <TextField
              fullWidth
              variant="outlined"
              required
              size="small"
              name="title"
              label="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
            />
            {formik.errors.title ? <ErrorMessage error={formik.errors.title}/> : null}
          </div>
          <div className={`${classes.jobEditWrapper}__content-wrapper__gap`}>
            <TextField
              required
              multiline={true}
              fullWidth
              rows={5}
              label="Description"
              variant="outlined"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
            {formik.errors.description ? <ErrorMessage error={formik.errors.description}/> : null}
          </div>
          <div className={`${classes.jobEditWrapper}__content-wrapper__gap`}>
            <CreatableSelect
              isMulti
              name="skills"
              options={filteredSkills(formik.values.skills)}
              defaultValue={formik.values.skills}
              onChange={skills => formik.setFieldValue("skills", skills)}
              menuPosition="fixed"
              styles={{menuPortal: (base) => ({...base, zIndex: 2})}}
              placeholder="Select skills"
            />
            {formik.errors.skills && <ErrorMessage error={formik.errors.skills}/>}
          </div>

          <div className={`${classes.jobEditWrapper}__content-wrapper__gap`}>
            <h4>How would you like to pay?</h4>
            <Select
              name="payType"
              options={payTypeData}
              defaultValue={formik.values.payType}
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
              <div className={`${classes.jobEditWrapper}__rate-wrapper`}>
                <div className={`${classes.jobEditWrapper}__job-rate`}>
                  <TextField
                    type="number"
                    size="small"
                    variant="outlined"
                    label="$"
                    name="minRate"
                    value={formik.values.minRate}
                    onChange={formik.handleChange}
                    className={`${classes.jobEditWrapper}__job-rate__field`}
                  />
                  <span>/hr</span>
                </div>
                <span className={`${classes.jobEditWrapper}__job-rate__to`}>_</span>
                <div className={`${classes.jobEditWrapper}__job-rate`}>
                  <TextField
                    type="number"
                    size="small"
                    variant="outlined"
                    label="$"
                    name="maxRate"
                    value={formik.values.maxRate}
                    onChange={formik.handleChange}
                    className={`${classes.jobEditWrapper}__job-rate__field`}
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
              <div className={`${classes.jobEditWrapper}__job-rate`}>
                <TextField
                  type="number"
                  size="small"
                  variant="outlined"
                  label="$"
                  name="minRate"
                  value={formik.values.minRate}
                  onChange={formik.handleChange}
                  className={`${classes.jobEditWrapper}__job-rate__field`}
                />
              </div>
              {formik.errors.maxRate && <ErrorMessage error={formik.errors.maxRate}/>}
            </>
          )}
          <div className={`${classes.jobEditWrapper}__content-wrapper__gap`}>
            <h4>Do you want to change current job status ? </h4>
            <div>
              <Select
                name="status"
                options={statusData}
                value = {formik.values.status}
                onChange={status => formik.setFieldValue("status", status)}
                menuPosition="fixed"
                styles={{menuPortal: (base) => ({...base, zIndex: 2})}}
              />
            </div>
          </div>


          <div className={`${classes.jobEditWrapper}__content-wrapper__gap`}>
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

        <EditModalDivider/>
        <CustomButtons handler={formik.handleSubmit} mode={handleClose}/>
      </div>
    </>
  );
};

export default JobEdit;
