import { useLinkedIn } from 'react-linkedin-login-oauth2';
import {useDispatch} from "react-redux";
import {requestAccessToken} from "../../auth/operations";
import {useTheme} from "@material-ui/core/styles";
import {LinkedinPageStyle} from "./style";

const LinkedInPage=()=> {
  const theme = useTheme();
  const classes = LinkedinPageStyle(theme);
  const linkedinRedirectUri = process.env.NEXT_PUBLIC_LINKEDIN_REDIRECT_URI
  const linkedinClientId = process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID

  const dispatch = useDispatch()
  const { linkedInLogin } = useLinkedIn({
    clientId: linkedinClientId,
    redirectUri: linkedinRedirectUri,
    onSuccess: (code) => {
      dispatch(requestAccessToken(code));
    },
    scope: "r_emailaddress r_liteprofile",
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <img
      onClick={linkedInLogin}
      src={"/linkedinIcon.png"}
      alt="Sign in with Linked In"
      className={classes.linkedinPageWrapper}
    />
  );
}

export default LinkedInPage;

