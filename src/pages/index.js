import {useTheme} from "@material-ui/core/styles";

import withLayout from "../views/Layout";
import {RootStyle} from "./style";
import Banner from "../views/Home/Banner";
import CustomDivider from "../lib/profile/divider/divider";
import BestMatchesJobs from "../views/Home/BestMatchesJobs";

const Root = () => {
  const theme = useTheme();
  const classes = RootStyle(theme);

  return (
    <div className={`${classes.rootWrapper}__home`}>
      <Banner />
      <CustomDivider />
      <BestMatchesJobs />
    </div>
  )
}
export default withLayout(Root);
