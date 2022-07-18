import React, {useEffect, useRef} from 'react';

import {useTheme} from "@material-ui/core/styles";

import ProfileHeader from "../Profile/Header";
import ProfilesHeader from "../Profiles/Header";
import {HeaderStyle} from "./style";

const Header = (props) => {
  const theme = useTheme();
  const classes = HeaderStyle(theme);
  const headerRef = useRef(null);
  const { type } = props;

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = () => {
    const header = headerRef.current;
    const scrollTop = window.scrollY;
    scrollTop >= 80 ? header.classList.add("isSticky") : header.classList.remove("isSticky");
  };

  switch (type) {
    case 'profile':
      return <ProfileHeader classes={classes} headerRef={headerRef} themeMode={props.themeMode} themeSet={props.setTheme}/>;
    case 'profiles':
      return <ProfilesHeader classes={classes} headerRef={headerRef} themeMode={props.themeMode} themeSet={props.setTheme}/>;
    default:
      return <div>default header</div>
  }
}

export default Header;
