import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: 500,
    height: 400,
    backgroundColor: theme.palette.customBackground.dark,
    borderRadius: 6,
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
    padding: theme.spacing(2, 4, 3),
    outline: "none",
  },
  modalInput: {
    display: "block",
    width: "50%",
    height: 40,
    color: theme.palette.customColor.main,
    background: "transparent",
    border: `1px solid ${theme.palette.customBorder.editInputElement}`,
    borderRadius: 3,
    fontSize: 16,
    paddingLeft: 10
  },
  introWrapper: {
    display: "flex",
    alignItems: "center",
    margin: "30px 0"
  },
  fullNameText: {
    color: theme.palette.customColor.highContrast,
    fontSize: 16,
    marginLeft: 15
  },
  multiSelectDropdown: {
    color: "#000",
    marginBottom: 20
  },
  expertisesWrapper: {
    height: "75%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }
}));

export function MuiCustomModalStyle(theme) {
  return useStyles(theme);
}
