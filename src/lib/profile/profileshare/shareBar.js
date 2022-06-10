import React from "react";
import {Box, Popper} from "@material-ui/core";
import ProfileShare from "./profileShare";

const ShareBar = ({classes, openEl, anchorEl}) => {
  return (
    <div>
      <Popper open={openEl} anchorEl={anchorEl}
              placement="bottom"
              popperOptions={{positionFixed: true}}

              modifiers={{
                offset: {
                  enabled: true,
                  offset: "0, 0"
                }
              }}
              className={`${classes.headerWrapper}__nav__share__popUp`}
      >
        <Box className={`${classes.headerWrapper}__nav__share__shareBar__arrow`}/>
        <ProfileShare shareUrl={"http://rightcodes.org/"} boxClass={`${classes.headerWrapper}__nav__share__shareBar`}
                      iconClass={`${classes.headerWrapper}__nav__share__shareBar__icon`}/>
      </Popper>
    </div>

  );
}

export default ShareBar;
