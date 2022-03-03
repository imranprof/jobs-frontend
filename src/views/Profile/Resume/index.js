import React, {useContext, useState} from 'react';

import {List, ListItem} from "@material-ui/core";

import ThemeContextProvider from "../../../contexts/themeContext";
import {ResumeStyle} from "./style";
import {ResumeData} from "../../../../API/mock/resumeData";
import ResumeCards from "./components/resumeCards";

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
    const navContent = () => {
        return (
            <ResumeCards cardType={cardType} cardData={cardData}/>
        );
    }

    return (
        <div className={resumeWrapper} id="resume">
            <div className={`${resumeWrapper}__body`}>
                {navList()}
                {navContent()}
            </div>
        </div>
    );
}

export default Resume;
