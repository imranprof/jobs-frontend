import {Paper} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import FontAwesomeIcons from "../../../styles/FontAwesomeIcons";
import {AddButtonStyle} from "./style";

const AddButton = () => {
  const theme = useTheme();
  const classes = AddButtonStyle(theme);

  return (
    <Paper className={classes.addButtonWrapper}>
      <i className={`${FontAwesomeIcons.plus}`}/>
    </Paper>
  );
};

export default AddButton;
