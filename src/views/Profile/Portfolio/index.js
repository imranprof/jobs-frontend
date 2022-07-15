import {useState, useEffect} from "react";
import {connect, useDispatch} from "react-redux";

import {Grid} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import CustomCard from "../../../lib/profile/card/card";
import {PortfolioStyle} from "./style";
import CustomSnackbar from "../../../lib/customSnackbar";
import {getPortfolios, getPortfoliosAction} from "../../../store/actions/portfolioActions"


const Portfolio = (props) => {
  const theme = useTheme();
  const classes = PortfolioStyle(theme);
  const {portfolios, userID} = props;
  const [toast, setToast] = useState({show: false, severity: "", text: ""})
  let dispatch = useDispatch()

  useEffect(
    () => {
      userID && dispatch(getPortfoliosAction({id: userID}))
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
