import {Grid} from "@material-ui/core";
import {useContext} from "react";
import ThemeContextProvider from "../../../contexts/themeContext";
import {ResumeStyle} from "../style";

const ContentItem = ({cardType, cardContent}) => {
    const customTheme = useContext(ThemeContextProvider);
    const resumeWrapper = ResumeStyle(customTheme).resumeWrapper;

    const title = () => {
        if (cardType === "education") return cardContent.institution
        else if (cardType === "experience") return cardContent.title
    }
    const subTitle = () => {
        if (cardType !== "skills") return `${cardContent.startDate} - ${cardContent.endDate}`
    }
    const description = () => {
        if (cardType !== "skills") return cardContent.description
    }
    return (
        <Grid item container
              className={`${resumeWrapper}__nav-content__row__column__content__item`}>
            <div className={`${resumeWrapper}__nav-content__row__column__content__item__inner`}>
                <Grid className={`${resumeWrapper}__nav-content__row__column__content__item__inner__heading`}>
                    <div
                        className={`${resumeWrapper}__nav-content__row__column__content__item__inner__heading__title`}>
                        <h4>{title()}</h4>
                        <span>{subTitle()}</span>
                    </div>
                </Grid>
                <Grid
                    className={`${resumeWrapper}__nav-content__row__column__content__item__inner__description`}>
                    {description()}
                </Grid>
            </div>
        </Grid>
    );
}

export default ContentItem;
