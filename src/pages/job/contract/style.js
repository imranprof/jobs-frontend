import {makeStyles} from "@material-ui/core/styles";

import FONTS from "../../../../styles/fonts";

const useStyles = makeStyles({
  allContractsWrapper: theme => ({
    '&__contracts-wrapper': {
      display: "flex",
      width: "100%"
    },
    '&__contract-title-wrapper': {
      margin: "0px 50px",
      [theme.breakpoints.down('xs')]: {
        margin: "0px 30px",
      },
    },
    '&__title': {
      marginBottom: 5,
      fontFamily: FONTS.modalTitleFont,
      textAlign: "center",
      letterSpacing: "1px",
      [theme.breakpoints.down('sm')]: {
        fontSize: 14
      }
    },
    '&__selected-title': {
      marginBottom: 5,
      fontFamily: FONTS.modalTitleFont,
      textAlign: "center",
      letterSpacing: "1px",
      color: theme.palette.customColor.jobType,
      [theme.breakpoints.down('sm')]: {
        fontSize: 14
      }
    },
    '&__select-line': {
      border: `1px solid ${theme.palette.customColor.jobType}`,
      borderRadius: 5,
      marginBottom: 0,
      width: 120
    },
    '&__title-wrapper': {
      cursor: "pointer"
    },
    '&__mui-divider': {
      marginBottom: 30
    }
  }),
})

export function AllContractsStyle(theme) {
  return useStyles(theme);
}
