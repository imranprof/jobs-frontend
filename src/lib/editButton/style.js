import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  editButtonWrapper: theme => ({
    width: 35,
    height: 35,
    position: "relative",
    display: "inline-flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: theme.palette.customShadow.main,
    marginLeft: 14,
    zIndex: 1,
    '&::before': {
      position: "absolute",
      content: '""',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: -1,
      transition: "all 0.5s ease-in-out",
      opacity: 0,
      borderRadius: "50%",
    },
    '&:hover::before': {
      opacity: 1,
      background: theme.palette.customBackground.gradiant.light,
      border: `1px solid ${theme.palette.customColor.dark}`
    },
    '& .fa-solid': {
      textAlign: "center",
      fontSize: 16,
      paddingLeft: 3
    },
    '&:hover .fa-solid': {
      color: theme.palette.customColor.light,
    },
  })
});

export function EditButtonStyle(theme) {
  return useStyles(theme);
}
