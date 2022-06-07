import {useTheme} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

import {CustomButtonsStyle} from "./style";

const CustomButtons = ({handler, mode}) => {
  const theme = useTheme();
  const classes = CustomButtonsStyle(theme);

  return (
    <div className={classes.customButtonsWrapper} >
      <Button size="small" variant="contained" color="primary" onClick={() => handler()} className={`${classes.customButtonsWrapper}__button`} >Save</Button>
      <Button size="small" onClick={() => mode(false)} className={`${classes.customButtonsWrapper}__button`} >Cancel</Button>
    </div>
  );
};

export default CustomButtons;
