import {useTheme} from "@material-ui/core/styles";

import withLayout from "../views/Layout";
import {RootStyle} from "./style";
import Banner from "../views/Home/Banner";
import CustomDivider from "../lib/profile/divider/divider";

const Root = () => {
  const theme = useTheme();
  const classes = RootStyle(theme);

  return (
    <div className={`${classes.rootWrapper}__home`}>
      <Banner />
      <CustomDivider />
    </div>
  )
}
export default withLayout(Root);
