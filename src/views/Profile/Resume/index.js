import React, {useContext, useState} from 'react';
import {connect} from "react-redux";

import ThemeContextProvider from "../../../contexts/themeContext";
import {ResumeStyle} from "./style";
import ResumeCards from "./components/resumeCards";
import NavList from "./components/navList";

const Resume = (props) => {
    const customTheme = useContext(ThemeContextProvider);
    const resumeWrapper = ResumeStyle(customTheme).resumeWrapper;
    const { resume } = props;

    let resumeSections = [];
    for (let key in resume) {
        resumeSections.push(key);
    }

    const [selected, setSelected] = useState(0);
    const cardType = resumeSections[selected];
    const cardData = resume[cardType];

    return (
        <div className={resumeWrapper} id="resume">
            <div className={`${resumeWrapper}__body`}>
                <NavList resumeSections={resumeSections} resumeClasses={resumeWrapper} selected={selected} setSelected={setSelected} />
                <ResumeCards cardData={cardData} cardType={cardType} />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        resume: state.profile.resume
    }
}

export default connect(mapStateToProps)(Resume);
