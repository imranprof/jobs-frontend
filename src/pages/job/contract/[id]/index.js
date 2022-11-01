import {connect, useDispatch} from "react-redux";
import {useEffect} from "react";
import {useRouter} from "next/router";

import {Avatar, Button, Paper} from "@material-ui/core";
import {NoSsr} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import {getContractJobShow} from "../../../../store/actions/jobAction";
import withLayout from '../../../../views/Layout'
import {ContractJobShowStyle} from "./style";
import CustomLoader from "../../../../lib/customLoader";
import {jobContractEnd} from "../../../../store/actions/jobAction";

const ContractJobShow = (props) => {
  const theme = useTheme();
  const classes = ContractJobShowStyle(theme);
  const dispatch = useDispatch()
  const router = useRouter()
  const {id} = router.query;
  const {jobContract, initialLoader} = props
  const {avatar, contract_title, name, contract_status} = jobContract

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
          <div className={`${classes.contractJobShowWrapper}__header-wrapper`}>
            <div className={`${classes.contractJobShowWrapper}__header`}>
              <Avatar src={avatar} className={`${classes.contractJobShowWrapper}__avatar`} />
              <h4 className={`${classes.contractJobShowWrapper}__name`}>{name}</h4>
            </div>
            <Button
              variant="contained"
              onClick={() => jobContractEndHandler(id)}
              className={`${classes.contractJobShowWrapper}__contract-end-btn`}
              disabled={contract_status}
            >
              Contract End
            </Button>
          </div>

          <h1 className={`${classes.contractJobShowWrapper}__title`}>{contract_title}</h1>
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
