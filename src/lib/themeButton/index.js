import {useTheme} from "@material-ui/core/styles";
import {IconButton, NoSsr, Tooltip} from "@material-ui/core";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

import FontAwesomeIcons from "../../../styles/FontAwesomeIcons";
import {ThemeButtonStyle} from "./style";

const ThemeButton = ({themeMode, setDarkMode}) => {
  const theme = useTheme();
  const classes = ThemeButtonStyle(theme);

  // LocalStorage
  const setTheme = (str) => {
    if (str) {
      localStorage.setItem('theme', str);
    }
  }

  const handleClick = () => {
    setTheme((!themeMode).toString())
    setDarkMode(!themeMode);
  }

  let mode = "Switch to LightMode";
  if (!themeMode) {
    mode = "Switch to DarkMode"
  }

  return (
    <NoSsr>
      <div className={classes.themeButtonWrapper}>
        <Tooltip title={mode} placement="right">
          {themeMode ? (
            <div className={`${classes.themeButtonWrapper}__theme-button__container`}>
              <IconButton onClick={handleClick}>
                <WbSunnyIcon className={`${classes.themeButtonWrapper}__light-theme__icon`}/>
              </IconButton>
            </div>
          ) : (
            <div>
              <IconButton onClick={handleClick}><i className={`${FontAwesomeIcons.darkMode}`}/></IconButton>
            </div>
          )}
        </Tooltip>
      </div>
    </NoSsr>
  );
};

export default ThemeButton;
