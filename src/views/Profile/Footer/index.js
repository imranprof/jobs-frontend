import Link from 'next/link';

import {useTheme} from "@material-ui/core/styles";

import {footerData} from "../../../../API/mock/profile/footerData";
import {FooterStyle} from "./style";

const Footer = () => {
  const theme = useTheme();
  const classes = FooterStyle(theme);
  const {footerText, company} = footerData;

  return (
    <div className={classes.footerWrapper}>
      <Link href={company.url}>
        <a className={`${classes.footerWrapper}__logo`} target="_blank" rel="noopener"
           aria-label="will redirect to company's website">
          <img className={`${classes.footerWrapper}__logo-img`} alt={company.name} src={company.logo}/>
        </a>
      </Link>

      <p className={`${classes.footerWrapper}__description`}>
        &copy; {footerText}&nbsp;
        <Link href={company.url}>
          <a className={`${classes.footerWrapper}__link`} target="_blank" rel="noopener"
             aria-label="will redirect to company's website">{company.name}.</a>
        </Link>
      </p>
    </div>
  );
}

export default Footer;
