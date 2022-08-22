import {makeStyles} from "@material-ui/core/styles";

import FONTS from "../../../styles/fonts";

const useStyles = makeStyles({
  jobWrapper: theme => ({
    position: "relative",
    height: "100%",
    textAlign: "left",
    background: theme.palette.customBackground.gradiant.light,
    boxShadow: theme.palette.customShadow.paperCardShadow,
    borderRadius: 10,
    padding: 30,
    marginBottom: 30,
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
      background: theme.palette.customBackground.gradiant.dark,
      borderRadius: 10,
    },
    '&:hover::before': {
      opacity: 1,
      background: theme.palette.customBackground.gradiant.dark,
    },
    '&:hover &__title, &:hover &__description, &:hover &__location': {
      color: theme.palette.customColor.featuresHover
    },
    '&__title': {
      color: theme.palette.customColor.highContrast,
      fontSize: 20,
      fontFamily: FONTS.modalTitleFont,
      fontWeight: 500,
      marginBottom: 30,
      letterSpacing: "1px"
    },
    '&__description, &__location': {
      color: theme.palette.customColor.main,
      letterSpacing: "1px"
    },
    '&__description': {
      maxWidth: "100%",
      display: "-webkit-box",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
      marginBottom: 30,
    },
    '&__location': {
      marginTop: 30
    }
  })
});

export function JobStyle(theme) {
  return useStyles(theme);
}
