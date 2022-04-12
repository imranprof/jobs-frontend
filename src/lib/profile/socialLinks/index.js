import React, {useContext} from 'react';
import {connect} from "react-redux";

import ThemeContextProvider from "../../../contexts/themeContext";
import SocialLink from "./socialLink";
import {SocialLinkStyle} from "./style";

const SocialLinks = (props) => {
    const customTheme = useContext(ThemeContextProvider);
    const classes = SocialLinkStyle(customTheme);

    return (
            <div>
                <span className={`${classes.socialLinksWrapper}__title`}>find with me</span>
                <div className={`${classes.socialLinksWrapper}__social-links`}>
                    {props.socialLinks.map(link =>
                        <SocialLink link={link} key={link.id} classes={classes}/>
                    )}
                </div>
            </div>
    );
}

const mapStateToProps = (state) => {
  return {
    socialLinks: state.profile.socialLinks
  }
}

export default connect(mapStateToProps)(SocialLinks);
