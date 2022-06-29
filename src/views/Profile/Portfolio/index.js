import {connect} from "react-redux";

import {Grid} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import CustomCard from "../../../lib/profile/card/card";
import {PortfolioStyle} from "./style";

const Portfolio = (props) => {
  const theme = useTheme();
  const classes = PortfolioStyle(theme);
  const {portfolios} = props;

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
    portfolios: state.portfolios
  }
}

export default connect(mapStateToProps)(Portfolio);
