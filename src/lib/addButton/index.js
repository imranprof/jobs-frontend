import {Paper, Tooltip} from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import {useTheme} from "@material-ui/core/styles";

import FontAwesomeIcons from "../../../styles/FontAwesomeIcons";
import {AddButtonStyle} from "./style";

const AddButton = ({tooltipTitle}) => {
  const theme = useTheme();
  const classes = AddButtonStyle(theme);

  return (
    <Tooltip title={tooltipTitle} placement="right" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
      <Paper className={classes.addButtonWrapper}>
        <i className={`${FontAwesomeIcons.plus}`}/>
      </Paper>
    </Tooltip>
  );
};

export default AddButton;
