import {connect} from "react-redux";

import {NoSsr} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import withLayout from "../views/Layout";
import {RootStyle} from "../views/PagesStyle/style";
import Banner from "../views/Home/Banner";
import CustomDivider from "../lib/profile/divider/divider";
import BestMatchesJobs from "../views/Home/BestMatchesJobs";
import {getRole} from "../auth/operations";

const Root = (props) => {
  const theme = useTheme();
  const classes = RootStyle(theme);
  const {isAuthenticated} = props
  const role = getRole()

  return (
    <NoSsr>
      <div className={`${classes.rootWrapper}__home`}>
        <Banner />
        <CustomDivider />
        {(role && role === "employee" && isAuthenticated) && <BestMatchesJobs role={role} />}
      </div>
    </NoSsr>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  }
}

export default connect(mapStateToProps)(withLayout(Root));
