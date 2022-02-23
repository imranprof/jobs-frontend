import {useContext} from 'react';
import ThemeContextProvider from "../../../contexts/themeContext";

import {Grid} from "@material-ui/core";

import SkillsItem from "./skillsItem";
import ContentItem from "./contentItem";
import {ResumeStyle} from "../style";

const RowContent = ({cardType, cardData}) => {
    const customTheme = useContext(ThemeContextProvider);
    const resumeWrapper = ResumeStyle(customTheme).resumeWrapper;
    const wrapperClass = cardType === "skills" ? "skills" : "content";

    const columnWrapper = position => {
        return (
            <Grid key={position} item xs={6} className={`${resumeWrapper}__nav-content__row__column`}>
                <Grid container className={`${resumeWrapper}__nav-content__row__column__${wrapperClass}`}>
                    {columnContent(position)}
                </Grid>
            </Grid>
        );
    }

    const columnContent = position => {
        const isLeftColumn = () => position === "left";

        const itemCount = cardData.length;
        const columnLimit = Math.floor((itemCount + 1) / 2);
        const startIndex = isLeftColumn() ? 0 : columnLimit;
        const endIndex = isLeftColumn() ? columnLimit : itemCount;

        let content = [];
        for (let idx = startIndex; idx < endIndex; idx++) {
            content.push(
                cardType === "skills" ? <SkillsItem cardType={cardType} cardContent={cardData[idx]}/> :
                    <ContentItem cardType={cardType} cardContent={cardData[idx]}/>
            );
        }
        return content;
    }

    return (
        <Grid container className={`${resumeWrapper}__nav-content__row`}>
            {columnWrapper("left")}
            {columnWrapper("right")}
        </Grid>
    );
}

export default RowContent;
