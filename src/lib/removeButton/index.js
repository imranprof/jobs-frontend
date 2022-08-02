import {Paper, Tooltip} from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import {useTheme} from "@material-ui/core/styles";

import FontAwesomeIcons from "../../../styles/FontAwesomeIcons";
import {RemoveButtonStyle} from "./style";

const RemoveButton = () => {
  const theme = useTheme();
  const classes = RemoveButtonStyle(theme);

  return (
    <Tooltip title="Delete" placement="top" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
      <Paper elevation={3} className={classes.removeButtonWrapper}>
        <i className={`${FontAwesomeIcons.trash}`} />
      </Paper>
    </Tooltip>
  );
};

export default RemoveButton;
