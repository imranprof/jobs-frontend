import React, {useContext} from 'react';

import {Grid} from "@material-ui/core";

import CustomCard from "../CustomMui/Card/card";
import ThemeContextProvider from "../../contexts/themeContext";
import {PortfolioStyle} from "./style";
import {PortfolioData} from "../../../API/mock/portfolioData";

const Portfolio = () => {
    const customTheme = useContext(ThemeContextProvider);
    const classes = PortfolioStyle(customTheme);

    return (
        <Grid container spacing={5} className={classes.portfolioWrapper}>
            {PortfolioData.map(portfolio => (
                <CustomCard key={portfolio.id} portfolio={portfolio} />
            ))}
        </Grid>
    );
}

export default Portfolio;
