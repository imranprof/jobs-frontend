import {useTheme} from "@material-ui/core/styles";
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';

import {MuiCustomModalStyle} from "./style";

const MuiCustomModal = (props) => {
  const theme = useTheme();
  const classes = MuiCustomModalStyle(theme);
  const {handleClose, open, children} = props;

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {children}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default MuiCustomModal;
