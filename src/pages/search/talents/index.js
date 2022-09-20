import React from 'react';
import withLayout from "../../../views/Layout";
import {connect} from "react-redux";
import {getSearchValue} from "../../../store/actions/searchAction";
import ProfileCard from "../../../views/Profiles/ProfileCard";
import {useTheme} from "@material-ui/core/styles";
import {TalentsSearchStyle} from "./style";

const TalentSearch = () => {
  const theme = useTheme();
  const classes = TalentsSearchStyle(theme);

  return (
    <>
      <h1>Results for "{getSearchValue()}"</h1>
      <div className={classes.talentsSearchWrapper}>
        <ProfileCard/>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    searchProfiles: state.allProfiles.searchProfiles,
  }
}

export default connect(mapStateToProps)(withLayout(TalentSearch, ''));
