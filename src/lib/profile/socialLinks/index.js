import {useState} from "react";
import {connect} from "react-redux";

import {useTheme} from "@material-ui/core/styles";

import SocialLink from "./socialLink";
import {SocialLinkStyle} from "./style";
import EditButton from "../../editButton";
import MuiCustomModal from "../muiCustomModal";
import SocialLinksEdit from "../../../views/Profile/EditComponents/topSection/components/socialLinksEdit";

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
          {Object.entries(props.links).map(([iconName, url]) => (
            <SocialLink link={url} iconName={iconName} key={iconName} classes={classes}/>
          ))}
        </div>
      </div>

      <MuiCustomModal handleClose={modalClose} open={openModal}>
        <SocialLinksEdit handleClose={modalClose} />
      </MuiCustomModal>

      <span onClick={() => setOpenModal(true)}>
        <EditButton/>
      </span>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    links: state.editProfile.links
  }
}

export default connect(mapStateToProps)(SocialLinks);
