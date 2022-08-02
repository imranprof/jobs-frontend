import {useTheme} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import {EditModalDividerStyle} from "./style";

const EditModalDivider = () => {
  const theme = useTheme();
  const classes = EditModalDividerStyle(theme);
  return (
    <Divider className={classes.editModalDivider}/>
  );
};

export default EditModalDivider;
