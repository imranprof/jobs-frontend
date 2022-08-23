import Link from 'next/link'
import {useDispatch} from "react-redux";

import {Tooltip, Zoom} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import FontAwesomeIcons from "../../../../styles/FontAwesomeIcons";
import {BackToHomeBtnStyle} from "./style";
import {setProfiles} from "../../../store/actions/searchAction";

const BackToHomeButton = () => {
  const theme = useTheme();
  const classes = BackToHomeBtnStyle(theme);
  const dispatch = useDispatch()

  const resetSearch = () => {
    dispatch(setProfiles([]));
  }

  return (
    <span className={classes.backToHomeBtnWrapper} onClick={resetSearch}>
      <Link href="/">
        <a>
          <Tooltip title="Back to home" placement="bottom" TransitionComponent={Zoom}>
            <div className={`${classes.backToHomeBtnWrapper}__btn`}>
              <i className={FontAwesomeIcons.chevronLeft}/>
            </div>
          </Tooltip>
        </a>
      </Link>
    </span>
  );
};

export default BackToHomeButton;
