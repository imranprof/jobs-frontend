import Link from "next/link";

import {useTheme} from "@material-ui/core/styles";

import {LogoStyle} from "./style";
import {setProfiles} from "../../store/actions/searchAction";
import {useDispatch} from "react-redux";

const Logo = () => {
  const theme = useTheme();
  const classes = LogoStyle(theme);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setProfiles([]))
  }

  return (
    <Link href="/">
      <a className={`${classes.logoWrapper}__logo`} onClick={handleClick}>
        <h1>Seek<span>Right</span>Jobs</h1>
      </a>
    </Link>
  );
}

export default Logo;
