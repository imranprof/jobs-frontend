import React, {useState} from 'react';

import Divider from "@material-ui/core/Divider";
import {useTheme} from "@material-ui/core/styles";

import {ShowContractStyle} from "./style";
import ContractDetails from "./contractDetails";
import ContractFeedback from "./contractFeedback";

const ContractBodyDetails = (props) => {
  const theme = useTheme();
  const classes = ShowContractStyle(theme);
  const {jobContract} = props
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
            {cardType === 'details' && <hr className={`${classes.showContractWrapper}__title-tabs-wrapper__select-line`}/>}
          </div>
          <div>
                <span onClick={() => handleCardType('feedback')}
                      className={`${classes.showContractWrapper}__title-tabs-wrapper__title-wrapper`}><h3
                  className={cardType === 'feedback' ? `${classes.showContractWrapper}__title-tabs-wrapper__selected-title` : `${classes.showContractWrapper}__title-tabs-wrapper__title`}>Feedback</h3></span>
            {cardType === 'feedback' && <hr className={`${classes.showContractWrapper}__title-tabs-wrapper__select-line`}/>}
          </div>
        </div>
        <Divider className={`${classes.showContractWrapper}__title-tabs-wrapper__mui-divider`}/>
      </div>

      {cardType === 'feedback' ? (
        <ContractFeedback classes={`${classes.showContractWrapper}__title-tabs-wrapper`} jobContract={jobContract} />
      ) : (
        <ContractDetails classes={`${classes.showContractWrapper}__title-tabs-wrapper`} jobContract={jobContract} />
      )}
    </>
  );
};

export default ContractBodyDetails;
