import {makeStyles} from "@material-ui/core/styles";
import FONTS from "../../../../../styles/fonts";


const useStyles = makeStyles({
  jobOfferShowWrapper: theme => ({
    display: "flex",
    backgroundColor: theme.palette.customBackground.hirePaperBg,
    width: "80%",
    [theme.breakpoints.down('xs')]: {
      width: "100%",
    },
    '&__offer-details-wrapper': {
      padding: 15,
      width: "100%"
    },
    '&__title-description-wrapper': {
      display: "flex"
    },
    '&__title': {
      marginRight: 20,
      fontFamily: FONTS.jobDescriptionFont
    },
    '&__description': {
      fontFamily: FONTS.jobDescriptionFont
    },

    '&__accept-btn': {
      color: "white",
      backgroundColor: theme.palette.customColor.confirmButton,
      marginRight: 10,
      marginBottom: 10,
      '&:hover': {
        backgroundColor: theme.palette.customBackground.buttonHover
      }
    },
    '&__decline-btn': {
      marginBottom: 10
    },
    '&__buttons-details-wrapper': {
      display: "flex",
      justifyContent: "space-between"
    }
  })
});

export function JobOfferShowStyle(theme) {
  return useStyles(theme);
}
