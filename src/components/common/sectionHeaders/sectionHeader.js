import React, {useContext} from 'react';

import ThemeContextProvider from "../../../contexts/themeContext";
import {SectionHeaderStyle} from "./style";

const SectionHeader = ({SectionHeader}) => {
    const customTheme = useContext(ThemeContextProvider);
    const classes = SectionHeaderStyle(customTheme);
    const {title, subtitle, align} = SectionHeader;

    return (
        <div className={`${classes.sectionHeaderWrapper}--${align}`}>
            <span className={`${classes.sectionHeaderWrapper}__subtitle`}>{subtitle}</span>
            <h2 className={`${classes.sectionHeaderWrapper}__title`}>{title}</h2>
        </div>
    );
}

export default SectionHeader;
