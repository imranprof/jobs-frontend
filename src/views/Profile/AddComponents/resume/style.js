import {makeStyles} from "@material-ui/core/styles";

import COLORS from "../../../../../styles/colors";

const useStyles = makeStyles({
  resumeAddWrapper: theme => ({
    '&__top-label': {
      margin: "0 0 30px 0"
    },
    '&__content-wrapper': {
      height: "80%",
      '& .MuiSelect-selectMenu': {
        width: 74,
      },
      '&__addSkill-wrapper': {
        margin: "18px 0",
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
