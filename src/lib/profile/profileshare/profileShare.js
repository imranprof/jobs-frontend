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

        <Box marginTop={.5} marginRight={.5} marginLeft={.5}>
            <TwitterShareButton url={props.shareUrl}
                                title={"Stay connect with me in Seek Right jobs\n\n"}
                                tags="#seekRightjobs" outline-ofset="5">
                <TwitterIcon borderRadius={15} size={30}/>
            </TwitterShareButton>
            <FacebookShareButton url={props.shareUrl}
                                 quote={"Stay connect with me in Seek Right jobs"}
                                 hashtag="#seekRightsjob">
                <Box marginLeft={1.5} marginRight={1.5}><FacebookIcon borderRadius={15} size={30}/></Box>
            </FacebookShareButton>
            <LinkedinShareButton url={props.shareUrl}
                                 title={"Stay connect with me in Seek Right jobs"}
                                 source="www.seekrightjobs.org">
                <LinkedinIcon  borderRadius={15} size={30}/>
            </LinkedinShareButton>
        </Box>


    );
}
