import Link from 'next/link'

import React, {useContext, useState} from 'react';
import {Card, CardContent, CardMedia} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

import ThemeContextProvider from "../../../contexts/themeContext";
import FontAwesomeIcons from "../../../../styles/FontAwesomeIcons";
import {CardStyle} from "./style";
import PortfolioModal from "../../Portfolio/portfolioModal";
import BlogModal from "../../Blogs/blogModal";

const CustomCard = ({element, elementType}) => {
    const customTheme = useContext(ThemeContextProvider);
    const classes = CardStyle(customTheme);

    const isPortfolio = elementType === "portfolio";
    const iconClass = isPortfolio ? "heart" : "clock";
    const elementData = isPortfolio ? element.reactCount : `${element.readTime} read`;

    const [togglePortfolioModal, setTogglePortfolioModal] = useState(false);
    const [toggleBlogModal, setToggleBlogModal] = useState(false);

    return (
        <>
            <Card xs={12} sm={6} md={4}
                  className={classes.cardWrapper}
                  onClick={() => {
                      if(isPortfolio) setTogglePortfolioModal(true)
                      else setToggleBlogModal(true)
                  }}>
                <div className={`${classes.cardWrapper}__image-wrapper`}>
                    <CardMedia
                        className={`${classes.cardWrapper}__image`}
                        image={element.image}
                        title={element.title}
                    />
                </div>
                <CardContent className={`${classes.cardWrapper}__content`}>
                    <div className={`${classes.cardWrapper}__category-info`}>
                        <div className={`${classes.cardWrapper}__category-info__category`}>
                            <Link href="/">
                                <a>{element.category}</a>
                            </Link>
                        </div>
                        <div className={`${classes.cardWrapper}__category-info__icon-wrapper`}>
                            <Icon
                                className={`${classes.cardWrapper}__category-info__react ${FontAwesomeIcons[iconClass]}`}/>
                            {elementData}
                        </div>
                    </div>
                    <h1 className={`${classes.cardWrapper}__title`}>
                        <Link href="/">
                            <a className={`${classes.cardWrapper}__title__link`}>
                                {element.title}
                                <Icon
                                    className={`${classes.cardWrapper}__title__link__arrow ${FontAwesomeIcons.arrow}`}/>
                            </a>
                        </Link>
                    </h1>
                </CardContent>
            </Card>
            {togglePortfolioModal && <PortfolioModal
                setTogglePortfolioModal={setTogglePortfolioModal}
                portfolio={element}/>
            }

            {toggleBlogModal && <BlogModal
                setToggleBlogModal={setToggleBlogModal}
                blog={element}/>
            }
        </>
    );
}

export default CustomCard;