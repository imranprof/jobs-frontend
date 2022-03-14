import {makeStyles} from "@material-ui/core/styles";
import FONTS from "../../../../styles/fonts";
import COLORS from "../../../../styles/colors";

const useStyles = makeStyles({
  profileCardWrapper: theme => ({
    background: theme.palette.customBackground.gradiant.light,
    maxWidth: 250,
    height: "100%",
    borderRadius: 10,
    boxShadow: theme.palette.customShadow.paperCardShadow,
    marginBottom: 30,
    '&__image-wrapper': {
      width: 250,
      height: 150,
    },
    '&__image': {
      height: "100%",
    },
    '&__info': {
      textAlign: "center",
      '&__name': {
        fontSize: 20,
        fontFamily: FONTS.secondaryFont,
        fontWeight: 500,
      },
      '&__designation': {
        fontSize: 12,
        fontFamily: FONTS.secondaryFont,
        fontWeight: 500,
        letterSpacing: "1px"
      },
    },
    '&__rate-info': {
      textAlign: "center",
      '&__hourly': {
        fontSize: 16,
        fontFamily: FONTS.primaryFont,
        fontWeight: 700,
        letterSpacing: "1px",
        color: theme.palette.customColor.hourlyRate
      },
      '&__ratings': {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: FONTS.primaryFont,
        marginTop: 5,
        fontSize: 15,
        '& .MuiSvgIcon-root': {
          fontSize: "1.2rem",
          marginRight: 5,
          color: "green"
        }
      },
      '&__rate': {
        fontWeight: 600,
        marginRight: 5
      }
    },
    '&__button-wrapper': {
      width: "100%",
      height: 48,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: FONTS.secondaryFont,
      fontWeight: 400,
      fontSize: 14,
      letterSpacing: "1px",
      color: theme.palette.customColor.highContrast,
      background: theme.palette.customBackground.seeMoreBtn,
      boxShadow: theme.palette.customShadow.buttonShadow,
      borderRadius: 0,
      transition: "all 0.4s ease",
      '&:hover': {
        background: theme.palette.customBackground.seeMoreBtnHover,
      },
    },
    '&__skills': {
      width: "100%",
      height: 80,
      padding: "0 14px 10px 14px",
      marginBottom: 10,
      textAlign: "center",
      overflowY: "hidden"
    }
  })
});

export function ProfileCardStyle(theme) {
  return useStyles(theme);
}
