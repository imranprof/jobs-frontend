import React from "react";
import {Link} from 'react-scroll'

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import {JobSeekerNavLinksData} from "../../../../../API/elements/profile/jobSeekerNavLinksData";
import {EmployerNavLinksData} from "../../../../../API/elements/profile/employerNavLinksData";
import {getRole} from "../../../../auth/operations";

const NavItems = ({classes, variant}) => {
  const role = getRole()

  return (
    <List className={`${classes.headerWrapper}__nav__navItem`}>
      {role === 'employee' ?
        JobSeekerNavLinksData.map((link) =>
          (<ListItem className={`${classes.headerWrapper}__nav ${classes.headerWrapper}__nav--${variant} active`}
                     key={link.id}>
            <Link to={link.href} spy={true} smooth={true} duration={1000} delay={200} offset={-300}>
              {link.name}
            </Link>
          </ListItem>)
        )
        : EmployerNavLinksData.map((link) =>
          (<ListItem className={`${classes.headerWrapper}__nav ${classes.headerWrapper}__nav--${variant} active`}
                     key={link.id}>
            <Link to={"#"} spy={true} smooth={true} duration={1000} delay={200} offset={-300}>
              {link.name}
            </Link>
          </ListItem>)
        )}
    </List>
  );
};

export default NavItems;
