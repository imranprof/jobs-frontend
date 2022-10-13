import Link from "next/link";

import {Avatar, Box, Popper} from "@material-ui/core";

import {getPrivateSlug, getRole} from "../../../../../auth/operations";

const AvatarDropDownItems = (props) => {
  const {fullName, avatar, classes, openEl, anchorEl} = props
  const role = getRole() === 'employee' ? 'Job Seeker' : 'Employer'

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
                <>
                  <Avatar
                    alt={fullName}
                    src={avatar}
                    className={`${classes}__popper-avatar`}
                  />
                  <div>
                    <p className={`${classes}__popper-avatar__name`}>{fullName}</p>
                    <span className={`${classes}__popper-avatar__type`}>{role}</span>
                  </div>
                </>
              </li>
            </Link>
          </ul>
        </Box>
      </Popper>
    </div>
  );
};

export default AvatarDropDownItems;
