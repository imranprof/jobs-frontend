import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: 580,
    height: "auto",
    backgroundColor: theme.palette.customBackground.dark,
    borderRadius: 6,
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
    padding: 30,
    outline: "none",
  }
}));

export function EditCustomModalStyle(theme) {
  return useStyles(theme);
}
