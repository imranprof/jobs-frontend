import {makeStyles} from "@material-ui/core/styles";

import FONTS from "../../../styles/fonts";

export const useStyles = makeStyles({
  modalTitleWrapper: theme => ({
    color: theme.palette.customColor.modalTitle,
    fontFamily: FONTS.modalTitleFont,
    fontWeight: 400,
    letterSpacing: "1px"
  })
});

export function ModalTitleStyle(theme) {
  return useStyles(theme);
}
