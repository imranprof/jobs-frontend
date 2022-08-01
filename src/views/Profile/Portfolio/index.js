import {useState, useEffect} from "react";
import {connect, useDispatch} from "react-redux";

import {Grid} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import CustomCard from "../../../lib/profile/card/card";
import {PortfolioStyle} from "./style";
import CustomSnackbar from "../../../lib/customSnackbar";
import {getPortfoliosAction} from "../../../store/actions/portfolioActions"
import AddButton from "../../../lib/addButton";
import PortfolioAdd from "../AddComponents/portfolio/components/portfolioAdd";

const Portfolio = (props) => {
  const theme = useTheme();
  const classes = PortfolioStyle(theme);
  const {portfolios, profileSlug} = props;
  const [toast, setToast] = useState({show: false, severity: "", text: ""})
  const dispatch = useDispatch()
  const [addPortfolio, setAddPortfolio] = useState(false);

  useEffect(
    () => {
      profileSlug && dispatch(getPortfoliosAction())
    }, []
  )

  return (
    <>
      <div className={`${classes.portfolioWrapper}__addButton-container`}>
        <span onClick={() => setAddPortfolio(true)}>
          <AddButton tooltipTitle="Add Portfolio"/>
        </span>
      </div>

      {
        addPortfolio && <PortfolioAdd
          setTogglePortfolioModal={setAddPortfolio}
          setToast={setToast}/>
      }

      <Grid container spacing={4} className={classes.portfolioWrapper} id="portfolio">
        {portfolios?.map(portfolio => (
          <CustomCard key={portfolio.id} element={portfolio} elementType="portfolio"
                      toast={toast} setToast={setToast}/>
        ))}
      </Grid>

      {
        toast.show &&
        <CustomSnackbar
          toast={toast}
          setToast={setToast}/>
      }
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    profileSlug: state.auth.profileSlug,
    portfolios: state.portfolios.allPortfolios
  }
}

export default connect(mapStateToProps)(Portfolio);
