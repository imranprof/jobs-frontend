import React from 'react';
import Link from "next/link";

import withLayout from "../../../views/Layout";
import JobSeekerHireForm from "../../../views/JobSeeker/HireForm";
import JobDetails from "../../../views/JobSeeker/HireForm/jobDetails";
import {Paper} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useRouter} from "next/router";
import JobSeekerDetails from "../../../views/JobSeeker/HireForm/JobSeekerDetails";


const HireJobSeeker = () => {

  const router = useRouter()
  const {
    query: {avatar, name},
  } = router

  return (
    <>
      <JobSeekerDetails avatar={avatar} name={name}/>
      <JobSeekerHireForm/>
      <JobDetails/>
      <Paper>
        <div style={{padding: 15, display: "flex"}}>
          <span style={{marginRight: 10}}>
            <Button
              variant="contained"
              color="primary"
            >
              Confirm
            </Button>
          </span>
          <Link href={'/application/details'}>
            <Button
              variant="contained"
            >
              Cancel
            </Button>
          </Link>
        </div>
      </Paper>
    </>
  );
};


export default withLayout(HireJobSeeker);