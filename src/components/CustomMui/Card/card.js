import React, {useContext} from 'react';
import {Card, CardContent, CardMedia} from "@material-ui/core";

import {CardStyle} from "./style";
import ThemeContextProvider from "../../../contexts/themeContext";
import Icon from "@material-ui/core/Icon";
import FontAwesomeIcons from "../../../../styles/FontAwesomeIcons";

const CustomCard = ({portfolio}) => {
    const customTheme = useContext(ThemeContextProvider);
    const classes = CardStyle(customTheme);
    const {image, category, title, reactCount} = portfolio;

    return (
        <Card xs={12} sm={6} md={4} className={classes.cardWrapper}>
            <CardMedia
                className={`${classes.cardWrapper}__image`}
                image={image}
                title={title}
            />
            <CardContent className={`${classes.cardWrapper}__content`}>
                <div className={`${classes.cardWrapper}__category-info`}>
                    <div className={`${classes.cardWrapper}__category-info__category`}>
                        <a href="#">{category}</a>
                    </div>
                    <div className={`${classes.cardWrapper}__category-info__react-count`}>
                        <Icon className={`${classes.cardWrapper}__category-info__react ${FontAwesomeIcons.heart}`}/>
                        {reactCount}
                    </div>
                </div>
                <h4 className={`${classes.cardWrapper}__category-info`}>{title}</h4>
            </CardContent>
        </Card>
    );
}

export default CustomCard;
