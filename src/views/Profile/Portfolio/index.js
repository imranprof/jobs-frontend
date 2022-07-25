import {useState, useEffect} from "react";
import {connect, useDispatch} from "react-redux";

import {Grid} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import CustomCard from "../../../lib/profile/card/card";
import {PortfolioStyle} from "./style";
import CustomSnackbar from "../../../lib/customSnackbar";
import {getPortfoliosAction} from "../../../store/actions/portfolioActions"
import AddButton from "../../../lib/addButton";
import PortfolioModal from "./components/portfolioModal";

const Portfolio = (props) => {
  const theme = useTheme();
  const classes = PortfolioStyle(theme);
  const {portfolios, userID} = props;
  const [toast, setToast] = useState({show: false, severity: "", text: ""})
  const dispatch = useDispatch()
  const [addPortfolio, setAddPortfolio] = useState(false);

  useEffect(
    () => {
      userID && dispatch(getPortfoliosAction({id: userID}))
    }, []
  )

  return (
    <>
      <div className={`${classes.portfolioWrapper}__addButton-container`}>
        <span onClick={() => setAddPortfolio(true)}>
          <AddButton/>
        </span>
      </div>

      {
        addPortfolio && <PortfolioModal
          setTogglePortfolioModal={setAddPortfolio}
          addMode={true}
          portfolio={{
            title: "",
            categories: [],
            description: "",
            image: "portfolio-01.jpg"
          }}
          toast={toast}
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
    userID: state.auth.userID,
    portfolios: state.portfolios.allPortfolios
  }
}

export default connect(mapStateToProps, null)(Portfolio);
