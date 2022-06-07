import {Link} from 'react-scroll'

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import React from "react";

import {NavigationLinksData} from "../../../../../API/elements/profile/navigationLinksData";
import {Button} from "@material-ui/core";
import ShareBar from "../../../../lib/profile/profileshare/shareBar";



const NavItems = ({classes, variant}) => {
    const [anchorElBottom, setAnchorElBottom] = React.useState(null);
    return (
        <List className={`${classes.headerWrapper}__nav__navItem`}>
                {NavigationLinksData.map((link) =>
                    (<ListItem className={`${classes.headerWrapper}__nav ${classes.headerWrapper}__nav--${variant} active`}
                               key={link.id}>
                        <Link to={link.href} spy={true} smooth={true} duration={1000} delay={200} offset={-300}>
                            {link.name}
                        </Link>
                    </ListItem>)
                )}

                <Button onClick={event => setAnchorElBottom(event.currentTarget)} className={`${classes.headerWrapper}__nav__share`}>
                    Share
                </Button>
            <ShareBar classes={classes} anchorElBottom={anchorElBottom} setAnchorElBottom={setAnchorElBottom}/>
        </List>
    );
};

export default NavItems;
