import {useState} from "react";
import {connect} from "react-redux";
import Select from "react-select";

import {useTheme} from "@material-ui/core/styles";
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';

import {MuiCustomModalStyle} from "./style";
import CustomButton from "../../customButtons";
import {expertisesText} from "../../../store/actions/editProfileActions";

const expertisesData = [
  {value: 1, label: "Developer"},
  {value: 2, label: "Programmer"},
  {value: 3, label: "Designer"},
  {value: 4, label: "Professional Coder"},
  {value: 5, label: "Rails Developer"}
]

const MuiCustomModal = (props) => {
  const {
    handleClose,
    open,
    fullName,
    inputIntroChangeHandler,
    inputValue,
    introEditHandler,
    setExpertisesEditValue
  } = props;
  const theme = useTheme();
  const classes = MuiCustomModalStyle(theme);

  const selectedExpertises = []
  props.expertises.map((element) => {
    selectedExpertises.push({label: element, value: element})
  });

  const filteredExpertise = (selectedExpertises) => {
    if (selectedExpertises !== undefined) {
      let tempExpertises = expertisesData
      return tempExpertises.filter((el) => {
        return !selectedExpertises.find((f) => {
          return f.label === el.label
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
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.introWrapper}>
              <input
                value={inputValue}
                onChange={inputIntroChangeHandler}
                className={classes.modalInput}
              />
              <span className={classes.fullNameText}>{fullName}</span>
            </div>

            <div className={classes.expertisesWrapper}>
              <div>
                <h4>Select your expertises</h4>
                <Select
                  isMulti
                  options={filteredExpertiseList}
                  defaultValue={selectedExpertises}
                  onChange={selectChangeHandler}
                  className={classes.multiSelectDropdown}
                />
              </div>
              <CustomButton handler={introEditHandler} mode={handleClose}/>
            </div>

          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    expertises: state.editProfile.expertises
  }
}

const mapDispatchToProps = (dispatch) => ({
  setExpertises: (editValue) => dispatch(expertisesText(editValue)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MuiCustomModal);
