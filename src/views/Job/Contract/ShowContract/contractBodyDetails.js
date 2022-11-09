import React, {useState} from 'react';

import Divider from "@material-ui/core/Divider";
import {useTheme} from "@material-ui/core/styles";

import {ShowContractStyle} from "./style";
import ContractDetails from "./contractDetails";
import ContractFeedback from "./contractFeedback";
import ContractTimesheet from "./contractTimesheet";

const ContractBodyDetails = (props) => {
  const theme = useTheme();
  const classes = ShowContractStyle(theme);
  const {jobContract} = props
  const {contract_status} = jobContract
  const [cardType, setCardType] = useState('details')

  const handleCardType = (type) => {
    setCardType(type)
  }

  return (
    <>
      <div>
        <div className={`${classes.showContractWrapper}__contracts-tabs-wrapper`}>
          <div className={`${classes.showContractWrapper}__title-tabs-wrapper`}>
                <span onClick={() => handleCardType('details')}
                      className={`${classes.showContractWrapper}__title-tabs-wrapper__title-wrapper`}><h3
                  className={cardType === 'details' ? `${classes.showContractWrapper}__title-tabs-wrapper__selected-title` : `${classes.showContractWrapper}__title-tabs-wrapper__title`}>Details</h3></span>
            {cardType === 'details' &&
            <hr className={`${classes.showContractWrapper}__title-tabs-wrapper__select-line`}/>}
          </div>
          {contract_status &&
          <div>
                <span onClick={() => handleCardType('feedback')}
                      className={`${classes.showContractWrapper}__title-tabs-wrapper__title-wrapper`}><h3
                  className={cardType === 'feedback' ? `${classes.showContractWrapper}__title-tabs-wrapper__selected-title` : `${classes.showContractWrapper}__title-tabs-wrapper__title`}>Feedback</h3></span>
            {cardType === 'feedback' &&
            <hr className={`${classes.showContractWrapper}__title-tabs-wrapper__select-line`}/>}
          </div>}
          <div className={`${classes.showContractWrapper}__title-tabs-wrapper`}>
                <span onClick={() => handleCardType('timesheet')}
                      className={`${classes.showContractWrapper}__title-tabs-wrapper__title-wrapper`}><h3
                  className={cardType === 'timesheet' ? `${classes.showContractWrapper}__title-tabs-wrapper__selected-title` : `${classes.showContractWrapper}__title-tabs-wrapper__title`}>Timesheet</h3></span>
            {cardType === 'timesheet' &&
            <hr className={`${classes.showContractWrapper}__title-tabs-wrapper__select-line`}/>}
          </div>
        </div>
        <Divider className={`${classes.showContractWrapper}__title-tabs-wrapper__mui-divider`}/>
      </div>

      {cardType === 'feedback' ? (
        <ContractFeedback classes={`${classes.showContractWrapper}__title-tabs-wrapper`} jobContract={jobContract}/>
      ) : cardType === 'details' ? (
        <ContractDetails classes={`${classes.showContractWrapper}__title-tabs-wrapper`} jobContract={jobContract} />
      ) : (
        <ContractTimesheet classes={`${classes.showContractWrapper}__title-tabs-wrapper`} jobContractId={jobContract.id} />
      )}
    </>
  );
};

export default ContractBodyDetails;
