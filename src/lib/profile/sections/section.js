import React, {useContext} from 'react';

import ThemeContextProvider from "../../../contexts/themeContext";
import {SectionStyle} from "./style";
import CustomDivider from "../divider/divider";

const Section = ({section}) => {
    const customTheme = useContext(ThemeContextProvider);
    const classes = SectionStyle(customTheme);
    const {title, subtitle, align, component} = section;

    return (
        <>
            <div className={`${classes.sectionHeaderWrapper}--${align}`}>
                <span className={`${classes.sectionHeaderWrapper}__subtitle`}>{subtitle}</span>
                <h2 className={`${classes.sectionHeaderWrapper}__title`}>{title}</h2>
            </div>
            {component && component}
            <CustomDivider/>
        </>
    );
}

export default Section;
