import React, {useContext, useState} from "react";
import Select from "react-select";

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import ThemeContextProvider from "../../../contexts/themeContext";
import {MuiCustomModalStyle} from "./style";
import CustomButton from "../../customButtons";

const expertisesData = [
  {value: 1, label: "Developer"},
  {value: 2, label: "Programmer"},
  {value: 3, label: "Designer"},
  {value: 4, label: "Professional Coder"},
  {value: 5, label: "Rails Developer"}
]

const MuiCustomModal = ({handleClose, open, fullName, inputIntroChangeHandler, inputValue, introEditHandler}) => {
  const customTheme = useContext(ThemeContextProvider);
  const classes = MuiCustomModalStyle(customTheme);
  const [values, setValues] = useState()

  const selectHandler = (e) => {
    setValues(Array.isArray(e) ? e.map(x => x.label) : [])
  }
  console.log(values)

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
                <Select isMulti options={expertisesData} onChange={selectHandler} className={classes.multiSelectDropdown} />
              </div>
              <CustomButton handler={introEditHandler} mode={handleClose} />
            </div>

          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default MuiCustomModal;
