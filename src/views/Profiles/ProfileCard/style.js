import {makeStyles} from "@material-ui/core/styles";
import FONTS from "../../../../styles/fonts";

const useStyles = makeStyles({
  profileCardWrapper: theme => ({
    background: theme.palette.customBackground.gradiant.light,
    maxWidth: 280,
    height: "100%",
    borderRadius: 10,
    boxShadow: theme.palette.customShadow.paperCardShadow,
    marginBottom: 30,
    '&__image-wrapper': {
      width: 280,
      height: 150,
    },
    '&__image': {
      height: "100%",
    },
    '&__rate-info': {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    '&__button-wrapper': {
      width: "100%",
      height: 45,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  })
});

export function ProfileCardStyle(theme) {
  return useStyles(theme);
}
