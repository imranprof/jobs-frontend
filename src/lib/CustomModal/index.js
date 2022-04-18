import React, {useContext, useState} from 'react';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {IconButton} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import ThemeContextProvider from "../../contexts/themeContext";
import {ModalStyle} from "./style";
import {InitialPropContext} from "../../contexts/InitialPropContext";
import SignInForm from "../../auth/components/SignInForm";
import SignUpForm from "../../auth/components/SignUpForm";

export default function CustomModal() {
  const {modalType, setModalType} = useContext(InitialPropContext);
  const customTheme = useContext(ThemeContextProvider);
  const modalWrapper = ModalStyle(customTheme).modalStyle;
  const [visible, setVisible] = useState("")
  setTimeout(() => {
    setVisible(modalType ? `${modalWrapper}__modal-content--visible` : "")
  }, 100);
  const handleClose = () => {
    setModalType('');
  }
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={Boolean(modalType)}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={Boolean(modalType)}>
        <div className={`${modalWrapper}__body`}>
          <div className={`${modalWrapper}__dialog`}>
            <div className={`${modalWrapper}__modal-content ${visible}`}>
              <IconButton className={`${modalWrapper}__modal-content__close-icon`}
                          onClick={handleClose}>
                <CloseIcon/>
              </IconButton>
              {modalType === "SignIn" && <SignInForm/>}
              {modalType === "SignUp" && <SignUpForm/>}
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}
