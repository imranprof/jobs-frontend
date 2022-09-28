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
        // =========== override react-select ==========
        '& .css-1s2u09g-control, & .css-1pahdxg-control': {
          backgroundColor: "transparent",
        },
        '& #react-select-2-listbox, & .css-26l3qy-menu': {
          backgroundColor: theme.palette.customBackground.light,
        },
        '& .css-1rhbuit-multiValue, & .css-1n7v3ny-option': {
          backgroundColor: theme.palette.customBackground.skillBackground,
        },
        '& .css-12jo7m5, & .css-1pndypt-Input, & .css-qc6sy-singleValue': {
          color: theme.palette.customColor.light,
        },
        // =========== End override react-select =========

        '&__title': {
          color: theme.palette.customColor.modalTitle,
          fontFamily: FONTS.modalTitleFont,
          fontWeight: 400,
          letterSpacing: "1px"
        },
      },
    }
  })
})

export function ResumeAddStyle(theme) {
  return useStyles(theme);
}
