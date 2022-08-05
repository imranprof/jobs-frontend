import {useTheme} from "@material-ui/core/styles";

import withLayout from "../views/Layout";
import {RootStyle} from "./style";
import Banner from "../views/Home/Banner";

const Root = () => {
  const theme = useTheme();
  const classes = RootStyle(theme);

  return (
    <div className={`${classes.rootWrapper}__home`}>
      <Banner />
    </div>
  )
}
export default withLayout(Root);
