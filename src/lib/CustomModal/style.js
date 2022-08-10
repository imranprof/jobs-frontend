import {makeStyles} from "@material-ui/core/styles";

import FONTS from "../../../styles/fonts";

const useStyles = makeStyles({
  modalStyle: theme => ({
    '&__body': {
      position: "fixed",
      display: "block",
      background: theme.palette.customBackground.light,
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      overflowX: "hidden",
      overflowY: "auto",
      outline: 0,
      padding: "60px 15px",
      zIndex: 99999999,
      '&__top': {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 40,
        '&-title': {
          color: theme.palette.customColor.modalTitle,
          fontSize: 24,
          fontFamily: FONTS.modalTitleFont,
          letterSpacing: "2px"
        },
        '&-select': {
          width: 440,
          justifyContent: "space-between",
          flexDirection: "row",
          '& .MuiTypography-body1': {
            color: theme.palette.customColor.modalTitle,
            fontFamily: FONTS.modalTitleFont,
            letterSpacing: "1px"
          }
        }
      }
    },
    '&__dialog': {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "auto",
      width: "100%",
      maxWidth: 1000,
      minHeight: "calc(100% - 18.5rem)",
    },
    '&__modal-content': {
      position: "relative",
      padding: 45,
      marginTop: -70,
      width: "60%",
      border: "none",
      borderRadius: 10,
      fontFamily: FONTS.secondaryFont,
      background: theme.palette.customBackground.gradiant.light,
      boxShadow: theme.palette.customShadow.paperCardShadow,
      transition: ".2s linear",
      '&--visible': {
        marginTop: 0,
      },
      '&__close-icon': {
        position: "absolute",
        top: 5,
        right: 6,
        background: theme.palette.customBackground.gradiant.light,
        color: theme.palette.customColor.dark,
        transition: ".3s ease",
        [theme.breakpoints.down(767)]: {
          top: 2,
          right: 9,
        },
        '&:hover': {
          background: theme.palette.customHoverBackground.closeIcon,
          color: theme.palette.customHoverColor.main,
        }
      },
      '& .MuiTextField-root': {
        marginBottom: 15,
        '& label': {
          fontFamily: FONTS.secondaryFont,
          color: theme.palette.customColor.dark
        },
        '& .MuiInputBase-input': {
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 100px #266798 inset',
          },
          backgroundColor: theme.palette.customBackground.dark,
          color: theme.palette.customColor.main,
          boxShadow: theme.palette.customShadow.dark,
          fontSize: 14,
          fontFamily: FONTS.primaryFont,
          transition: "all 0.4s",
          border: `2px solid ${theme.palette.customColor.inputBorder}`,
          borderRadius: 6,
        },
        '& fieldset, &:hover fieldset, & .MuiOutlinedInput-root.Mui-focused fieldset': {
          borderColor: theme.palette.customColor.inputBorder
        },
      },
      '& .MuiButton-root': {
        background: theme.palette.customBackground.gradiant.light,
        boxShadow: theme.palette.customShadow.paperCardShadow,
        color: theme.palette.customColor.highContrast,
        transition: "all .4s ease",
        fontFamily: FONTS.secondaryFont,
        fontSize: 15,
        fontWeight: 400,
        borderRadius: 6,
        height: 45,
        '&:hover': {
          color: theme.palette.customHoverColor.main,
          background: theme.palette.customHoverBackground.main,
          transform: "translateY(-5px)",
        },
      },
      [theme.breakpoints.down('sm')]: {
        width: "70%"
      },
      [theme.breakpoints.down('xs')]: {
        width: "95%",
        padding: "60px 20px 24px 20px"
      },
    }
  })
});

export function ModalStyle(theme) {
  return useStyles(theme);
}
