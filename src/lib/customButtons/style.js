import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  customButtonsWrapper: theme => ({
    width: "85%",
    marginBottom: 15,
    '&__button': {
      textTransform: "capitalize",
      marginRight: 6,
      padding: "3px 0"
    }
  })
});

export function CustomButtonsStyle(theme) {
  return useStyles(theme);
}
