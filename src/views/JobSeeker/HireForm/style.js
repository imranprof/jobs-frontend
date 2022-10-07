import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  hireFormWrapper: theme => ({
    marginTop: 20,
    '&__heading': {
      marginLeft: 30,
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
      display: "flex",
      marginBottom: 40
    },
    '&__payment-type-box-wrapper': {
      position: "relative",
      border: "1px solid",
      padding: 5,
      borderRadius: 5,
      marginRight: 30,
      minHeight: 125,
      width: 190

    },
    '&__payment-type-icon-wrapper': {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40
    },
    '&__radio-button': {
      '&.Mui-checked':{
        color: theme.palette.customColor.radioButton
      }
    },
    '&__radio-button-wrapper': {
      position: "absolute",
      right: 0,
      top: 0
    },
    '&__hire-rate-wrapper': {
      paddingBottom: 25,
      '& label.Mui-focused': {
        color: theme.palette.customBorder.customInputBorder
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: theme.palette.customBorder.customInputBorder
      },
      '& .MuiFilledInput-underline:after': {
        borderBottomColor: theme.palette.customBorder.customInputBorder
      },
      '& .MuiOutlinedInput-multiline': {
        padding: 0
      },
      '& .MuiOutlinedInput-inputMultiline': {
        padding: 12
      },
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: theme.palette.customBorder.customInputBorder,
        }
      },

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
    },
    '&__pay-type-text': {
      textAlign: "center"
    }
  }),
})

export function HireFormStyle(theme) {
  return useStyles(theme);
}
