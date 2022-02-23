import {useContext, useState} from "react";
import ThemeContextProvider from "../../../contexts/themeContext";
import {ResumeStyle} from "../style";

const SkillsItem = ({cardContent}) => {
    const customTheme = useContext(ThemeContextProvider);
    const resumeWrapper = ResumeStyle(customTheme).resumeWrapper;

    const [width, setWidth] = useState("");
    setTimeout(() => {
        setWidth(`${cardContent.rating}%`)
    }, 10);

    return (
        <div key={cardContent.id} className={`${resumeWrapper}__nav-content__row__column__skills__wrapper`}>
            <h2 className={`${resumeWrapper}__nav-content__row__column__skills__wrapper__title`}>
                {cardContent.name}
            </h2>
            <div className={`${resumeWrapper}__nav-content__row__column__skills__wrapper__bar`}>
                <div
                    className={`${resumeWrapper}__nav-content__row__column__skills__wrapper__bar__progress-bar`}
                    style={{width: width}}>
                    <span>{`${cardContent.rating}%`}</span>
                </div>
            </div>
        </div>
    );
}

export default SkillsItem;