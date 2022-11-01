import {makeStyles} from "@material-ui/core/styles";

import FONTS from "../../../../../styles/fonts";

const useStyles = makeStyles({
  contractJobShowWrapper: theme => ({
    background: theme.palette.customBackground.gradiant.light,
    boxShadow: theme.palette.customShadow.main,
    padding: 40,
    marginBottom: 200,
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
    }
  }),
})

export function ContractJobShowStyle(theme) {
  return useStyles(theme);
}
