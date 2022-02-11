import React, {useContext, useState} from 'react';

import {Grid, IconButton} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import CloseIcon from "@material-ui/icons/Close";

import ThemeContextProvider from "../../contexts/themeContext";
import FontAwesomeIcons from "../../../styles/FontAwesomeIcons";
import {PortfolioModalStyle} from "./portfolioModalStyle";

const PortfolioModal = ({
                         setTogglePortfolioModal,
                         portfolio: {image, category, title, description}
                     }) => {
    const customTheme = useContext(ThemeContextProvider);
    const modalWrapper = PortfolioModalStyle(customTheme).modalWrapper;
    const [slidingClass, SetSlidingClass] = useState("");

    setTimeout(() => {
        SetSlidingClass(setTogglePortfolioModal ? `${modalWrapper}__modal-content--visible` : "")
    }, 1);

    return (
        <div className={`${modalWrapper}__body`}>
            <div className={`${modalWrapper}__dialog`}>
                <div className={`${modalWrapper}__modal-content ${slidingClass}`} >
                    <IconButton className={`${modalWrapper}__modal-content__close-icon`}
                                onClick={() => {
                                    setTogglePortfolioModal(false)
                                }}>
                        <CloseIcon/>
                    </IconButton>
                    <Grid container>
                        <Grid item md={6} className={`${modalWrapper}__modal-content__image-container`}>
                            <img
                                className={`${modalWrapper}__modal-content__image-container__image`}
                                src={image}
                                alt="image"
                            />
                        </Grid>
                        <Grid item md={6} className={`${modalWrapper}__modal-content__text-content`}>
                                <p className={`${modalWrapper}__modal-content__text-content__category`}>
                                    {category}
                                </p>
                                <p className={`${modalWrapper}__modal-content__text-content__title`}>
                                    {title}
                                </p>
                                <p className={`${modalWrapper}__modal-content__text-content__description`}>
                                    {description}
                                </p>
                                <div
                                    className={`${modalWrapper}__modal-content__text-content__link-button-wrapper`}>
                                    <a
                                        className={`${modalWrapper}__modal-content__text-content__link-button-wrapper__link-button`}>
                                        LIKE THIS
                                        <Icon
                                            className={`${FontAwesomeIcons.thumbsUp} ${modalWrapper}__modal-content__text-content__link-button-wrapper__link-button__thumbs-up-icon`}/>
                                    </a>
                                    <a
                                        className={`${modalWrapper}__modal-content__text-content__link-button-wrapper__link-button`}>
                                        VIEW PROJECT
                                        <Icon
                                            className={`${FontAwesomeIcons.angleRight} ${modalWrapper}__modal-content__text-content__link-button-wrapper__link-button__right-angular-icon`}/>
                                    </a>
                                </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default PortfolioModal;
