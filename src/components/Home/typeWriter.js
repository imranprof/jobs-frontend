import React from 'react';

import Typewriter from 'typewriter-effect';

const TypeWriter = ({name, expertises, classes}) => {
    return (
        <h1 className={`${classes.homeWrapper}__left-top__title`}>
            Hi, I'm <span className={`${classes.homeWrapper}__left-top__title__name`}>{name}</span><br/>
            <span className={`${classes.homeWrapper}__left-top__title__expertise`}>
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
                <span className={`${classes.homeWrapper}__left-top__title__cursor`}/>
            </span>
        </h1>
    );
};

export default TypeWriter;
