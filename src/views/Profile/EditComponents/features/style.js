import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  featuresEditWrapper: theme => ({
    '&__top-label': {
      marginTop: 0
    },
    '&__content-wrapper': {
      height: 260
    },
    '&__title': {
      height: 40,
      paddingLeft: 10
    },
    '&__description': {
      height: 110,
      padding: 10,
      resize: "none"
    },
    '&__title, &__description': {
      display: "block",
      width: "100%",
      color: theme.palette.customColor.main,
      background: "transparent",
      border: `1px solid ${theme.palette.customBorder.editInputElement}`,
      borderRadius: 3,
      fontSize: 16,
    },
    '&__content-label': {
      margin: "15px 0 10px 0"
    }
  }),
})

export function FeaturesEditStyle(theme) {
  return useStyles(theme);
}
