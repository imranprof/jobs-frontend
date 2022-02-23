import {useContext} from 'react';

import ThemeContextProvider from "../../contexts/themeContext";

import {ResumeStyle} from "./style";
import RowHeading from "./Elements/rowHeading";

const ResumeCards = ({cardType, cardData}) => {

    const customTheme = useContext(ThemeContextProvider);
    const resumeWrapper = ResumeStyle(customTheme).resumeWrapper;

    return (
        <div className={`${resumeWrapper}__nav-content`}>
            <RowHeading cardType={cardType} cardData={cardData}/>
        </div>
    );
}

export default ResumeCards;
