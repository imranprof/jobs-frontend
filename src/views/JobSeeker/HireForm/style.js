import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  hireFormWrapper: theme => ({
    marginTop: 20,
    '&__heading': {
      marginLeft: 40,
      paddingTop: 20
    },
    '&__divider': {
      marginBottom: 10
    },
    '&__payment-option-rate-wrapper': {
      marginLeft: 30,
      width: "90%"
    },
    '&__payment-option-wrapper': {
      display: "flex"
    },
    '&__payment-type-box-wrapper': {
      display: "flex",
      border: "1px solid",
      padding: 5,
      borderRadius: 5,
      marginRight: 10,
      minHeight: 125,

    },
    '&__payment-type-icon-wrapper': {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    '&__radio-button': {
      '&.Mui-checked':{
        color: theme.palette.customColor.radioButton
      }
    },
    '&__hire-rate-wrapper': {
      paddingBottom: 25
    },
    '&__hire-rate-title': {
      marginBottom: 5
    },
    '&__hire-rate-button-wrapper': {
      display: "flex",
      alignItems: "center",
    },
    '&__hire-rate': {
      marginRight: 10
    },
    '&__edit-button': {
      cursor: "pointer"
    }
  }),
})

export function HireFormStyle(theme) {
  return useStyles(theme);
}
