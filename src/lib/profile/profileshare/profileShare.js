import {Box} from "@material-ui/core";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon
} from "react-share";

const ProfileShare = ({shareUrl, boxClass, iconClass}) => {
  return (

    <Box className={boxClass}>
      <div>
        <TwitterShareButton url={shareUrl}
                            title={"Stay connect with me in Seek Right jobs\n\n"}
                            tags="#seekRightjobs" outline-ofset="5">
          <TwitterIcon className={iconClass}/>
        </TwitterShareButton>
      </div>
      <div>
        <FacebookShareButton url={shareUrl}
                             quote={"Stay connect with me in Seek Right jobs"}
                             hashtag="#seekRightsjob">
          <FacebookIcon className={iconClass}/>
        </FacebookShareButton>
      </div>
      <div>
        <LinkedinShareButton url={shareUrl}
                             title={"Stay connect with me in Seek Right jobs"}
        >
          <LinkedinIcon className={iconClass}/>
        </LinkedinShareButton>
      </div>
    </Box>
  );
}

export default ProfileShare;