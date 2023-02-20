import {CardContent, Divider, Typography} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

const CardContents = (props) => {
  const {profile, classes} = props;
  const {first_name, last_name, designation, hourly_rate, rating, completed_jobs} = profile;

  const shortNameGenerator = () => {
    return `${first_name} ${last_name}.`;
  }

  return (
    <>
      <CardContent>
        <div className={`${classes}__info`}>
          <Typography gutterBottom variant="h5" component="h2" className={`${classes}__info__name`}>
            {shortNameGenerator()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={`${classes}__info__designation`}>
            {designation}
          </Typography>
        </div>
      </CardContent>
      <Divider/>
      <CardContent >
        <div className={`${classes}__rate-info`}>
          <Typography variant="h5" component="h4" className={`${classes}__rate-info__hourly`}>
            ${hourly_rate}/hr
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={`${classes}__rate-info__ratings`}>
            <StarIcon/>
            <span
              className={`${classes}__rate-info__rate`}>{`${rating.toFixed(1)}/5`}</span><span>{`(${completed_jobs} jobs)`}</span>
          </Typography>
        </div>
      </CardContent>
    </>
  );
};

export default CardContents;
