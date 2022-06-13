import {useTheme} from "@material-ui/core/styles";

import {TopSectionEditStyle} from "../style";

const SocialLinksEditWrapper = ({iconName, urlValue, name, changeHandler}) => {
  const theme = useTheme();
  const classes = TopSectionEditStyle(theme);

  return (
    <div className={`${classes.topSectionEditWrapper}__socialLinks-wrapper`}>
      <div className={`${classes.topSectionEditWrapper}__socialLinks-icon`}>
        <i className={iconName} />
      </div>
      <input
        value={urlValue}
        name={name}
        onChange={changeHandler}
        className={`${classes.topSectionEditWrapper}__socialLinks-input`}
      />
    </div>
  );
};

export default SocialLinksEditWrapper;
