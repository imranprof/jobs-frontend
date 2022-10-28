import withLayout from "../../../views/Layout";
import {useTheme} from "@material-ui/core/styles";
import {AllContractsStyle} from "./style";
import {connect} from "react-redux";
import {getRole} from "../../../auth/operations";
import SectionHeader from "../../../lib/sectionHeader";
import Divider from "@material-ui/core/Divider";
import Job from "../../../views/Job";
import {NoSsr} from "@material-ui/core";

const Contracts = (props) => {
  const theme = useTheme();
  const classes = AllContractsStyle(theme);
  const {isAuthenticated} = props
  const role = getRole()

  const authTitle = 'You are not authorized to view this page!'

  return (
    <NoSsr>
      {(role && role === "employee" && isAuthenticated) ? (
          <>
            <SectionHeader title={'All Contracts'}/>

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
  }
}

export default connect(mapStateToProps)(withLayout(Contracts));
