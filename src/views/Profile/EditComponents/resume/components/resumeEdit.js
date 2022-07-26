import {useFormik} from "formik";
import {connect, useDispatch} from "react-redux";
import Moment from "moment";

import {MenuItem, TextField} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import CustomButtons from "../../../../../lib/profile/customButtons";
import {ResumeEditStyle} from "../style";
import ErrorMessage from "../../../../../lib/errorMessage";
import {resumeUpdateAction, addResumeItemAction} from "../../../../../store/actions/resumeActions";

const ResumeEdit = (props) => {
  const theme = useTheme();
  const classes = ResumeEditStyle(theme);
  const {cardType, title, description, handleClose, cardContent = {}, addMode} = props;
  const labelType = (cardType === "educations") ? "Institution" : "Company"
  const keyType = (cardType === "educations") ? "institution" : "company_name"
  const {start_date, end_date} = cardContent
  const [startMonth, startYear] = `${Moment(start_date).format('MMM YYYY')}`.split(" ")
  const [endMonth, endYear] = `${Moment(end_date).format('MMM YYYY')}`.split(" ")
  const dispatch = useDispatch();
  const initialResumeValues = (() => {
    if (addMode) {
      return {
        [keyType]: "",
        description: "",
        startMonth: "",
        startYear: "",
        endMonth: "",
        endYear: "",
      }
    } else {
      return {
        id: cardContent.id,
        [keyType]: title,
        description: description,
        startMonth: startMonth,
        startYear: startYear,
        endMonth: endMonth,
        endYear: endYear,
      }
    }
  })();

  const resumeHandler = values => {
    if (addMode) {
      dispatch(addResumeItemAction({
        resumeItem: values,
        cardType: cardType
      }));
      props.setToast({show: true, severity: "success", text: `Successfully added the ${cardType}`});
    } else {
      dispatch(resumeUpdateAction({
        resumeItem: values,
        cardType: cardType
      }));
      props.setToast({show: true, severity: "success", text: `Successfully updated the ${cardType}`})
    }
    handleClose()
  }

  const resumeValidation = values => {
    let errors = {}
    if (!values[keyType]) {
      errors[keyType] = `${labelType} can't be empty`
    } else if (values[keyType].length > 100) {
      errors[keyType] = `${labelType} must have within 100 characters`
    }

    if (!values.description) {
      errors.description = "Description can't be empty"
    } else if (values.description.length > 500) {
      errors.description = "Description must have within 500 characters"
    }
    return errors;
  }

  const formik = useFormik({
    initialValues: initialResumeValues,
    onSubmit: resumeHandler,
    validate: resumeValidation
  })

  const monthsName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const yearsGenerator = (startYear) => {
    let currentYear = new Date().getFullYear(), years = [];
    while (startYear <= currentYear) {
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
          {formik.errors[keyType] ? <ErrorMessage error={formik.errors[keyType]}/> : null}
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
          {formik.errors.description ? <ErrorMessage error={formik.errors.description}/> : null}
        </div>

      </div>
      <CustomButtons handler={formik.handleSubmit} mode={handleClose} actionText={addMode ? "Add" : "Save"}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    resume: state.editResume.resume
  }
}

export default connect(mapStateToProps)(ResumeEdit);
