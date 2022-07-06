import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  editButtonWrapper: theme => ({
    width: 35,
    height: 35,
    position: "relative",
    display: "inline-flex",
    borderRadius: "50%",
    background: theme.palette.customBackground.gradiant.light,
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: theme.palette.customShadow.main,
    transition: "all 0.3s ease",
    zIndex: 1,
    '&::before': {
      position: "absolute",
      content: '""',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: -1,
      opacity: 0,
      borderRadius: "50%",
    },
    '&:hover': {
      transform: "translateY(-2px)",
    },
    '&:hover::before': {
      opacity: 1,
      background: theme.palette.customBackground.gradiant.dark,
    },
    '& .fa-solid': {
      textAlign: "center",
      fontSize: 14,
      marginLeft: 3,
      color: theme.palette.customColor.main,
      transition: "all 0.3s ease",
    },
    '&:hover .fa-solid': {
      color: theme.palette.customHoverColor.light
    },
  })
});

export function EditButtonStyle(theme) {
  return useStyles(theme);
}
