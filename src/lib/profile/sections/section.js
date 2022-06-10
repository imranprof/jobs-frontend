import {useTheme} from "@material-ui/core/styles";

import CustomDivider from "../divider/divider";
import {SectionStyle} from "./style";

const Section = ({section}) => {
  const theme = useTheme();
  const classes = SectionStyle(theme);
  const {title, subtitle, align, component} = section;

  return (
    <>
      <div className={`${classes.sectionHeaderWrapper}--${align}`}>
        <span className={`${classes.sectionHeaderWrapper}__subtitle`}>{subtitle}</span>
        <h2 className={`${classes.sectionHeaderWrapper}__title`}>{title}</h2>
      </div>
      {component && component}
      <CustomDivider/>
    </>
  );
}

export default Section;
