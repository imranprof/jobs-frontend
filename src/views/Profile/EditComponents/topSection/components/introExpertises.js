import {useState} from 'react';
import Select from "react-select";
import {connect} from "react-redux";

import {useTheme} from "@material-ui/core/styles";

import CustomButton from "../../../../../lib/customButtons";
import {expertisesText} from "../../../../../store/actions/editProfileActions";
import {TopSectionEditStyle} from "../style";

const expertisesData = [
  {value: 1, label: "Developer"},
  {value: 2, label: "Programmer"},
  {value: 3, label: "Designer"},
  {value: 4, label: "Professional Coder"},
  {value: 5, label: "Rails Developer"}
]

const IntroExpertises = (props) => {
  const {fullName, inputIntroChangeHandler, inputValue, introEditHandler, setExpertisesEditValue, handleClose} = props;
  const theme = useTheme();
  const classes = TopSectionEditStyle(theme);

  const selectedExpertises = []
  props.expertises.map((element) => {
    selectedExpertises.push({label: element, value: element})
  });

  const filteredExpertise = (selectedExpertises) => {
    if (selectedExpertises !== undefined) {
      let tempExpertises = expertisesData
      return tempExpertises.filter((ex1) => {
        return !selectedExpertises.find((ex2) => {
          return ex1.label === ex2.label
        })
      })
    }
  }

  const [filteredExpertiseList, setFilteredExpertiseList] = useState(filteredExpertise(selectedExpertises))
  const selectChangeHandler = (elements) => {
    setExpertisesEditValue({
      expertises: Array.isArray(elements) ? elements.map(obj => obj.label) : []
    })
    setFilteredExpertiseList(filteredExpertise(elements))
  }

  return (
    <>
      <div className={`${classes.topSectionEditWrapper}__introWrapper`}>
        <input
          value={inputValue}
          onChange={inputIntroChangeHandler}
          className={`${classes.topSectionEditWrapper}__introWrapper__input`}
        />
        <span className={`${classes.topSectionEditWrapper}__introWrapper__fullName`}>{fullName}</span>
      </div>

      <div className={`${classes.topSectionEditWrapper}__expertisesWrapper`}>
        <div>
          <h4>Select your expertises</h4>
          <Select
            isMulti
            options={filteredExpertiseList}
            defaultValue={selectedExpertises}
            onChange={selectChangeHandler}
            className={`${classes.topSectionEditWrapper}__expertisesWrapper__selectDropdown`}
          />
        </div>
        <CustomButton handler={introEditHandler} mode={handleClose}/>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    expertises: state.editProfile.expertises
  }
}

const mapDispatchToProps = (dispatch) => ({
  setExpertises: (editValue) => dispatch(expertisesText(editValue)),
})

export default connect(mapStateToProps, mapDispatchToProps)(IntroExpertises);
