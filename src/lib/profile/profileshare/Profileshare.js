
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
import {Container} from "@material-ui/core";


const Profileshare = (props) => {
    return (

        <div>
            <h3>Share Profile in Social app</h3>
            <TwitterShareButton url="http://localhost:8080/profile"
                                quote={"share in twitter"}
                                hashtag = "#React">

                <TwitterIcon logoFillcolor="white" round={true}></TwitterIcon>
            </TwitterShareButton>
            <FacebookShareButton url="https://facebook.com/imransart"
                                 quote={"share in Facebook"}
                                 hashtag = "#React">
                <FacebookIcon logoFillcolor="white" round={true}></FacebookIcon>

            </FacebookShareButton>

            <LinkedinShareButton url="https://twitter.com/Imransart1"
                                 quote={"share in Linkedin"}
                                 hashtag = "#React">
                <LinkedinIcon logoFillcolor="white" round={true}></LinkedinIcon>
            </LinkedinShareButton>
        </div>



    );
}
