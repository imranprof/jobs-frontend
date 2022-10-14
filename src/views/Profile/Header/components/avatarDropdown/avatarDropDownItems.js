import Link from "next/link";
import {useDispatch} from "react-redux";

import {Box, Popper} from "@material-ui/core";

import {getPrivateSlug, SignOut} from "../../../../../auth/operations";
import FontAwesomeIcons from "../../../../../../styles/FontAwesomeIcons";
import AvatarProfileInfo from "../../../../../lib/profile/avatarProfileInfo";

const AvatarDropDownItems = (props) => {
  const {classes, openEl, anchorEl} = props
  const dispatch = useDispatch()

  const handleSignOutClick = async () => {
    await dispatch(SignOut())
  }

  return (
    <div>
      <Popper open={openEl} anchorEl={anchorEl}
              placement="bottom-end"
              popperOptions={{positionFixed: true}}
              modifiers={{
                offset: {
                  enabled: true,
                  offset: "0, 0"
                }
              }}
              className={`${classes}__popUp`}
      >
        <Box className={`${classes}__arrow`}/>
        <Box className={`${classes}__dropdown`}>
          <ul className={`${classes}__popper`}>
            <Link href={`/${getPrivateSlug()}`}>
              <li className={`${classes}__popper-list`}>
                <AvatarProfileInfo />
              </li>
            </Link>

            <a onClick={handleSignOutClick}>
              <li className={`${classes}__popper-list`}>
                <i className={FontAwesomeIcons.signOut} />
                <span className={`${classes}__popper-list__signout`}>Sign out</span>
              </li>
            </a>
          </ul>
        </Box>
      </Popper>
    </div>
  );
};

export default AvatarDropDownItems;
