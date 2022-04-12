import React, {useContext} from 'react';
import {connect} from "react-redux";

import {Grid} from "@material-ui/core";

import CustomCard from "../../../lib/profile/card/card";
import ThemeContextProvider from "../../../contexts/themeContext";
import {PortfolioStyle} from "./style";
import {PortfolioData} from "../../../../API/mock/profile/portfolioData";

const Portfolio = (props) => {
    const customTheme = useContext(ThemeContextProvider);
    const classes = PortfolioStyle(customTheme);
    const { portfolios } = props;

    return (
        <Grid container spacing={4} className={classes.portfolioWrapper} id="portfolio">
            {portfolios.map(portfolio => (
                <CustomCard key={portfolio.id} element={portfolio} elementType="portfolio"/>
            ))}
        </Grid>
    );
}

const mapStateToProps = (state) => {
    return {
        portfolios: state.profile.portfolios
    }
}

export default connect(mapStateToProps)(Portfolio);
