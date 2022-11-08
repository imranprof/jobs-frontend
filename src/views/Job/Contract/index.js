import Link from "next/link"
import {Rating} from "react-simple-star-rating";

import {Paper} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import {ContractStyle} from "./style";

const Contract = (props) => {
  const theme = useTheme();
  const classes = ContractStyle(theme);
  const {contract, role} = props
  const {contract_title, contract_budget, name, job_type, get_rating, self_rating, contract_status} = contract
  const contractType = job_type === 'Pay by the hour' ? 'Hourly' : 'Fixed-price'

  const fillColorArray = [
    "#EB3830",
    "#EB3830",
    "#f19745",
    "#f19745",
    "#FFAB1A",
    "#FFAB1A",
    "#66bb6a",
    "#66bb6a",
    "#388e3c",
    "#388e3c",
  ];

  return (
    <div className={`${classes.contractWrapper}__wrapper`}>
      <Link href={`/job/contract/${contract.id}`} className={`${classes.contractWrapper}__link`}>
        <Paper elevation={3} className={classes.contractWrapper}>
          <h3 className={`${classes.contractWrapper}__title`}>{contract_title}</h3>

          <span className={`${classes.contractWrapper}__hired-by`}>{role === 'employee' ? 'Hired by' : 'Hired'}: {name}</span>
          <span className={`${classes.contractWrapper}__rate`}>Rate: ${contract_budget}{contractType === 'Hourly' ? '/hr' : ''}</span>
          {contract_status && (
            <span>
            Completed: {get_rating && self_rating ? (
                <Rating
                  readonly={true}
                  initialValue={get_rating}
                  size={20}
                  transition
                  allowFraction
                  fillColorArray={fillColorArray}
                />
              ): (<span> No feedback given</span>)}

          </span>
          )}
        </Paper>
      </Link>
    </div>
  );
}

export default Contract;
