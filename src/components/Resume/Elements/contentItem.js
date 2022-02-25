import {useContext} from "react";

import {Grid} from "@material-ui/core";

import ThemeContextProvider from "../../../contexts/themeContext";
import {ResumeStyle} from "../style";

const ContentItem = ({cardType, cardContent}) => {
    const customTheme = useContext(ThemeContextProvider);
    const resumeWrapper = ResumeStyle(customTheme).resumeWrapper;
    const isEducationContent = () => cardType === "education";

    const title = () => isEducationContent() ? cardContent.institution : cardContent.title;
    const subTitle = () => `${cardContent.startDate} - ${cardContent.endDate}`;
    const description = () => cardContent.description;

    return (
        <Grid item container className={`${resumeWrapper}__nav-content__row__column__content__item`}>
            <div className={`${resumeWrapper}__nav-content__row__column__content__item__inner`}>
                <Grid className={`${resumeWrapper}__nav-content__row__column__content__item__inner__heading`}>
                    <div className={`${resumeWrapper}__nav-content__row__column__content__item__inner__heading__title`}>
                        <h4>{title()}</h4>
                        <span>{subTitle()}</span>
                    </div>
                </Grid>
                <Grid className={`${resumeWrapper}__nav-content__row__column__content__item__inner__description`}>
                    <p>{description()}</p>
                </Grid>
            </div>
        </Grid>
    );
}

export default ContentItem;
