import React from 'react';
import withLayout from "../../../views/Layout";
import {connect} from "react-redux";
import {getSearchValue} from "../../../store/actions/searchAction";
import ProfileCard from "../../../views/Profiles/ProfileCard";

const TalentSearch = () => {
  return (
    <>
      <h1>Results for "{getSearchValue()}"</h1>
      <div style={{display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around"
      }}>
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
