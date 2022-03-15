import {useContext, useState} from 'react';
import {IconButton} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ThemeContextProvider from "../../contexts/themeContext";
import {ModalStyle} from "../modalStyle";
import SignUpForm from "./components/SignUpForm";

const SignUpModal = ({setShowSignUpModal}) => {
  const customTheme = useContext(ThemeContextProvider);
  const modalWrapper = ModalStyle(customTheme).modalStyle;
  const [visible, setVisible] = useState("");

  setTimeout(() => {
    setVisible(setShowSignUpModal ? `${modalWrapper}__modal-content--visible` : "")
  }, 1);

  return (
    <div className={`${modalWrapper}__body`}>
      <div className={`${modalWrapper}__dialog`}>
        <div className={`${modalWrapper}__modal-content ${visible}`}>
          <IconButton className={`${modalWrapper}__modal-content__close-icon`}
                      onClick={() => {
                        setShowSignUpModal(false)
                      }}>
            <CloseIcon/>
          </IconButton>
          <SignUpForm setShowSignUpModal={setShowSignUpModal}/>
        </div>
      </div>
    </div>
  );
};
export default SignUpModal;
