import {Paper} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import FontAwesomeIcons from "../../../styles/FontAwesomeIcons";
import {RemoveButtonStyle} from "./style";

const RemoveButton = () => {
  const theme = useTheme();
  const classes = RemoveButtonStyle(theme);

  return (
    <Paper elevation={3} className={classes.removeButtonWrapper}>
      <i className={`${FontAwesomeIcons.trash}`} />
    </Paper>
  );
};

export default RemoveButton;
