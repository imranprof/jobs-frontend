import {makeStyles} from "@material-ui/core/styles";

import FONTS from "../../../../styles/fonts";

const useStyles = makeStyles({
  featureWrapper: theme => ({
    display: "flex",
    '&__btn': {
      marginBottom: 25
    },
    '&__item': {
      width: "100%",
      display: "flex",
      '& a': {
        width: "93%",
        minHeight: 340,
        textDecoration: "none",
        marginBottom: 50
      },
      [theme.breakpoints.down('xs')]: {
        minHeight: 270,
        justifyContent: "center",
        marginBottom: 20,
        '& a': {
          minHeight: 250,
          marginBottom: 0
        }
      },
    },
    '&__feature': {
      position: "relative",
      height: "100%",
      textAlign: "left",
      background: theme.palette.customBackground.gradiant.light,
      boxShadow: theme.palette.customShadow.paperCardShadow,
      borderRadius: 10,
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
      '&:hover &__content__title, &:hover &__content__description, &:hover &__icon': {
        color: theme.palette.customColor.featuresHover
      },
      '&__icon': {
        width: "100%",
        fontSize: 40,
        color: theme.palette.customColor.highContrast,
        marginBottom: 10,
        transition: "color 0.4s ease",
      },
      '&__content': {
        height: 200,
        '&__title': {
          width: "100%",
          maxHeight: 63,
          color: theme.palette.customColor.main,
          fontSize: 22,
          fontWeight: 500,
          fontFamily: FONTS.secondaryFont,
          letterSpacing: 1,
          textTransform: "capitalize",
          marginTop: 0,
          transition: "color 0.4s ease 0s",
          overflowWrap: "break-word",
          whiteSpace: "break-spaces",
          overflow: "auto",
        },
        '&__description': {
          height: 120,
          color: theme.palette.customColor.main,
          fontSize: 16,
          fontFamily: FONTS.secondaryFont,
          lineHeight: "24px",
          transition: "color 0.4s ease 0s",
          margin: 0,
        },
        [theme.breakpoints.down('xs')]: {
          '&__title': {
            fontSize: 18,
            marginBottom: 15,
          },
          '&__description': {
            fontSize: 14,
            lineHeight: "20px",
            marginBottom: 15
          },
        },
      },
      '&-wrapper': {
        height: "100%",
        padding: "65px 40px 15px",
        transition: "all 0.4s ease 0s",
        '&__action-btn': {
          width: 85,
          position: "absolute",
          top: 15,
          right: 15,
          display: "flex",
          justifyContent: "space-between"
        },
        [theme.breakpoints.down('xs')]: {
          padding: 0
        }
      },
      [theme.breakpoints.down('xs')]: {
        display: "flex",
        alignItems: "center",
        height: "100%",
        padding: "30px 30px 0 30px",
        '&__icon': {
          fontSize: 30,
          marginBottom: 20,
        },
      },
    },
  })
});

export function FeatureStyle(theme) {
  return useStyles(theme);
}
