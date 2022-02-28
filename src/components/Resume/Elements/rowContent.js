import {useContext} from 'react';

import {Grid} from "@material-ui/core";

import ThemeContextProvider from "../../../contexts/themeContext";
import {ResumeStyle} from "../style";
import ColumnContent from "./columnContent";

const RowContent = ({cardType, cardData}) => {
    const customTheme = useContext(ThemeContextProvider);
    const resumeWrapper = ResumeStyle(customTheme).resumeWrapper;
    const wrapperClass = cardType === "skills" ? "skills" : "content";

    const columnWrapper = position => {
        return (
            <Grid key={position} item xs={6} className={`${resumeWrapper}__nav-content__row__column`}>
                <Grid container className={`${resumeWrapper}__nav-content__row__column__${wrapperClass}`}>
                    <ColumnContent position={position} cardType={cardType} cardData={cardData} />
                </Grid>
            </Grid>
        );
    }

    return (
        <Grid container className={`${resumeWrapper}__nav-content__row`}>
            {columnWrapper("left")}
            {columnWrapper("right")}
        </Grid>
    );
}

export default RowContent;
