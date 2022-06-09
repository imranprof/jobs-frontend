import {useState} from "react";
import {connect} from "react-redux";

import {useTheme} from "@material-ui/core/styles";

import SocialLink from "./socialLink";
import {SocialLinkStyle} from "./style";
import EditButton from "../../editButton";
import MuiCustomModal from "../muiCustomModal";

const SocialLinks = (props) => {
  const theme = useTheme();
  const classes = SocialLinkStyle(theme);
  const [openModal, setOpenModal] = useState(false);

  const modalClose = () => {
    setOpenModal(false)
  }

  return (
    <div className={classes.socialLinksWrapper}>
      <div>
        <span className={`${classes.socialLinksWrapper}__title`}>find with me</span>
        <div className={`${classes.socialLinksWrapper}__social-links`}>
          {props.socialLinks.map(link =>
            <SocialLink link={link} key={link.id} classes={classes}/>
          )}
        </div>
      </div>

      <MuiCustomModal handleClose={modalClose} open={openModal}>
        <h3>Edit Content</h3>
      </MuiCustomModal>

      <span onClick={() => setOpenModal(true)}>
        <EditButton/>
      </span>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    socialLinks: state.profile.socialLinks
  }
}

export default connect(mapStateToProps)(SocialLinks);
