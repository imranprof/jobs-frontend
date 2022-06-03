import {Box, Container, Paper} from "@material-ui/core";
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

        <Box>
            <TwitterShareButton url={props.shareUrl}
                                title={"Stay connect with me in Seek Right jobs\n\n"}
                                tags="#seekRightjobs">
                <TwitterIcon borderRadius={15} size={30}/>
            </TwitterShareButton>
            <FacebookShareButton url={props.shareUrl}
                                 quote={"Stay connect with me in Seek Right jobs"}
                                 hashtag="#seekRightsjob">
                <Container><FacebookIcon borderRadius={15} size={30}/></Container>
            </FacebookShareButton>
            <LinkedinShareButton url={props.shareUrl}
                                 title={"Stay connect with me in Seek Right jobs"}
                                 source="www.seekrightjobs.org">
                <LinkedinIcon  borderRadius={15} size={30}/>
            </LinkedinShareButton>
        </Box>


    );
}
