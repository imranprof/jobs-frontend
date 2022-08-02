import {makeStyles} from "@material-ui/core/styles";

import COLORS from "../../../../../styles/colors";
import FONTS from "../../../../../styles/fonts";

const useStyles = makeStyles({
  resumeAddWrapper: theme => ({
    '&__top-label': {
      margin: "0 0 30px 0"
    },
    '&__content-wrapper': {
      height: 250,
      '& .MuiSelect-selectMenu': {
        width: 74,
      },
      '&__addSkill-wrapper': {
        margin: "18px 0",
        '&__title': {
          color: theme.palette.customColor.modalTitle,
          fontFamily: FONTS.modalTitleFont,
          fontWeight: 400,
          letterSpacing: "1px"
        },
        '&__selectDropdown': {
          color: COLORS.black,
        }
      },
    }
  })
})

export function ResumeAddStyle(theme) {
  return useStyles(theme);
}
