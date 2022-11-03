import Link from "next/link"

import {Paper} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import {ContractStyle} from "./style";

const Contract = (props) => {
  const theme = useTheme();
  const classes = ContractStyle(theme);
  const {contract, role} = props
  const {contract_title, contract_budget, name, job_type} = contract
  const contractType = job_type === 'Pay by the hour' ? 'Hourly' : 'Fixed-price'

  return (
    <div className={`${classes.contractWrapper}__wrapper`}>
      <Link href={`/job/contract/${contract.id}`} className={`${classes.contractWrapper}__link`}>
        <Paper elevation={3} className={classes.contractWrapper}>
          <h3 className={`${classes.contractWrapper}__title`}>{contract_title}</h3>

          <span className={`${classes.contractWrapper}__hired-by`}>{role === 'employee' ? 'Hired by' : 'Hired'}: {name}</span>
          <span className={`${classes.contractWrapper}__rate`}>Rate: ${contract_budget}{contractType === 'Hourly' ? '/hr' : ''}</span>
        </Paper>
      </Link>
    </div>
  );
}

export default Contract;
