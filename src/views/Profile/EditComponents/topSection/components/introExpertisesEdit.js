import Select from "react-select";
import {connect} from "react-redux";

import {TextField} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import CustomButton from "../../../../../lib/profile/customButtons";
import {expertisesText, introText} from "../../../../../store/actions/topSectionActions";
import {TopSectionEditStyle} from "../style";
import ErrorMessage from "../../../../../lib/errorMessage";
import {useFormik} from "formik";
import {updateIntroAndExpertises} from "../../../TopSection/operations";
import {useState} from "react";
import CustomSnackbar from "../../../../../lib/customSnackbar";

const expertisesData = [
  {value: 1, label: "Developer"},
  {value: 2, label: "Programmer"},
  {value: 3, label: "Designer"},
  {value: 4, label: "Professional Coder"},
  {value: 5, label: "Rails Developer"}
]

const IntroExpertisesEdit = (props) => {
  const {
    fullName,
    handleClose,
    setIntro,
    setExpertises,
    profileID,
    intro,
    expertises,
    setToast
  } = props;
  const theme = useTheme();
  const classes = TopSectionEditStyle(theme);

  const filteredExpertise = (selectedExpertises) => {
    if (selectedExpertises !== undefined) {
      return expertisesData.filter((ex1) => {
        return !selectedExpertises.find((ex2) => {
          return ex1.label === ex2.label
        })
      })
    }
  }

  const selectChangeHandler = (expertises) => {
    formHandler.setValues({
      intro: formHandler.values.intro,
      expertises: expertises
    });
  }

  const formHandler = useFormik({
    initialValues: {
      intro: intro,
      expertises: expertises.map((element) => (
        {value: element, label: element}))
    },
    enableReinitialize: true,
    validate: values => {
      let errors = {};
      if (values.expertises.length === 0) {
        errors.expertises = "Select at least one expertise";
      }
      if (values.intro.length > 15) {
        errors.intro = "Intro must be within 15 characters"
      }
      if (values.intro.length === 0) {
        errors.intro = "Intro can't be blank"
      }
      return errors;
    },
    onSubmit: values => {
      const expertiseLabels = values.expertises.map(
        expertise => expertise.label
      )
      updateIntroAndExpertises({
        intro: values.intro,
        setIntro: setIntro,
        expertises: `{${expertiseLabels}}`,
        setExpertises: setExpertises,
        profileID: profileID
      });
      setToast({show: true, severity: "success", text: "Successfully updated the intro and expertises"});
      handleClose();
    }
  });

  return (
    <>
      <div className={`${classes.topSectionEditWrapper}__introWrapper`}>
        <div className={`${classes.topSectionEditWrapper}__introWrapper-child`}>
          <TextField
            size="small"
            variant="outlined"
            name={"intro"}
            value={formHandler.values.intro}
            onChange={formHandler.handleChange}
          />
          <span className={`${classes.topSectionEditWrapper}__introWrapper__fullName`}>{fullName}</span>
        </div>
        {formHandler.errors.intro && <ErrorMessage error={formHandler.errors.intro}/>}
      </div>

      <div className={`${classes.topSectionEditWrapper}__expertisesWrapper`}>
        <div>
          <h4 className={`${classes.topSectionEditWrapper}__expertisesWrapper__label`}>Select your expertises</h4>
          <Select
            isMulti
            options={filteredExpertise(formHandler.values.expertises)}
            defaultValue={formHandler.values.expertises}
            onChange={selectChangeHandler}
            className={`${classes.topSectionEditWrapper}__expertisesWrapper__selectDropdown`}
          />
          {formHandler.errors.expertises && <ErrorMessage error={formHandler.errors.expertises}/>}
        </div>
        <CustomButton handler={formHandler.handleSubmit} mode={handleClose}/>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    expertises: state.topSection.expertises,
    intro: state.topSection.intro
  }
}

const mapDispatchToProps = (dispatch) => ({
  setIntro: (editValue) => dispatch(introText(editValue)),
  setExpertises: (editValue) => dispatch(expertisesText(editValue)),
})

export default connect(mapStateToProps, mapDispatchToProps)(IntroExpertisesEdit);
