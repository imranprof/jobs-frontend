import {connect, useDispatch} from "react-redux";
import {useEffect} from "react";
import {useRouter} from "next/router";

import {Paper} from "@material-ui/core";
import {NoSsr} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import {getContractJobShow} from "../../../../store/actions/jobAction";
import withLayout from '../../../../views/Layout'
import {ContractJobShowStyle} from "./style";
import CustomLoader from "../../../../lib/customLoader";
import {jobContractEnd} from "../../../../store/actions/jobAction";
import ContractHeaderDetails from "../../../../views/Job/Contract/ShowContract/contractHeaderDetails";
import ContractBodyDetails from "../../../../views/Job/Contract/ShowContract/contractBodyDetails";

const ContractJobShow = (props) => {
  const theme = useTheme();
  const classes = ContractJobShowStyle(theme);
  const dispatch = useDispatch()
  const router = useRouter()
  const {id} = router.query;
  const {jobContract, initialLoader} = props

  useEffect(() => {
    id && dispatch(getContractJobShow(id))
  }, [id])

  const jobContractEndHandler = (id) => {
    id && dispatch(jobContractEnd(id))
  }

  return (
    <NoSsr>
      {initialLoader ? <CustomLoader /> : (
        <Paper elevation={3} className={classes.contractJobShowWrapper} >
          <ContractHeaderDetails jobContract={jobContract} jobContractEndHandler={jobContractEndHandler} />

          <ContractBodyDetails jobContract={jobContract} />
        </Paper>
      )}
    </NoSsr>
  );
};

const mapStateToProps = (state) => {
  return {
    jobContract: state.allJobs.jobContract,
    initialLoader: state.allJobs.initialLoader
  }
}

export default connect(mapStateToProps)(withLayout(ContractJobShow));
