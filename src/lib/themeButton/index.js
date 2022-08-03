import {useTheme} from "@material-ui/core/styles";

import {ThemeButtonStyle} from "./style";
import {IconButton, Tooltip} from "@material-ui/core";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import FontAwesomeIcons from "../../../styles/FontAwesomeIcons";

const ThemeButton = ({themeMode, setTheme}) => {
  const theme = useTheme();
  const classes = ThemeButtonStyle(theme);

  const handleClick = () => {
    setTheme(!themeMode);
  }

  let mode = "Switch to LightMode";
  if (!themeMode) {
    mode = "Switch to DarkMode"
  }

  return (
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
        )
        }
      </Tooltip>
    </div>
  );
};

export default ThemeButton;
