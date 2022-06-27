import {connect} from "react-redux";

import {Grid} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import CustomCard from "../../../lib/profile/card/card";
import {PortfolioStyle} from "./style";
import RemoveButton from "../../../lib/removeButton";
import {removePortfolio} from "../../../store/actions/portfolioActions";

const Portfolio = (props) => {
  const theme = useTheme();
  const classes = PortfolioStyle(theme);
  const {portfolios} = props;
  const removePortfolioHandler = (item) => {
    const filteredItems = portfolios.filter(portfolio => portfolio.id !== item.id)
    props.removePortfolio(filteredItems)
  }

  return (
    <Grid container spacing={4} className={classes.portfolioWrapper} id="portfolio">
      {portfolios?.map(portfolio => (
        <div className={`${classes.portfolioWrapper}__project`} key={portfolio.id}>
          <div className={`${classes.portfolioWrapper}__removeButton-Container`}>
                        <span onClick={() => removePortfolioHandler(portfolio)}>
                            <RemoveButton/>
                        </span>
          </div>
          <div className={`${classes.portfolioWrapper}__projectCard`}>
            <CustomCard element={portfolio} elementType="portfolio"/>
          </div>
        </div>
      ))}
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    portfolios: state.portfolios
  }
}

const mapDispatchToProps = (dispatch) => ({
  removePortfolio: (portfolio) => dispatch(removePortfolio(portfolio))
})

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
