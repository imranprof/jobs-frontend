import {useContext} from 'react';

import Button from '@material-ui/core/Button';

import ThemeContextProvider from "../../contexts/themeContext";
import {CustomButtonsStyle} from "./style";

const CustomButtons = ({handler, mode}) => {
  const customTheme = useContext(ThemeContextProvider);
  const classes = CustomButtonsStyle(customTheme);

  return (
    <div className={classes.customButtonsWrapper} >
      <Button size="small" variant="contained" color="primary" onClick={() => handler()} className={`${classes.customButtonsWrapper}__button`} >Save</Button>
      <Button size="small" onClick={() => mode(false)} className={`${classes.customButtonsWrapper}__button`} >Cancel</Button>
    </div>
  );
};

export default CustomButtons;
