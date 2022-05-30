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
            <h3>Share Profile</h3>
            <TwitterShareButton url={props.shareUrl}
                                title={"Stay connect with me in seekRightsjob\n\n"}
                                tags="#seekRightsjob">
                <TwitterIcon round={true}/>
            </TwitterShareButton>
            <FacebookShareButton url={props.shareUrl}
                                 quote={"Stay connect with me in seekRightsjob"}
                                 hashtag="#seekRightsjob">
                <FacebookIcon round={true}/>
            </FacebookShareButton>
            <LinkedinShareButton url={props.shareUrl}
                                 title={"Stay connect with me in seekRightsjob"}
                                 source="www.seekrightsjob.org">
                <LinkedinIcon round={true}/>
            </LinkedinShareButton>
        </div>


    );
}
