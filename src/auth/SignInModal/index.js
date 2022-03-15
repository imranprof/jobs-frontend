import {useContext, useState} from "react";

import {IconButton} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import ThemeContextProvider from "../../contexts/themeContext";
import SignInForm from "./components/SignInForm";
import {ModalStyle} from "../modalStyle";

const SignInModal = ({setAuthenticated, setShowSignInModal}) => {
  const customTheme = useContext(ThemeContextProvider);
  const modalWrapper = ModalStyle(customTheme).modalStyle;
  const [visible, setVisible] = useState("");

  setTimeout(() => {
    setVisible(setShowSignInModal ? `${modalWrapper}__modal-content--visible` : "")
  }, 1);

  return (
    <div className={`${modalWrapper}__body`}>
      <div className={`${modalWrapper}__dialog`}>
        <div className={`${modalWrapper}__modal-content ${visible}`}>
          <IconButton className={`${modalWrapper}__modal-content__close-icon`}
                      onClick={() => {
                        setShowSignInModal(false)
                      }}>
            <CloseIcon/>
          </IconButton>
          <SignInForm setAuthenticated={setAuthenticated} setShowSignInModal={setShowSignInModal}/>
        </div>
      </div>
    </div>
  );
};
export default SignInModal;
