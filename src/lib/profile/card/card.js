import Link from 'next/link'
import {useState} from 'react';

import {Card, CardContent, CardMedia} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

import FontAwesomeIcons from "../../../../styles/FontAwesomeIcons";
import PortfolioModal from "../../../views/Profile/Portfolio/components/portfolioModal";
import BlogModal from "../../../views/Profile/Blogs/components/blogModal";
import {CardStyle} from "./style";

const CustomCard = ({element, elementType}) => {
    const theme = useTheme();
    const classes = CardStyle(theme);
    const { title, image, category, reactCount, readTime } = element;

    const isPortfolio = elementType === "portfolio";
    const iconClass = isPortfolio ? "heart" : "clock";
    const elementData = isPortfolio ? reactCount : `${readTime} read`;

    const [togglePortfolioModal, setTogglePortfolioModal] = useState(false);
    const [toggleBlogModal, setToggleBlogModal] = useState(false);

    return (
        <>
            <Card xs={12} sm={6} md={4}
                  className={classes.cardWrapper}
                  onClick={() => {
                      if (isPortfolio) setTogglePortfolioModal(true)
                      else setToggleBlogModal(true)
                  }}>
                <div className={`${classes.cardWrapper}__image-wrapper`}>
                    <CardMedia
                        className={`${classes.cardWrapper}__image`}
                        image={image}
                        title={title}
                    />
                </div>
                <CardContent className={`${classes.cardWrapper}__content`}>
                    <div className={`${classes.cardWrapper}__category-info`}>
                        <div className={`${classes.cardWrapper}__category-info__category`}>
                            <Link href="#">
                                <a>{category}</a>
                            </Link>
                        </div>
                        <div className={`${classes.cardWrapper}__category-info__icon-wrapper`}>
                            <Icon
                                className={`${classes.cardWrapper}__category-info__react ${FontAwesomeIcons[iconClass]}`}/>
                            {elementData}
                        </div>
                    </div>
                    <h1 className={`${classes.cardWrapper}__title`}>
                        <Link href="#">
                            <a className={`${classes.cardWrapper}__title__link`}>
                                {title}
                                <Icon
                                    className={`${classes.cardWrapper}__title__link__arrow ${FontAwesomeIcons.arrowRight}`}/>
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
