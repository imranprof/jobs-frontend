import {useContext} from "react";

import {Paper} from "@material-ui/core";

import ThemeContextProvider from "../../contexts/themeContext";
import FontAwesomeIcons from "../../../styles/FontAwesomeIcons";
import {EditButtonStyle} from "./style";

const EditButton = () => {
  const customTheme = useContext(ThemeContextProvider);
  const classes = EditButtonStyle(customTheme);

  return (
    <Paper elevation={3} className={classes.editButtonWrapper}>
      <i className={`${FontAwesomeIcons.pencil}`} />
    </Paper>
  )
}

export default EditButton;
