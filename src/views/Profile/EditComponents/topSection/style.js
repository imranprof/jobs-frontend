import {makeStyles} from "@material-ui/core/styles";
import COLORS from "../../../../../styles/colors";

const useStyles = makeStyles({
  topSectionEditWrapper: theme => ({
    '&__introWrapper': {
      display: "flex",
      alignItems: "center",
      marginBottom: 30,
      '&__input': {
        display: "block",
        width: "50%",
        height: 40,
        color: theme.palette.customColor.main,
        background: "transparent",
        border: `1px solid ${theme.palette.customBorder.editInputElement}`,
        borderRadius: 3,
        fontSize: 16,
        paddingLeft: 10
      },
      '&__fullName': {
        color: theme.palette.customColor.highContrast,
        fontSize: 16,
        marginLeft: 15
      }
    },
    '&__expertisesWrapper': {
      height: "75%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      '&__selectDropdown': {
        color: COLORS.black,
      }
    },
    '&__socialLinks': {
      width: "100%",
      height: 300,
      '&-wrapper': {
        display: "flex",
        alignItems: "center",
        marginBottom: 20
      },
      '&-icon': {
        width: 30,
        height: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 20,
        marginRight: 10
      },
      '&-input': {
        display: "block",
        width: "80%",
        height: 40,
        color: theme.palette.customColor.main,
        background: "transparent",
        border: `1px solid ${theme.palette.customBorder.editInputElement}`,
        borderRadius: 3,
        fontSize: 16,
        paddingLeft: 10
      }
    },
  })
})

export function TopSectionEditStyle(theme) {
  return useStyles(theme);
}
