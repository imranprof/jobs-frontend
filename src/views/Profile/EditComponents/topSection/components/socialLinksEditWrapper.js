import {useTheme} from "@material-ui/core/styles";
import {TextField} from "@material-ui/core";

import {TopSectionEditStyle} from "../style";

const SocialLinksEditWrapper = ({iconName, urlValue, name, changeHandler}) => {
  const theme = useTheme();
  const classes = TopSectionEditStyle(theme);

  return (
    <div className={`${classes.topSectionEditWrapper}__socialLinks-wrapper`}>
      <div className={`${classes.topSectionEditWrapper}__socialLinks-icon`}>
        <i className={iconName} />
      </div>
      <TextField
        fullWidth
        size="small"
        variant="outlined"
        value={urlValue || ""}
        name={name}
        onChange={changeHandler}
      />
    </div>
  );
};

export default SocialLinksEditWrapper;
