import Link from "next/link";

import {useTheme} from "@material-ui/core/styles";
import {Avatar, Button, Icon} from "@material-ui/core";

import FontAwesomeIcons from "../../../../../styles/FontAwesomeIcons";
import {JobApplicationStyle} from "./style";

const DetailsHeader = ({applicationData}) => {
  const theme = useTheme();
  const classes = JobApplicationStyle(theme);
  const {avatar, profile_slug, email, short_list} = applicationData
  const fullName = profile_slug.split("-").join(" ")

  return (
    <div>
      <div className={`${classes.jobApplicationWrapper}__header-wrapper`}>

        <div className={`${classes.jobApplicationWrapper}__header-wrapper__left`}>
          <Avatar className={`${classes.jobApplicationWrapper}__header-wrapper__avatar`} src={avatar}/>
          <div className={`${classes.jobApplicationWrapper}__header-wrapper__personal-info`}>
            <h2 className={`${classes.jobApplicationWrapper}__header-wrapper__name`}>{fullName}</h2>
            <span className={`${classes.jobApplicationWrapper}__header-wrapper__email`}>{email}</span>

            <div className={`${classes.jobApplicationWrapper}__header-wrapper__link-wrapper`}>
              <Link href={`/${profile_slug}`}>
                <a className={`${classes.jobApplicationWrapper}__header-wrapper__profile-link`} target="_blank">View Profile</a>
              </Link>
            </div>
          </div>
        </div>

        <div className={`${classes.jobApplicationWrapper}__header-wrapper__buttons`}>
          {short_list ? (
            <Button variant="outlined" className={`${classes.jobApplicationWrapper}__header-wrapper__buttons-shortlisted`} disabled>
              <Icon className={`${classes.jobApplicationWrapper}__header-wrapper__buttons__icon ${FontAwesomeIcons.selected}`} />
              Shortlisted
            </Button>
          ) : ""}
          <Button variant="contained" color="secondary" className={`${classes.jobApplicationWrapper}__header-wrapper__buttons-hire`}>
            Hire Job Seeker
          </Button>
        </div>

      </div>
    </div>
  );
};

export default DetailsHeader;
