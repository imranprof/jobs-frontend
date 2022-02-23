import React, {useContext, useState} from 'react';

import {List, ListItem} from "@material-ui/core";

import ThemeContextProvider from "../../contexts/themeContext";
import {ResumeStyle} from "./style";
import {ResumeData} from "../../../API/mock/resumeData";

const Resume = () => {
    const customTheme = useContext(ThemeContextProvider);
    const resumeWrapper = ResumeStyle(customTheme).resumeWrapper;

    let resumeSections = [];
    for (let key in ResumeData) {
        resumeSections.push(key);
    }
    const [selected, setSelected] = useState(0);

    const cardType = resumeSections[selected];
    const cardData = ResumeData[cardType];

    const navList = () => {
        return (
            <List className={`${resumeWrapper}__nav-list`}>
                {resumeSections.map((section, idx) => (
                    <ListItem
                        className={`${resumeWrapper}__nav-list__item`}
                        key={idx}
                        selected={selected === idx}
                        onClick={() => setSelected(idx)}
                    >
                        <a>{section}</a>
                    </ListItem>
                ))}
            </List>
        );
    }

    return (
        <div className={resumeWrapper}>
            <div className={`${resumeWrapper}__body`}>
                {navList()}
            </div>
        </div>
    );
}

export default Resume;
