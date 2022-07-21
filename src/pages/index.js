import {useTheme} from "@material-ui/core/styles";

import withLayout from "../views/Layout";
import {RootStyle} from "./style";

const Root = () => {
  const theme = useTheme();
  const classes = RootStyle(theme);

  return (
    <div className={`${classes.rootWrapper}__home`}>
      <h1>Home Page</h1>
    </div>
  )
}
export default withLayout(Root);
