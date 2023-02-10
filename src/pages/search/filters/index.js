import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";

import {Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, TextField} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import {numberOfApplicants, jobTypesFilter, jobRatesFilter} from "../../../../API/elements/jobs/filterList";
import {FiltersStyle} from "../../../views/PagesStyle/search/filters/style";
import {getSearchJobs, getSearchValue} from "../../../store/actions/searchAction";

const Filters = () => {
  const theme = useTheme();
  const classes = FiltersStyle(theme);
  const dispatch = useDispatch()
  const [numOfApplicants, setNumOfApplicants] = useState([])
  const [jobTypes, setJobTypes] = useState([])
  const [jobRates, setJobRates] = useState([])

  useEffect(() => {
    if (jobTypes.length > 0) {
      createCheckedObject.job["pay_type"] = jobTypes
    }
    if (checkedJobRates.length > 0) {
      createCheckedObject.job["rate"] = {"range": checkedJobRates}
    }
    if (checkedApplicants.length > 0) {
      createCheckedObject.job["applicant"] = {"range": checkedApplicants}
      dispatch(getSearchJobs(createCheckedObject))
    } else {
      dispatch(getSearchJobs(createCheckedObject))
    }
  },[numOfApplicants])

  useEffect(() => {
    if (checkedApplicants.length > 0) {
      createCheckedObject.job["applicant"] = {"range": checkedApplicants}
    }
    if (checkedJobRates.length > 0) {
      createCheckedObject.job["rate"] = {"range": checkedJobRates}
    }
    if (jobTypes.length > 0) {
      createCheckedObject.job["pay_type"] = jobTypes
      dispatch(getSearchJobs(createCheckedObject))
    } else {
      dispatch(getSearchJobs(createCheckedObject))
    }
  },[jobTypes])

  useEffect(() => {
    if (checkedApplicants.length > 0) {
      createCheckedObject.job["applicant"] = {"range": checkedApplicants}
    }
    if (jobTypes.length > 0) {
      createCheckedObject.job["pay_type"] = jobTypes
    }
    if (checkedJobRates.length > 0) {
      createCheckedObject.job["rate"] = {"range": checkedJobRates}
      dispatch(getSearchJobs(createCheckedObject))
    } else {
      dispatch(getSearchJobs(createCheckedObject))
    }
  },[jobRates])

  const createCheckedObject = {
    job: {
      search_value: getSearchValue()
    }
  }

  const handleApplicantsChange = (e) => {
    const index = numOfApplicants.indexOf(e.target.value)
    if (index === -1) {
      setNumOfApplicants([...numOfApplicants, e.target.value])
    } else {
      setNumOfApplicants(numOfApplicants.filter(applicant => applicant !== e.target.value))
    }
  }

  const handleJobTypesChange = (e) => {
    const index = jobTypes.indexOf(e.target.value)
    if (index === -1) {
       setJobTypes([...jobTypes, e.target.value])
    } else {
      setJobTypes(jobTypes.filter(type => type !== e.target.value))
    }
  }

  const handleJobRatesChange = (e) => {
    const index = jobRates.indexOf(e.target.value)
    if (index === -1) {
      setJobRates([...jobRates, e.target.value])
    } else {
      setJobRates(jobRates.filter(rate => rate !== e.target.value))
    }
  }

  const checkedApplicants = numOfApplicants.map(item => JSON.parse(item))
  const checkedJobRates = jobRates.map(rate => JSON.parse(rate))

  const formik = useFormik({
    initialValues: {
      min: 0,
      max: 0
    }
  })

  let isDisabledCheckbox = formik.values.min <= 0 || formik.values.max <= 0
  const hourlyRateValues = {"min": parseInt(formik.values.min), "max": parseInt(formik.values.max)}

  const hourlyInputs = <div className={`${classes.filtersWrapper}__hourly-rate`}>
    <TextField type="number" size="small" variant="outlined" label="$" name="min" onChange={formik.handleChange} className={`${classes.filtersWrapper}__hourly-rate__input`} />/hr&nbsp;&nbsp;
    <TextField type="number" size="small" variant="outlined" label="$" name="max" onChange={formik.handleChange} className={`${classes.filtersWrapper}__hourly-rate__input`} />/hr
  </div>

  return (
    <div className={classes.filtersWrapper}>
      <h3 className={`${classes.filtersWrapper}__headline`}>Filter By</h3>

      <Box className={`${classes.filtersWrapper}__box`}>
        <FormControl>
          <FormLabel>Number of applicants</FormLabel>
          <FormGroup>
            {numberOfApplicants.map(applicant => (
              <FormControlLabel
                key={applicant.id}
                value={JSON.stringify(applicant.value)}
                control={<Checkbox size="small" checked={numOfApplicants.includes(JSON.stringify(applicant.value))} onChange={handleApplicantsChange}/>}
                label={applicant.label}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Box>

      <Box className={`${classes.filtersWrapper}__box`}>
        <FormControl>
          <FormLabel>Job type</FormLabel>
          <FormGroup>
            {jobTypesFilter.map(type => (
             <FormControlLabel
                key={type.id}
                value={type.value}
                control={<Checkbox size="small" checked={jobTypes.includes(type.value)}
                                   onChange={handleJobTypesChange}/>}
                label={type.label}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Box>

      <Box className={`${classes.filtersWrapper}__box`}>
        <FormControl>
          <FormLabel>Job Rates</FormLabel>
          <FormGroup>
            <FormControlLabel
              value={JSON.stringify(hourlyRateValues)}
              control={<Checkbox size="small" disabled={isDisabledCheckbox} checked={jobRates.includes(JSON.stringify(hourlyRateValues))} onChange={handleJobRatesChange}/>}
              label={hourlyInputs}
            />
            {jobRatesFilter.map(rate => (
              <FormControlLabel
                key={rate.id}
                value={JSON.stringify(rate.value)}
                control={<Checkbox size="small" checked={jobRates.includes(JSON.stringify(rate.value))} onChange={handleJobRatesChange}/>}
                label={rate.label}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Box>

    </div>
  );
}

export default Filters;
