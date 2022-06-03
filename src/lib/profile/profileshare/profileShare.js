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


export const ProfileShare = (props) => {
    return (

        <Box sx={{ display: 'flex', alignItems: 'center', margin: '5px'}}>
            <div>
            <TwitterShareButton url={props.shareUrl}
                                title={"Stay connect with me in Seek Right jobs\n\n"}
                                tags="#seekRightjobs" outline-ofset="5">
                <TwitterIcon borderRadius={15} size={30}/>
            </TwitterShareButton>
            </div>
            <Box marginLeft={1.5} marginRight={1.5}>
            <FacebookShareButton url={props.shareUrl}
                                 quote={"Stay connect with me in Seek Right jobs"}
                                 hashtag="#seekRightsjob">
                <FacebookIcon borderRadius={15} size={30}/>
            </FacebookShareButton>
            </Box>
            <div>
            <LinkedinShareButton url={props.shareUrl}
                                 title={"Stay connect with me in Seek Right jobs"}
                                 source="www.seekrightjobs.org">
                <LinkedinIcon  borderRadius={15} size={30}/>
            </LinkedinShareButton>
            </div>
        </Box>


    );
}
