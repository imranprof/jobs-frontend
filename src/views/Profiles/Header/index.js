import Link from 'next/link';

import {useFormik} from "formik";

import {AppBar, Hidden, InputAdornment, InputBase, Toolbar} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

import ProfilesSideBar from "./components/profilesSideBar";
import Logo from "../../../lib/logo";

const ProfilesHeader = ({classes, headerRef}) => {

  const formik = useFormik({
    initialValues: {searchValue: ''},
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <AppBar className={classes.headerWrapper} ref={headerRef}>
      <Toolbar className={`${classes.headerWrapper}__toolbar`}>
        <Logo />

        <ProfilesSideBar classes={classes}/>

        <Hidden mdDown>
          <div className={`${classes.headerWrapper}__toolbar__right`}>
            <form onSubmit={formik.handleSubmit}>
              <InputBase name="searchValue"
                         type="text"
                         placeholder="Search..."
                         value={formik.values.searchValue}
                         onChange={formik.handleChange}
                         className={`${classes.headerWrapper}__toolbar__search`}
                         endAdornment={
                           <InputAdornment position="end">
                             <button type="submit" className={`${classes.headerWrapper}__toolbar__search__icon`}>
                               <SearchIcon />
                             </button>
                           </InputAdornment>
                         }
              />
            </form>
            <div className={`${classes.headerWrapper}__authentication`}>
              <Link href="#">
                <a className={`${classes.headerWrapper}__authentication-signin`}>Sign In</a>
              </Link>
              <Link href="#">
                <a className={`${classes.headerWrapper}__authentication-signup`}>Sign Up</a>
              </Link>
            </div>
          </div>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default ProfilesHeader;
