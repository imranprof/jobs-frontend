import React, {useContext} from 'react';
import ThemeContextProvider from "../../contexts/themeContext";
import {SectionHeaderStyle} from "./style";

const SectionHeader = ({ title }) => {
  const customTheme = useContext(ThemeContextProvider);
  const classes = SectionHeaderStyle(customTheme);

  return (
    <div className={classes.sectionHeaderWrapper}>
      <h1>{title}</h1>
    </div>
  );
};

export default SectionHeader;
