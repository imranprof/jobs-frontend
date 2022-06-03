import {Link} from 'react-scroll'

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import React from "react";

import {NavigationLinksData} from "../../../../../API/elements/profile/navigationLinksData";
import {Button, Popover} from "@material-ui/core";
import {ProfileShare} from "../../../../lib/profile/profileshare/profileShare";


const NavItems = ({classes, variant}) => {
    const [anchorElBottom, setAnchorElBottom] = React.useState(null);
    return (
        <List>
            {NavigationLinksData.map((link) =>
                (<ListItem className={`${classes.headerWrapper}__nav ${classes.headerWrapper}__nav--${variant} active`}
                           key={link.id}>
                    <Link to={link.href} spy={true} smooth={true} duration={1000} delay={200} offset={-300}>
                        {link.name}
                    </Link>
                </ListItem>)
            )}

            <Button onClick={event => setAnchorElBottom(event.currentTarget)} className={`${classes.headerWrapper}__nav ${classes.headerWrapper}__nav--`}>
                Share
            </Button>
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
            >
                <ProfileShare shareUrl={"https://facebook.com/imransart"}/>

            </Popover>
        </List>
    );
};

export default NavItems;
