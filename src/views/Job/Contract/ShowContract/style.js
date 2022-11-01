import {makeStyles} from "@material-ui/core/styles";

import FONTS from "../../../../../styles/fonts";

const useStyles = makeStyles({
  showContractWrapper: theme => ({
    '&__header-wrapper': {
      width: "100%",
      display: "flex",
      justifyContent: "space-between"
    },
    '&__header': {
      width: 165,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    '&__avatar': {
      width: 40,
      height: 40,
      border: "1px solid"
    },
    '&__name': {
      fontSize: 16,
      margin: 0
    },
    '&__contract-end-btn': {
      backgroundColor: theme.palette.customBackground.buttonBg,
      color: theme.palette.customColor.jobPostBtn,
      marginLeft: 20,
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: theme.palette.customBackground.buttonHoverBg,
      }
    },
    '&__title': {
      fontSize: 20,
      fontFamily: FONTS.modalTitleFont,
      margin: "30px 0 20px 0"
    },
    '&__contracts-tabs-wrapper': {
      display: "flex",
      width: "100%",
    },
    '&__title-tabs-wrapper': {
      margin: "0px 40px",
      '&__title': {
        marginBottom: 5,
        fontSize: 14,
        fontFamily: FONTS.modalTitleFont,
        textAlign: "center",
        letterSpacing: "1px",
      },
      '&__selected-title': {
        marginBottom: 5,
        fontSize: 14,
        fontFamily: FONTS.modalTitleFont,
        textAlign: "center",
        letterSpacing: "1px",
        color: theme.palette.customColor.jobType,
      },
      '&__select-line': {
        border: `1px solid ${theme.palette.customColor.jobType}`,
        borderRadius: 5,
        marginBottom: 0,
        width: 100
      },
      '&__title-wrapper': {
        cursor: "pointer"
      },
      '&__mui-divider': {
        marginBottom: 30
      }
    }
  }),
})

export function ShowContractStyle(theme) {
  return useStyles(theme);
}
