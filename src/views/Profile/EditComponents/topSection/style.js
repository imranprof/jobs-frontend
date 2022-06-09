import {makeStyles} from "@material-ui/core/styles";
import COLORS from "../../../../../styles/colors";

const useStyles = makeStyles({
  topSectionEditWrapper: theme => ({
    '&__introWrapper': {
      display: "flex",
      alignItems: "center",
      margin: "30px 0",
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
    }
  })
})

export function TopSectionEditStyle(theme) {
  return useStyles(theme);
}
