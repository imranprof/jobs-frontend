import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  customSnackbarWrapper: theme => ({
    '& .MuiAlert-root': {
      height: 40,
      alignItems: "center",
    },
    '& .MuiAlert-standardError': {
      color: "#842029",
      backgroundColor: "rgba(248,215,218,0.8)",
      '& .MuiAlert-icon': {
        color: "#842029",
      }
    },
    '& .MuiAlert-standardSuccess': {
      color: "#055160",
      backgroundColor: "rgba(207,244,252,0.8)",
      opacity: 0.8,
      '& .MuiAlert-icon': {
        color: "#055160",
      }
    }
  })
});

export function CustomSnackbarStyle(theme) {
  return useStyles(theme);
}
