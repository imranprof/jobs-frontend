import {useTheme} from "@material-ui/core/styles";

import {ErrorMessagesStyle} from "./style";

const ErrorMessages = ({error}) => {
  const theme = useTheme();
  const classes = ErrorMessagesStyle(theme);

  return (
    <div className={classes.errorMessagesWrapper}>
      {error}
    </div>
  );
};

export default ErrorMessages;
