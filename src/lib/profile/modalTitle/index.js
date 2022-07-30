import {useTheme} from "@material-ui/core/styles";

import {ModalTitleStyle} from "./style";

const ModalTitle = ({title}) => {
  const theme = useTheme();
  const classes = ModalTitleStyle(theme);

  return (
    <h1 className={classes.modalTitleWrapper}>{title}</h1>
  );
};

export default ModalTitle;
