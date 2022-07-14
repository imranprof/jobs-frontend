import {useState} from 'react';
import Select from "react-select";
import {connect} from "react-redux";

import {TextField} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import CustomButton from "../../../../../lib/profile/customButtons";
import {expertisesText} from "../../../../../store/actions/editProfileActions";
import {TopSectionEditStyle} from "../style";
import ErrorMessage from "../../../../../lib/errorMessage";
import {useFormik} from "formik";
import {updateIntroAndExpertises} from "../../../TopSection/operations";

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
    intro
  } = props;
  const theme = useTheme();
  const classes = TopSectionEditStyle(theme);
  const [selectedExpertises, setSelectedExpertises] = useState(props.expertises.map((element, index) => (
    {value: index, label: element}))
  );

  const filteredExpertise = (selectedExpertises) => {
    if (selectedExpertises !== undefined) {
      return expertisesData.filter((ex1) => {
        return !selectedExpertises.find((ex2) => {
          return ex1.label === ex2.label
        })
      })
    }
  }

  const selectChangeHandler = (elements) => {
    setSelectedExpertises(elements);
  }

  const formHandler = useFormik({
    initialValues: {intro: intro, expertises: selectedExpertises},
    enableReinitialize: true,
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
        {/*{introEditValue?.intro === "" && <ErrorMessage error="Intro can't be blank"/>}*/}
        {/*{introEditValue?.intro?.length > 15 && <ErrorMessage error="Intro must have within 15 characters"/>}*/}
      </div>

      <div className={`${classes.topSectionEditWrapper}__expertisesWrapper`}>
        <div>
          <h4 className={`${classes.topSectionEditWrapper}__expertisesWrapper__label`}>Select your expertises</h4>
          <Select
            isMulti
            options={filteredExpertise(selectedExpertises)}
            defaultValue={formHandler.values.expertises}
            onChange={selectChangeHandler}
            className={`${classes.topSectionEditWrapper}__expertisesWrapper__selectDropdown`}
          />
          {selectedExpertises.length === 0 && <ErrorMessage error="Select at least one expertise"/>}
        </div>
        <CustomButton handler={formHandler.handleSubmit} mode={handleClose}/>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    expertises: state.editProfile.expertises,
    intro: state.editProfile.intro
  }
}

const mapDispatchToProps = (dispatch) => ({
  setExpertises: (editValue) => dispatch(expertisesText(editValue)),
})

export default connect(mapStateToProps, mapDispatchToProps)(IntroExpertisesEdit);
