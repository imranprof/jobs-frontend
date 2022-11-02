import {useRouter} from "next/router";

import {Link} from "@material-ui/core";

const ContractDetails = ({jobContract, classes}) => {
  const router = useRouter()
  const {id} = router.query;
  const {job_type, contract_description, contract_budget} = jobContract
  const contractType = job_type === 'Pay by the hour' ? 'Hourly' : 'Fixed-price'

  return (
    <div>
      <div className={`${classes}__summary`}>
        <h2 className={`${classes}__summary-title`}>Summary</h2>
        <p className={`${classes}__summary-info`}><span>Contract type:</span> {contractType}</p>
        <p className={`${classes}__summary-info`}><span>Rate:</span> ${contract_budget}{contractType === 'Hourly' ? '/hr' : ''}</p>
      </div>
      <div className={`${classes}__description`}>
        <h2 className={`${classes}__description-title`}>Description</h2>
        <p className={`${classes}__description-text`}>{contract_description}</p>
      </div>
      <div className={`${classes}__links`}>
        <Link href={`/job/offer/${id}`} target="_blank" className={`${classes}__links-item`} >View original offer</Link>
      </div>
    </div>
  );
};

export default ContractDetails;
