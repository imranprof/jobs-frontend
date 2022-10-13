import Link from 'next/link';
import {useDispatch} from "react-redux";

import {useTheme} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import {BannerStyle} from "./style";
import {resetProfiles} from "../../../store/actions/searchAction";

const Banner = (props) => {
  const theme = useTheme();
  const classes = BannerStyle(theme);
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(resetProfiles(true))
  }

  return (
    <>
      <div className={classes.bannerWrapper}>
        <div className={`${classes.bannerWrapper}__left`}>
          <h1 className={`${classes.bannerWrapper}__left__headline`}>
            Find the best <span>talent</span>
          </h1>
          <p className={`${classes.bannerWrapper}__left__headline-sub`}>
            Work with the best talent from around the world on our secure, flexible and cost-effective platform.
          </p>
          <div className={`${classes.bannerWrapper}__left__buttonWrapper`}>

            <Link href={"/profiles"}>
              <Button
                variant="contained"
                size="large"
                className={`${classes.bannerWrapper}__left__buttonWrapper-btn`}
                onClick={handleClick}
              >
                find talent
              </Button>
            </Link>
            <Link href={"/jobs"}>
              <Button variant="outlined" size="large">find job</Button>
            </Link>
          </div>
        </div>
        <div className={`${classes.bannerWrapper}__right`}>
          <div className={`${classes.bannerWrapper}__right__thumbnail`}>
            <img
              src="banner-img.png"
              alt="Banner image"
              className={`${classes.bannerWrapper}__right__thumbnail--img`}
            />
          </div>
        </div>
      </div>
    </>
  );
};


export default Banner;

