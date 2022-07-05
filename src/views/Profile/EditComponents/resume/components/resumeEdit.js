import {useFormik} from "formik";
import {connect} from "react-redux";

import {MenuItem, TextField} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import CustomButtons from "../../../../../lib/customButtons";
import {resumeUpdate} from "../../../../../store/actions/resumeActions";
import {ResumeEditStyle} from "../style";
import ErrorMessages from "../../../../../lib/errorMessages";

const ResumeEdit = (props) => {
  const theme = useTheme();
  const classes = ResumeEditStyle(theme);
  const {cardType, title, description, handleClose, cardContent} = props;
  const labelType = (cardType === "education") ? "Institution" : "Company"
  const keyType = (cardType === "education") ? "institution" : "title"
  const {startDate, endDate} = cardContent
  const splitStartDate = startDate.split(" ")
  const splitEndDate = endDate.split(" ")

  const initialResumeValues = {
    id: cardContent.id,
    [keyType]: title,
    description: description,
    startMonth: splitStartDate[0],
    startYear: splitStartDate[1],
    endMonth: splitEndDate[0],
    endYear: splitEndDate[1],
  }

  const resumeUpdate = values => {
    const cardIndex = props.resume[cardType].findIndex(type => type.id === values.id)
    props.resume[cardType][cardIndex][keyType] = values[keyType]
    props.resume[cardType][cardIndex].description = values.description
    props.resume[cardType][cardIndex].startDate = `${values.startMonth} ${values.startYear}`
    props.resume[cardType][cardIndex].endDate = `${values.endMonth} ${values.endYear}`

    props.setResume(props.resume)
    props.setToast({show: true, severity: "success", text: `Successfully updated the ${cardType}`})
    handleClose()
  }

  const resumeValidation = values => {
    let errors = {}
    if(!values[keyType]) {
      errors[keyType] = `${labelType} can't be empty`
    } else if(values[keyType].length > 100) {
      errors[keyType] = `${labelType} must have within 100 characters`
    }

    if(!values.description) {
      errors.description = "Description can't be empty"
    } else if(values.description.length > 500) {
      errors.description = "Description must have within 500 characters"
    }
    return errors;
  }

  const formik = useFormik({
    initialValues: initialResumeValues,
    onSubmit: resumeUpdate,
    validate: resumeValidation
  })

  const monthsName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  const yearsGenerator = (startYear) => {
    let currentYear = new Date().getFullYear(), years = [];
    while ( startYear <= currentYear ) {
      years.push(currentYear--);
    }
    return years;
  }

  return (
    <div>
      <h3 className={`${classes.resumeEditWrapper}__top-label`}>Edit {cardType}</h3>

      <div className={`${classes.resumeEditWrapper}__content-wrapper`}>
        <div className={`${classes.resumeEditWrapper}__content-wrapper__gap`}>
          <TextField
            required
            fullWidth
            size="small"
            variant="outlined"
            label={labelType}
            name={keyType}
            value={formik.values[keyType]}
            onChange={formik.handleChange}
          />
          {formik.errors[keyType] ? <ErrorMessages error={formik.errors[keyType]} /> : null}
        </div>

        <div className={`${classes.resumeEditWrapper}__content-wrapper__gap`}>
          <div className={`${classes.resumeEditWrapper}__content-wrapper__fullDateWrapper`}>
            <div className={`${classes.resumeEditWrapper}__content-wrapper__mainDateWrapper`}>
              <span>Start date</span>
              <div className={`${classes.resumeEditWrapper}__content-wrapper__dateWrapper`}>
                <TextField
                  required
                  select
                  label="Month"
                  variant="outlined"
                  size="small"
                  name="startMonth"
                  defaultValue=""
                  value={formik.values.startMonth}
                  onChange={formik.handleChange}
                >
                  <MenuItem value="">
                    <em>Month</em>
                  </MenuItem>
                  {monthsName.map((month, index) => (
                    <MenuItem value={month} key={index}>{month}</MenuItem>
                  ))}
                </TextField>
                <TextField
                  required
                  select
                  label="Year"
                  variant="outlined"
                  size="small"
                  name="startYear"
                  defaultValue=""
                  value={formik.values.startYear}
                  onChange={formik.handleChange}
                >
                  <MenuItem value="">
                    <em>Year</em>
                  </MenuItem>
                  {yearsGenerator(1990).map((year, index) => (
                    <MenuItem value={year} key={index}>{year}</MenuItem>
                  ))}
                </TextField>
              </div>
            </div>

            <span className={`${classes.resumeEditWrapper}__content-wrapper__hyphen`}>_</span>

            <div className={`${classes.resumeEditWrapper}__content-wrapper__mainDateWrapper`}>
            <span>End date (or expected)</span>
            <div className={`${classes.resumeEditWrapper}__content-wrapper__dateWrapper`}>
              <TextField
                required
                select
                label="Month"
                variant="outlined"
                size="small"
                name="endMonth"
                defaultValue=""
                value={formik.values.endMonth}
                onChange={formik.handleChange}
              >
                <MenuItem value="">
                  <em>Month</em>
                </MenuItem>
                {monthsName.map((month, index) => (
                  <MenuItem value={month} key={index}>{month}</MenuItem>
                ))}
              </TextField>
              <TextField
                required
                select
                label="Year"
                variant="outlined"
                size="small"
                name="endYear"
                defaultValue=""
                value={formik.values.endYear}
                onChange={formik.handleChange}
              >
                <MenuItem value="">
                  <em>Year</em>
                </MenuItem>
                {yearsGenerator(1990).map((year, index) => (
                  <MenuItem value={year} key={index}>{year}</MenuItem>
                ))}
              </TextField>
            </div>
            </div>
          </div>
        </div>

        <div className={`${classes.resumeEditWrapper}__content-wrapper__gap`}>
          <TextField
            required
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            label="Description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
          {formik.errors.description ? <ErrorMessages error={formik.errors.description} /> : null}
        </div>

      </div>
      <CustomButtons handler={formik.handleSubmit} mode={handleClose} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    resume: state.editResume.resume
  }
}

const mapDispatchToProps = (dispatch) => ({
  setResume: (values) => dispatch(resumeUpdate(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(ResumeEdit);
