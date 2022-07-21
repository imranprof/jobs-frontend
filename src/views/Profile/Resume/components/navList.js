import React from "react";

import {List, ListItem} from "@material-ui/core";

const NavList = ({resumeSections, resumeClasses, selected, setSelected}) => {
  return (
    <List className={`${resumeClasses}__nav-list`}>
      {resumeSections.map((section, idx) => (
        <ListItem
          className={`${resumeClasses}__nav-list__item`}
          key={idx}
          selected={selected === idx}
          onClick={() => setSelected(idx)}
        >
          <a>{section}</a>
        </ListItem>
      ))}
    </List>
  );
}

export default NavList;
