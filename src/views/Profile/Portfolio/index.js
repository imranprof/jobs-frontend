import {useState, useEffect} from "react";
import {connect} from "react-redux";

import {Grid} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import CustomCard from "../../../lib/profile/card/card";
import {PortfolioStyle} from "./style";
import CustomSnackbar from "../../../lib/customSnackbar";
import {getPortfolios} from "../../../store/actions/portfolioActions"
import {getPortfoliosData} from "./operations";


const Portfolio = (props) => {
  const theme = useTheme();
  const classes = PortfolioStyle(theme);
  const {portfolios, userID} = props;
  const [toast, setToast] = useState({show: false, severity: "", text: ""})

  useEffect(
    () => {
      userID && getPortfoliosData({id: userID}).then(res => {
          props.getPortfolios({
            allPortfolios: res.portfolio_data.projects,
            allCategories: res.all_categories
          });
        }
      ).catch(
        err => err
      )
    }, []
  )


  return (
    <>
      <Grid container spacing={4} className={classes.portfolioWrapper} id="portfolio">
        {portfolios?.map(portfolio => (
          <CustomCard key={portfolio.id} element={portfolio} elementType="portfolio" setToast={setToast}/>
        ))}
      </Grid>

      {toast.show &&
      <CustomSnackbar
        toast={toast}
        setToast={setToast}/>
      }
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    userID: state.auth.userID,
    portfolios: state.portfolios.allPortfolios
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPortfolios: (portfolios) => dispatch(getPortfolios(portfolios))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
