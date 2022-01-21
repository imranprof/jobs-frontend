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
        <Grid container spacing={4} className={classes.portfolioWrapper}>
            {PortfolioData.map(portfolio => (
                <CustomCard key={portfolio.id} element={portfolio} elementType="portfolio"/>
            ))}
        </Grid>
    );
}

export default Portfolio;
