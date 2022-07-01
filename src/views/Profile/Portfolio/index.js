import {useState} from "react";
import {connect} from "react-redux";

import {Grid} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import CustomCard from "../../../lib/profile/card/card";
import {PortfolioStyle} from "./style";
import CustomSnackbar from "../../../lib/customSnackbar";


const Portfolio = (props) => {
  const theme = useTheme();
  const classes = PortfolioStyle(theme);
  const {portfolios} = props;
  const [toast, setToast] = useState({show: false, severity: "", text: ""})

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
    portfolios: state.portfolios
  }
}

export default connect(mapStateToProps)(Portfolio);
