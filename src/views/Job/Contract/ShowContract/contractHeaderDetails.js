import {Avatar, Button} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import {ShowContractStyle} from "./style";

const ContractHeaderDetails = (props) => {
  const theme = useTheme();
  const classes = ShowContractStyle(theme);
  const {jobContract, jobContractEndHandler} = props
  const {avatar, contract_title, name, contract_status} = jobContract

  return (
    <div>
      <div className={`${classes.showContractWrapper}__header-wrapper`}>
        <div className={`${classes.showContractWrapper}__header`}>
          <Avatar src={avatar} className={`${classes.showContractWrapper}__avatar`} />
          <h4 className={`${classes.showContractWrapper}__name`}>{name}</h4>
        </div>
        <Button
          variant="contained"
          onClick={jobContractEndHandler}
          className={`${classes.showContractWrapper}__contract-end-btn`}
          disabled={contract_status}
        >
          {contract_status ? 'Contract closed' : 'Contract End'}
        </Button>
      </div>

      <h1 className={`${classes.showContractWrapper}__title`}>{contract_title}</h1>
    </div>
  );
};

export default ContractHeaderDetails;
