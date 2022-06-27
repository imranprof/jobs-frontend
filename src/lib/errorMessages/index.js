import {useTheme} from "@material-ui/core/styles";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

import {ErrorMessagesStyle} from "./style";

const ErrorMessages = ({error}) => {
  const theme = useTheme();
  const classes = ErrorMessagesStyle(theme);

  return (
    <div className={classes.errorMessagesWrapper}>
      <ErrorOutlineIcon/>
      <p>{error}</p>
    </div>
  );
};

export default ErrorMessages;
