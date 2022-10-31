import {useEffect, useState} from "react";
import {connect, useDispatch} from "react-redux";

import {NoSsr} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import {useTheme} from "@material-ui/core/styles";

import withLayout from "../../../views/Layout";
import {AllContractsStyle} from "./style";
import {getRole} from "../../../auth/operations";
import SectionHeader from "../../../lib/sectionHeader";
import {
  getAllJobProgress,
  getAllCompletedJobs
} from "../../../store/actions/jobAction";
import Contract from "../../../views/Job/Contract";

const Contracts = (props) => {
  const theme = useTheme();
  const classes = AllContractsStyle(theme);
  const dispatch = useDispatch()
  const {isAuthenticated, inProgressContracts, completedContracts} = props
  const [cardType, setCardType] = useState('in-progress')
  const role = getRole()

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getAllJobProgress());
      dispatch(getAllCompletedJobs());
    }
  }, [])

  const handleCardType = (type) => {
    setCardType(type)
  }

  const authTitle = 'You are not authorized to view this page!'

  return (
    <NoSsr>
      {(isAuthenticated) ? (
          <>
            <SectionHeader title={'All Contracts'}/>

            <div>
              <div className={`${classes.allContractsWrapper}__contracts-wrapper`}>
                <div className={`${classes.allContractsWrapper}__contract-title-wrapper`}>
                <span onClick={() => handleCardType('in-progress')}
                      className={`${classes.allContractsWrapper}__title-wrapper`}><h3
                  className={cardType === 'in-progress' ? `${classes.allContractsWrapper}__selected-title` : `${classes.allContractsWrapper}__title`}>In-progress</h3></span>
                  {cardType === 'in-progress' && <hr className={`${classes.allContractsWrapper}__select-line`}/>}
                </div>
                <div>
                <span onClick={() => handleCardType('completed')}
                      className={`${classes.allContractsWrapper}__title-wrapper`}><h3
                  className={cardType === 'completed' ? `${classes.allContractsWrapper}__selected-title` : `${classes.allContractsWrapper}__title`}>Completed</h3></span>
                  {cardType === 'completed' && <hr className={`${classes.allContractsWrapper}__select-line`}/>}
                </div>
              </div>
              <Divider className={`${classes.allContractsWrapper}__mui-divider`}/>
            </div>

            {cardType === 'completed' ? completedContracts.map((contract) => <Contract key={contract.id} contract={contract} role={role}/>)
                :
                inProgressContracts.map((contract) => <Contract key={contract.id} contract={contract} role={role}/>)
            }
          </>) :
        (
          <div><SectionHeader title={authTitle}/></div>
        )
      }
    </NoSsr>
  );
};

const mapStateToProps = (state) => {
  return {
    initialLoader: state.allJobs.initialLoader,
    isAuthenticated: state.auth.isAuthenticated,
    inProgressContracts: state.allJobs.inProgressJobsList,
    completedContracts: state.allJobs.completedJobsList,
  }
}

export default connect(mapStateToProps)(withLayout(Contracts));
