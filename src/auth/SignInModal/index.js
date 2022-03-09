import {useContext, useState} from "react";
import {IconButton} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ThemeContextProvider from "../../contexts/themeContext";
import SignInForm from "./components/SignInForm";
import {SignInModalStyle} from "./style";

const SignInModal = ({setShowSignInModal, }) => {
    const customTheme = useContext(ThemeContextProvider);
    const signInModalWrapper = SignInModalStyle(customTheme).signInModalWrapper;
    const [visible, setVisible] = useState("");

    setTimeout(() => {
        setVisible(setShowSignInModal ? `${signInModalWrapper}__modal-content--visible` : "")
    }, 1);

    return (
        <div className={`${signInModalWrapper}__body`}>
            <div className={`${signInModalWrapper}__dialog`}>
                <div className={`${signInModalWrapper}__modal-content ${visible}`}>
                    <IconButton className={`${signInModalWrapper}__modal-content__close-icon`}
                                onClick={() => {
                                    setShowSignInModal(false)
                                }}>
                        <CloseIcon/>
                    </IconButton>
                    <SignInForm setShowSignInModal={setShowSignInModal}/>
                </div>
            </div>
        </div>
    );
};
export default SignInModal;
