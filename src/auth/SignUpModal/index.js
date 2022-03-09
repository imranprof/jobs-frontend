import {useContext, useState} from 'react';
import {IconButton} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ThemeContextProvider from "../../contexts/themeContext";
import {SignInModalStyle} from "../SignInModal/style";
import SignUpForm from "./components/SignUpForm";

const SignUpModal = ({setShowSignUpModal}) => {
    const customTheme = useContext(ThemeContextProvider);
    const signInModalWrapper = SignInModalStyle(customTheme).signInModalWrapper;
    const [visible, setVisible] = useState("");

    setTimeout(() => {
        setVisible(setShowSignUpModal ? `${signInModalWrapper}__modal-content--visible` : "")
    }, 1);

    return (
        <div className={`${signInModalWrapper}__body`}>
            <div className={`${signInModalWrapper}__dialog`}>
                <div className={`${signInModalWrapper}__modal-content ${visible}`}>
                    <IconButton className={`${signInModalWrapper}__modal-content__close-icon`}
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
