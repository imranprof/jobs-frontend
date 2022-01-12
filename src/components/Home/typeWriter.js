import React from 'react';

import Typewriter from 'typewriter-effect';

import {profileData} from "../../../API/mock/profileData";

const TypeWriter = ({expertises, classes}) => {

    return (
        <h1 className={`${classes.homeWrapper}__title`}>
            Hi, I'm <span className={`${classes.homeWrapper}__name`}>{profileData.name}</span><br/>
            <span className={`${classes.homeWrapper}__expertise`}>
                <span>a&nbsp;</span>
                    <Typewriter
                        options={{
                            strings: expertises,
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 30,
                            delay: 40,
                            pauseFor: 1500,
                            cursor: ""
                        }}
                    />
                <span className={`${classes.homeWrapper}__cursor`}/>
            </span>
        </h1>
    );
};

export default TypeWriter;
