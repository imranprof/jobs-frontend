import {useFormik} from "formik";
import {useDispatch} from "react-redux";
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
  const {title, description, skills, location} = job
  const dispatch = useDispatch()

  const jobSkillsData = [
    {value: 1, label: "Ruby"},
    {value: 2, label: "Python"},
    {value: 3, label: "Java"},
    {value: 4, label: "Javascript"},
    {value: 5, label: "Golang"}
  ]

  const filteredSkills = (selectedSkills) => {
    if (selectedSkills !== undefined) {
      return jobSkillsData.filter((ex1) => {
        return !selectedSkills.find((ex2) => {
          return ex1.label === ex2.label
        })
      })
    }
  }

  const initialJobValue = {
    title: title,
    description: description,
    skills: skills.map((skill) => (
      {value: skill, label: skill})),
    location: location
  }

  const jobUpdate = ({job, title, description, skills, location}) => {
    const oldJob = {...job};
    const skillsLabel = skills.map(
      skill => skill.label
    );
    job.title = title;
    job.description = description;
    job.skills = skillsLabel
    job.location = location;
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
              className={`${classes.jobEditWrapper}__content-wrapper__selectDropdown`}
            />
            {formik.errors.skills && <ErrorMessage error={formik.errors.skills}/>}
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
