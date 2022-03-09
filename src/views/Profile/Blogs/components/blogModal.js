import React, {useContext, useState} from 'react';

import {Grid, IconButton} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import ThemeContextProvider from "../../../../contexts/themeContext";
import {BlogModalStyle} from "./blogModalStyle";

const BlogModal = ({
                       setToggleBlogModal,
                       blog: {image, description}
                   }) => {
    const customTheme = useContext(ThemeContextProvider);
    const blogModalWrapper = BlogModalStyle(customTheme).blogModalWrapper;
    const [visibilityClass, setVisibilityClass] = useState("");

    setTimeout(() => {
        setVisibilityClass(setToggleBlogModal ? `${blogModalWrapper}__modal-content--visible` : "")
    }, 1);

    return (
        <div className={`${blogModalWrapper}__body`}>
            <div className={`${blogModalWrapper}__dialog`}>
                <div className={`${blogModalWrapper}__modal-content ${visibilityClass}`}>
                    <IconButton className={`${blogModalWrapper}__modal-content__close-icon`}
                                onClick={() => {
                                    setToggleBlogModal(false)
                                }}>
                        <CloseIcon/>
                    </IconButton>
                    <Grid container>
                        <Grid className={`${blogModalWrapper}__modal-content__image-container`}>
                            <img
                                src={image}
                                alt="modal image"
                            />
                        </Grid>
                        <Grid item className={`${blogModalWrapper}__modal-content__text-content`}>
                            {description}
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default BlogModal;
