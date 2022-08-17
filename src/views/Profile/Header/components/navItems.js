import React from "react";
import {Link} from 'react-scroll'
import {connect, useDispatch} from "react-redux";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import {JobSeekerNavLinksData} from "../../../../../API/elements/profile/jobSeekerNavLinksData";
import {getRole} from "../../../../auth/operations";
import {modalType} from "../../../../store/actions/authAction";

const NavItems = ({classes, variant}) => {
  const role = getRole()
  const dispatch = useDispatch()

  const handleJobPostClick = () => {
    dispatch(modalType('JobPostForm'))
  }

  return (
    <List className={`${classes.headerWrapper}__nav__navItem`}>
      {role === 'employee' ?
        JobSeekerNavLinksData.map((link) =>
          (<ListItem className={`${classes.headerWrapper}__nav ${classes.headerWrapper}__nav--${variant} active`}
                     key={link.id}>
            <Link to={link.href} spy={true} smooth={true} duration={1000} delay={200} offset={-300}>
              {link.name}
            </Link>
          </ListItem>)
        )
        : (
          <>
            <ListItem className={`${classes.headerWrapper}__nav ${classes.headerWrapper}__nav--${variant} active`}>
              <Link to="#" spy={true} smooth={true} duration={1000} delay={200} offset={-300}>
                my jobs
              </Link>
            </ListItem>
            <ListItem className={`${classes.headerWrapper}__nav ${classes.headerWrapper}__nav--${variant} active`}>
              <Link onClick={handleJobPostClick} spy={true} smooth={true} duration={1000} delay={200} offset={-300}>
                post a job
              </Link>
            </ListItem>
          </>
        )}
    </List>
  );
}

const mapStateToProps = (state) => {
  return {
    modalType: state.auth.modalType
  }
}

export default connect(mapStateToProps)(NavItems);
