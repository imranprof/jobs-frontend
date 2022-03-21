import {useContext} from "react";
import Link from "next/link";

import ThemeContextProvider from "../../contexts/themeContext";
import {LogoStyle} from "./style";

const Logo = () => {
  const customTheme = useContext(ThemeContextProvider);
  const classes = LogoStyle(customTheme);

  return (
    <Link href="/">
      <a className={`${classes.logoWrapper}__logo`}>
        <h1>SeekRightJobs</h1>
      </a>
    </Link>
  );
}

export default Logo;
