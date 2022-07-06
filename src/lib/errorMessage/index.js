import {useTheme} from "@material-ui/core/styles";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

import {ErrorMessageStyle} from "./style";

const ErrorMessage = ({error}) => {
  const theme = useTheme();
  const classes = ErrorMessageStyle(theme);

  return (
    <div className={classes.errorMessageWrapper}>
      <ErrorOutlineIcon/>
      <p>{error}</p>
    </div>
  );
};

export default ErrorMessage;
