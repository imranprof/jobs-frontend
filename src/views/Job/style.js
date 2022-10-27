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
    cursor: "pointer",
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
    '&:hover &__title, &:hover &__description, &:hover &__pay-type, &:hover &__hyphen': {
      color: theme.palette.customColor.featuresHover
    },
    '&__title': {
      color: theme.palette.customColor.highContrast,
      fontSize: 20,
      fontFamily: FONTS.modalTitleFont,
      fontWeight: 500,
      display: "-webkit-box",
      WebkitLineClamp: 1,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
      marginBottom: 30,
      letterSpacing: "1px",
      transition: "all 0.3s ease-in-out",
      [theme.breakpoints.down('xs')]: {
        WebkitLineClamp: 2,
        marginBottom: 20
      },
    },
    '&__pay-type': {
      fontSize: 12,
      fontFamily: FONTS.primaryFont,
      fontWeight: 600,
      color: theme.palette.customColor.dark,
      letterSpacing: "1px",
      transition: "all 0.3s ease-in-out",
    },
    '&__hyphen': {
      color: theme.palette.customColor.dark,
      margin: "0 10px",
      transition: "all 0.3s ease-in-out",
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
      transition: "all 0.3s ease-in-out",
      [theme.breakpoints.down('xs')]: {
        WebkitLineClamp: 2,
        marginBottom: 20
      },
    },
    '&__location': {
      color: theme.palette.customColor.dark,
      marginTop: 30,
      [theme.breakpoints.down('xs')]: {
        marginTop: 20
      },
    },
    '&__total-applied': {
      fontSize: 13,
      fontFamily: FONTS.secondaryFont,
      color: theme.palette.customColor.dark,
      letterSpacing: "1px",
    },
    '&__action-btn': {
      width: 85,
      position: "absolute",
      top: 15,
      right: 15,
      display: "flex",
      justifyContent: "space-between"
    },
  })
});

export function JobStyle(theme) {
  return useStyles(theme);
}
