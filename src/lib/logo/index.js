import Link from "next/link";

import {useTheme} from "@material-ui/core/styles";

import {LogoStyle} from "./style";

const Logo = () => {
  const theme = useTheme();
  const classes = LogoStyle(theme);

  return (
    <Link href="/">
      <a className={`${classes.logoWrapper}__logo`}>
        <h1>SeekRightJobs</h1>
      </a>
    </Link>
  );
}

export default Logo;
