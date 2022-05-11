import {useState} from 'react';
import {connect, useDispatch} from "react-redux";

import {IconButton} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from "@material-ui/icons/Close";

import {ModalStyle} from "./style";
import SignInForm from "../../auth/components/SignInForm";
import SignUpForm from "../../auth/components/SignUpForm";
import {modalType} from "../../store/actions/authAction";

const CustomModal = (props) => {
  const dispatch = useDispatch()
  const theme = useTheme();

  const modalWrapper = ModalStyle(theme).modalStyle;
  const [visible, setVisible] = useState("")
  setTimeout(() => {
    setVisible(props.modalType ? `${modalWrapper}__modal-content--visible` : "")
  }, 100);
  const handleClose = () => {
    dispatch(modalType(''))
  }
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={Boolean(props.modalType)}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={Boolean(props.modalType)}>
        <div className={`${modalWrapper}__body`}>
          <div className={`${modalWrapper}__dialog`}>
            <div className={`${modalWrapper}__modal-content ${visible}`}>
              <IconButton className={`${modalWrapper}__modal-content__close-icon`}
                          onClick={handleClose}>
                <CloseIcon/>
              </IconButton>
              {props.modalType === "SignIn" && <SignInForm/>}
              {props.modalType === "SignUp" && <SignUpForm/>}
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}

const mapStateToProps = (state) => {
  return {
    modalType: state.auth.modalType
  }
}

export default connect(mapStateToProps)(CustomModal);
