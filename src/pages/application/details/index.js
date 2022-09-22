import {Paper} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import withLayout from "../../../views/Layout";
import {DetailsStyle} from "./style";

const Details = () => {
  const theme = useTheme();
  const classes = DetailsStyle(theme);

  return (
    <Paper elevation={3} className={classes.detailsWrapper}>
      <h1>Application details</h1>
    </Paper>
  );
};

export default withLayout(Details, '');
