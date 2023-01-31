import {useState} from "react";
import Link from "next/link";
import {useDispatch} from "react-redux";

import {Box, Paper, Popper} from "@material-ui/core";

import {getPrivateSlug, SignOut} from "../../../../../auth/operations";
import FontAwesomeIcons from "../../../../../../styles/FontAwesomeIcons";
import AvatarProfileInfo from "../../../../../lib/profile/avatarProfileInfo";
import {getRole} from "../../../../../auth/operations";

const AvatarDropDownItems = (props) => {
  const {classes, openEl, anchorEl} = props
  const [nestedAnchorEl, setNestedAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()
  const role = getRole()

  const handleSignOutClick = async () => {
    await dispatch(SignOut())
  }

  const handleMouseover = (event) => {
    setNestedAnchorEl( event.currentTarget);
    setOpen(true)
  };

  const handleMouseleave = () => {
    setNestedAnchorEl(null);
    setOpen(false)
  };

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

            {(role && role === 'employee') ? (
              <div onMouseOver={handleMouseover} onMouseLeave={handleMouseleave}>
              <span>
                <li className={`${classes}__popper-list`}>
                  <i className={FontAwesomeIcons.chevronLeft} />
                  <span className={`${classes}__popper-list__item`}>My Jobs</span>
                </li>
              </span>
                <Popper open={open} anchorEl={nestedAnchorEl}
                        placement="left-start"
                        popperOptions={{positionFixed: true}}
                        modifiers={{
                          offset: {
                            enabled: true,
                            offset: "0, 0"
                          }
                        }}
                        className={`${classes}__popUp`}
                >

                  <Paper className={`${classes}__nested-popper`}>
                    <Link href={"/myJobs"}>
                      <li className={`${classes}__popper-list`}>
                        <i className={FontAwesomeIcons.briefcase} />
                        <span className={`${classes}__popper-list__item`}>My Jobs</span>
                      </li>
                    </Link>
                    <Link href={"/job/contract"}>
                      <li className={`${classes}__popper-list`}>
                        <i className={FontAwesomeIcons.contract} />
                        <span className={`${classes}__popper-list__item`}>All Contracts</span>
                      </li>
                    </Link>
                  </Paper>
                </Popper>
              </div>
            ) : (
              <Link href={"/job/contract"}>
                <li className={`${classes}__popper-list`}>
                  <i className={FontAwesomeIcons.contract} />
                  <span className={`${classes}__popper-list__item`}>All Contracts</span>
                </li>
              </Link>
            )}


            <a onClick={handleSignOutClick}>
              <li className={`${classes}__popper-list`}>
                <i className={FontAwesomeIcons.signOut} />
                <span className={`${classes}__popper-list__item`}>Sign out</span>
              </li>
            </a>
          </ul>
        </Box>
      </Popper>

    </div>
  );
};

export default AvatarDropDownItems;
