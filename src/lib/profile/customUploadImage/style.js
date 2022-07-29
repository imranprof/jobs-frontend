import {makeStyles} from "@material-ui/core/styles";

import COLORS from "../../../../styles/colors";
import FONTS from "../../../../styles/fonts";

export const useStyles = makeStyles({
  customUploadImageWrapper: theme => ({
    display: "flex",
    marginBottom: 8,
    '&__input': {
      display: "none"
    },
    '&__upload-btn': {
      margin: "8px 8px 8px 0",
    },
    '&__uploaded-msg': {
      color: COLORS.success,
      fontSize: 15,
      marginLeft: 10,
      letterSpacing: "1px",
      '&__init': {
        fontSize: 15,
        fontFamily: FONTS.modalTitleFont,
        fontWeight: 300,
        marginLeft: 10,
        letterSpacing: "1px"
      }
    }
  })
});

export function CustomUploadImageStyle(theme) {
  return useStyles(theme);
}
