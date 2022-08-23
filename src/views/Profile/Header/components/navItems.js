import React, {useState} from "react";
import {Link} from 'react-scroll'
import {connect} from "react-redux";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import {JobSeekerNavLinksData} from "../../../../../API/elements/profile/jobSeekerNavLinksData";
import {getRole} from "../../../../auth/operations";
import EditCustomModal from "../../../../lib/profile/editCustomModal";
import JobPostForm from "../../JobPostForm";

const NavItems = ({classes, variant}) => {
  const role = getRole()
  const [openModal, setOpenModal] = useState(false);

  const modalClose = () => {
    setOpenModal(false)
  }

  const handleJobPostClick = () => {
    setOpenModal(true);
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
              <a>
                my jobs
              </a>
            </ListItem>
            <ListItem className={`${classes.headerWrapper}__nav ${classes.headerWrapper}__nav--${variant} active`}>
              <a onClick={handleJobPostClick}>
                post a job
              </a>
            </ListItem>
          </>
        )}
      {openModal && <EditCustomModal open={true} handleClose={modalClose}>
        <JobPostForm handleClose={modalClose}/>
      </EditCustomModal>
      }
    </List>
  );
}

const mapStateToProps = (state) => {
  return {
    modalType: state.auth.modalType
  }
}

export default connect(mapStateToProps)(NavItems);
