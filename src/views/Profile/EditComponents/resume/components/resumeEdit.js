import React from 'react';
import {useFormik} from "formik";
import {connect} from "react-redux";

import {TextField} from "@material-ui/core";

import CustomButtons from "../../../../../lib/customButtons";
import {resumeUpdate} from "../../../../../store/actions/resumeActions";
import {useTheme} from "@material-ui/core/styles";
import {ResumeEditStyle} from "../style";
import ErrorMessages from "../../../../../lib/errorMessages";

const ResumeEdit = (props) => {
  const theme = useTheme();
  const classes = ResumeEditStyle(theme);
  const {cardType, title, description, handleClose, cardId} = props;
  const labelType = (cardType === "education") ? "Institution" : "Company"
  const keyType = (cardType === "education") ? "institution" : "title"

  const initialResumeValues = {
    id: cardId,
    [keyType]: title,
    description: description
  }

  const resumeUpdate = values => {
    const cardIndex = props.resume[cardType].findIndex(type => type.id === values.id)
    props.resume[cardType][cardIndex][keyType] = values[keyType]
    props.resume[cardType][cardIndex].description = values.description

    props.setResume(props.resume)
    handleClose()
  }

  const resumeValidation = values => {
    let errors = {}
    if(!values[keyType]) {
      errors[keyType] = `${labelType} can't be empty`
    }
    if(!values.description) {
      errors.description = "Description can't be empty"
    }
    return errors;
  }

  const formik = useFormik({
    initialValues: initialResumeValues,
    onSubmit: resumeUpdate,
    validate: resumeValidation
  })

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
