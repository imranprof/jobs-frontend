import {useState} from "react";

import {Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import {numberOfApplicants, jobTypesFilter} from "../../../../API/elements/jobs/filterList";
import {FiltersStyle} from "./style";

const Filters = () => {
  const theme = useTheme();
  const classes = FiltersStyle(theme);
  const [numOfApplicants, setNumOfApplicants] = useState([])
  const [jobTypes, setJobTypes] = useState([])

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

  const checkedApplicants = numOfApplicants.map(item => JSON.parse(item))

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
                control={<Checkbox size="small" checked={jobTypes.includes(type.value)} onChange={handleJobTypesChange}/>}
                label={type.label}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Box>

    </div>
  );
}

export default Filters;
