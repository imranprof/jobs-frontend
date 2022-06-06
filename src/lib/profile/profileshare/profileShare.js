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



const ProfileShare = ({shareUrl, classes}) => {
    return (

        <Box className={`${classes.headerWrapper}__nav__share__shareBar`}>
            <div>
                <TwitterShareButton url={shareUrl}
                                    title={"Stay connect with me in Seek Right jobs\n\n"}
                                    tags="#seekRightjobs" outline-ofset="5">
                    <TwitterIcon className={`${classes.headerWrapper}__nav__share__shareBar__icon`}/>
                </TwitterShareButton>
            </div>
            <div>
                <FacebookShareButton url={shareUrl}
                                     quote={"Stay connect with me in Seek Right jobs"}
                                     hashtag="#seekRightsjob">
                    <FacebookIcon className={`${classes.headerWrapper}__nav__share__shareBar__icon`}/>
                </FacebookShareButton>
            </div>
            <div>
                <LinkedinShareButton url={shareUrl}
                                     title={"Stay connect with me in Seek Right jobs"}
                                     source="www.seekrightjobs.org">
                    <LinkedinIcon  className={`${classes.headerWrapper}__nav__share__shareBar__icon`}/>
                </LinkedinShareButton>
            </div>
        </Box>
    );
}

export default ProfileShare;