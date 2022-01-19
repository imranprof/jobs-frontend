import React, {useContext} from 'react';

import ThemeContextProvider from "../../../contexts/themeContext";
import {SectionHeaderStyle} from "./style";
import CustomDivider from "../../CustomMui/Divider/divider";

const Section = ({section}) => {
    const customTheme = useContext(ThemeContextProvider);
    const classes = SectionHeaderStyle(customTheme);
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
