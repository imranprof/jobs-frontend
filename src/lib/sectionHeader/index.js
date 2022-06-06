import {useTheme} from "@material-ui/core/styles";

import {SectionHeaderStyle} from "./style";

const SectionHeader = ({ title }) => {
  const theme = useTheme();
  const classes = SectionHeaderStyle(theme);

  return (
    <div className={classes.sectionHeaderWrapper}>
      <h1>{title}</h1>
    </div>
  );
};

export default SectionHeader;
