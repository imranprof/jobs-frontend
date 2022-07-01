import {Snackbar} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import {Alert} from "@material-ui/lab";

import {CustomSnackbarStyle} from "./style";
import {useState} from "react";

const CustomSnackbar = ({
                          toast, setToast
                        }) => {
  const theme = useTheme();
  const classes = CustomSnackbarStyle(theme);

  const handleClose = () => {
    setToast({show: false, severity: "", text: ""})
  }

  return (
    <div className={classes.customSnackbarWrapper}>
      <Snackbar open={toast.show} autoHideDuration={2000} onClose={handleClose}>
        <Alert severity={toast.severity} onClose={handleClose}>
          {toast.text}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomSnackbar;