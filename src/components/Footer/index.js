import React, {useContext} from 'react';
import Link from 'next/link';

import Divider from "@material-ui/core/Divider";

import {FooterStyle} from "./style";
import ThemeContextProvider from "../../contexts/themeContext";

const Footer = () => {
    const customTheme = useContext(ThemeContextProvider);
    const classes = FooterStyle(customTheme);
    const currentYear = new Date().getFullYear();

    return (
        <div className={classes.footerWrapper}>
            <Divider className={`${classes.footerWrapper}__divider`}/>

            <Link href="https://rightcodes.org">
                <a className={`${classes.footerWrapper}__logo`} target="_blank">
                    <img className={`${classes.footerWrapper}__logo-img`} alt="RightCodes Solution" src="rc.png"/>
                </a>
            </Link>

            <p className={`${classes.footerWrapper}__description`}>
                &copy; {currentYear}. All rights reserved by&nbsp;
                <Link href="https://rightcodes.org">
                    <a className={`${classes.footerWrapper}__link`} target="_blank">RightCodes Solution</a>
                </Link>.
            </p>
        </div>
    );
}

export default Footer;
