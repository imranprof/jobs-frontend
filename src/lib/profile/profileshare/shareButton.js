import React from "react";
import {Button, ClickAwayListener} from "@material-ui/core";
import ShareBar from "./shareBar";

const ShareButton = ({classes}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openEl, setOpen] = React.useState(false);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpen(openEl ? false : true)
  };
  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  return (
    <div>
      <ClickAwayListener onClickAway={handleClose}>
        <Button type="button" onClick={handleClick} className={`${classes.headerWrapper}__nav__share`}>
          Share
        </Button>
      </ClickAwayListener>
      <ShareBar classes={classes} openEl={openEl} anchorEl={anchorEl}/>
    </div>
  );
};

export default ShareButton;
