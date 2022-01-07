import Link from "next/link";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import {navigationLinks} from "../../../API/elements/navigationLink";

const NavItems = ({classes, variant}) => {
    return (
        <List>
            {navigationLinks.map((link) =>
                (<ListItem className={`${classes.headerWrapper}__nav ${classes.headerWrapper}__nav--${variant}`}
                           key={link.id}>
                    <Link href={link.href}>
                        {link.name}
                    </Link>
                </ListItem>)
            )}
        </List>
    );
};

export default NavItems;
