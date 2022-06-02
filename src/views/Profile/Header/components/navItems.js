import {Link} from 'react-scroll'

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import {NavigationLinksData} from "../../../../../API/elements/profile/navigationLinksData";
import {Button, Popover} from "@material-ui/core";

const NavItems = ({classes, variant}) => {
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
            <Button className={`${classes.headerWrapper}__nav ${classes.headerWrapper}__nav--${variant}`}>Share</Button>
        </List>
    );
};

export default NavItems;
