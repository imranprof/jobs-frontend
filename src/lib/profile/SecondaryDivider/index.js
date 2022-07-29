import {useTheme} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import {SecondaryDividerStyle} from "./style";

const SecondaryDivider = () => {
  const theme = useTheme();
  const classes = SecondaryDividerStyle(theme);
  return (
    <Divider className={classes.secondaryDivider}/>
  );
};

export default SecondaryDivider;
