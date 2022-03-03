import {useContext} from "react";
import ThemeContextProvider from "../../../../contexts/themeContext";
import {ResumeStyle} from "../style";

const RowHeading = ({cardType}) => {
    const customTheme = useContext(ThemeContextProvider);
    const resumeWrapper = ResumeStyle(customTheme).resumeWrapper;

    return (
        <div className={`${resumeWrapper}__nav-content__row__heading`}>
            <span>{"2007 - 2010"}</span>
            <h4>{cardType} Quality</h4>
        </div>
    );
}

export default RowHeading;
