import {Paper, Tooltip} from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import {useTheme} from "@material-ui/core/styles";

import FontAwesomeIcons from "../../../styles/FontAwesomeIcons";
import {EditButtonStyle} from "./style";

const EditButton = () => {
  const theme = useTheme();
  const classes = EditButtonStyle(theme);

  return (
    <Tooltip title="Edit" placement="top" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
      <Paper elevation={3} className={classes.editButtonWrapper}>
        <i className={`${FontAwesomeIcons.pencil}`} />
      </Paper>
    </Tooltip>
  )
}

export default EditButton;
