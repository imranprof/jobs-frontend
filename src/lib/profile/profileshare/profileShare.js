import {Container} from "@material-ui/core";
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

        <div>
            <h3>Share On</h3>
            <TwitterShareButton url={props.shareUrl}
                                title={"Stay connect with me in Seek Right jobs\n\n"}
                                tags="#seekRightjobs">
                <TwitterIcon round={true} size={45}/>
            </TwitterShareButton>
            <FacebookShareButton url={props.shareUrl}
                                 quote={"Stay connect with me in Seek Right jobs"}
                                 hashtag="#seekRightsjob">
                <Container><FacebookIcon round={true} size={45}/></Container>
            </FacebookShareButton>
            <LinkedinShareButton url={props.shareUrl}
                                 title={"Stay connect with me in Seek Right jobs"}
                                 source="www.seekrightjobs.org">
                <LinkedinIcon  round={true} size={45}/>
            </LinkedinShareButton>
        </div>


    );
}
