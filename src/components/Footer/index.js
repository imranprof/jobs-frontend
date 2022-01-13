import React, {useContext} from 'react';
import Link from 'next/link';

import Divider from "@material-ui/core/Divider";

import ThemeContextProvider from "../../contexts/themeContext";
import {footerData} from "../../../API/mock/footerData";
import {FooterStyle} from "./style";

const Footer = () => {
    const customTheme = useContext(ThemeContextProvider);
    const classes = FooterStyle(customTheme);
    const {footerText, company} = footerData;

    return (
            <div className={classes.footerWrapper}>
                <Link href={company.url}>
                    <a className={`${classes.footerWrapper}__logo`} target="_blank">
                        <img className={`${classes.footerWrapper}__logo-img`} alt={company.name} src={company.logo}/>
                    </a>
                </Link>

                <p className={`${classes.footerWrapper}__description`}>
                    &copy; {footerText}&nbsp;
                    <Link href={company.url}>
                        <a className={`${classes.footerWrapper}__link`} target="_blank">{company.name}</a>
                    </Link>.
                </p>
            </div>
    );
}

export default Footer;
