import React, {useContext, useEffect, useRef} from 'react';

import ProfileHeader from "../Profile/Header";
import ProfilesHeader from "../Profiles/Header";
import ThemeContextProvider from "../../contexts/themeContext";
import {HeaderStyle} from "../Profile/Header/style";

const Header = (props) => {
  const customTheme = useContext(ThemeContextProvider);
  const classes = HeaderStyle(customTheme);
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
      return <ProfileHeader classes={classes} headerRef={headerRef} />;
    case 'profiles':
      return <ProfilesHeader classes={classes} headerRef={headerRef} />;
    default:
      return <div>default header</div>
  }
}

export default Header;
