import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  errorMessageWrapper: theme => ({
    display: "flex",
    alignItems: "start",
    height: 35,
    color: theme.palette.customColor.dangerColor,
    margin: "10px 0",
    '& .MuiSvgIcon-root': {
      width: 18,
      height: 18
    },
    '& > p': {
      margin: "0 0 0 5px"
    }
  })
});

export function ErrorMessageStyle(theme) {
  return useStyles(theme);
}
