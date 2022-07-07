import {Paper} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import FontAwesomeIcons from "../../../styles/FontAwesomeIcons";
import {EditButtonStyle} from "./style";

const EditButton = () => {
  const theme = useTheme();
  const classes = EditButtonStyle(theme);

  return (
    <Paper elevation={3} className={classes.editButtonWrapper}>
      <i className={`${FontAwesomeIcons.pencil}`} />
    </Paper>
  )
}

export default EditButton;
