import React, {useEffect} from 'react';
import {Avatar, Paper} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import FontAwesomeIcons from "../../../../styles/FontAwesomeIcons";
import {connect, useDispatch} from "react-redux";

const JobSeekerDetails = (props) => {
  const dispatch = useDispatch()
  const {avatar, name} = props

  return (
    <>
      <h1 style={{marginLeft: 40, marginBottom: 35}}>Hire</h1>
      <Paper>
        <div style={{marginLeft: 20, padding: 15, display: "flex"}}>
          <Avatar
            src={avatar}
            style={{height: 70, width: 70}}
          />
          <div style={{marginLeft: 20}}>
            <h3 style={{margin: "0px 0px 15px 0px"}}>{name}</h3>
            <div style={{display: "flex"}}>
              <Icon className={FontAwesomeIcons.location}/>
              <p style={{margin:0}}>Job location</p>
            </div>
          </div>
        </div>
      </Paper>
    </>
  );
};


export default JobSeekerDetails;