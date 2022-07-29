import {useTheme} from "@material-ui/core/styles";

import {ModalTitleStyle} from "./style";

const ModalTitle = ({title}) => {
  const theme = useTheme();
  const classes = ModalTitleStyle(theme);

  return (
    <h2 className={classes.modalTitleWrapper}>{title}</h2>
  );
};

export default ModalTitle;
