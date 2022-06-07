import {Box, Popover} from "@material-ui/core";
import ProfileShare from "./profileShare";
import React from "react";


const ShareBar = ({classes, anchorElBottom, setAnchorElBottom}) => {
    return (
        <div>
            <Popover
                open={Boolean(anchorElBottom)}
                anchorEl={anchorElBottom}
                onClose={() => setAnchorElBottom(null)}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}
                PaperProps={{
                    style: {
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        borderRadius: 0
                    }
                }}
            >
                <Box className={`${classes.headerWrapper}__nav__share__shareBar__arrow`}/>
                <ProfileShare shareUrl={"https://facebook.com/imransart"} classes={classes}/>

            </Popover>
        </div>

    );
}

export default ShareBar;