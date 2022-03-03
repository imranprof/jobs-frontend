import React, {useContext} from 'react';

import ThemeContextProvider from "../../../contexts/themeContext";
import {profileData} from "../../../../API/mock/profileData";
import SocialLink from "./socialLink";
import {SocialLinkStyle} from "./style";

const SocialLinks = () => {
    const customTheme = useContext(ThemeContextProvider);
    const classes = SocialLinkStyle(customTheme);

    return (
            <div>
                <span className={`${classes.socialLinksWrapper}__title`}>find with me</span>
                <div className={`${classes.socialLinksWrapper}__social-links`}>
                    {profileData.socialLinks.map(link =>
                        <SocialLink link={link} key={link.id} classes={classes}/>
                    )}
                </div>
            </div>
    );
}

export default SocialLinks;
