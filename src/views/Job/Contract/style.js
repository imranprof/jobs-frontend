import {makeStyles} from "@material-ui/core/styles";

import FONTS from "../../../../styles/fonts";

const useStyles = makeStyles({
  contractWrapper: theme => ({
    position: "relative",
    height: "100%",
    textAlign: "left",
    background: theme.palette.customBackground.gradiant.light,
    boxShadow: theme.palette.customShadow.paperCardShadow,
    borderRadius: 10,
    zIndex: 1,
    padding: "15px 15px 30px 30px",
    marginBottom: 10,
    width: "60%",
    cursor: "pointer",
    [theme.breakpoints.down('sm')]: {
      width: "100%"
    },
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
    '&__title': {
      color: theme.palette.customColor.highContrast,
      fontFamily: FONTS.modalTitleFont,
      fontWeight: 500,
    },
    '&__hired-by, &__rate': {
      display: "block",
      fontSize: 14,
      fontFamily: FONTS.jobDescriptionFont,
      fontWeight: 500,
      marginBottom: 10
    },
    '&__link:hover': {
      textDecoration: "none"
    }
  })
});

export function ContractStyle(theme) {
  return useStyles(theme);
}
