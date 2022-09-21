import React from 'react';
import withLayout from "../../../views/Layout";
import {connect} from "react-redux";
import {getSearchValue} from "../../../store/actions/searchAction";
import ProfileCard from "../../../views/Profiles/ProfileCard";
import {useTheme} from "@material-ui/core/styles";
import {TalentsSearchStyle} from "./style";
import {NoSsr} from "@material-ui/core";
import CustomLoader from "../../../lib/customLoader";

const TalentSearch = (props) => {
  const theme = useTheme();
  const classes = TalentsSearchStyle(theme);
  const {initialLoader} = props

  return (
    <NoSsr>
      <h2 className={`${classes.talentsSearchWrapper}__search-title`}>
        Results for "{getSearchValue()}"
      </h2>
      {initialLoader && <CustomLoader/>}
      <div className={classes.talentsSearchWrapper}>
        <ProfileCard/>
      </div>
    </NoSsr>
  );
};

const mapStateToProps = (state) => {
  return {
    searchProfiles: state.allProfiles.searchProfiles,
    initialLoader: state.allProfiles.initialLoader
  }
}

export default connect(mapStateToProps)(withLayout(TalentSearch, ''));
