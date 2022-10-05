import React, {useState} from 'react';
import Link from "next/link";

import withLayout from "../../../views/Layout";
import JobSeekerHireForm from "../../../views/JobSeeker/HireForm";
import JobDetails from "../../../views/JobSeeker/HireForm/jobDetails";
import {Paper} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useRouter} from "next/router";
import JobSeekerDetails from "../../../views/JobSeeker/HireForm/JobSeekerDetails";
import {Checkbox} from "@material-ui/core";


const HireJobSeeker = () => {
  const [checked, setChecked] = useState(false)

  const router = useRouter()
  const {
    query: {avatar, name},
  } = router
  const handleCheck = (e) => {
    setChecked(e.target.checked)
  }

  return (
    <>
      <JobSeekerDetails avatar={avatar} name={name}/>
      <JobSeekerHireForm/>
      <JobDetails/>
      <Paper>
        <div style={{display: "flex", alignItems: "center"}}>
          <span>
          <Checkbox
            checked={checked}
            onChange={handleCheck}
            color="primary"
          />
        </span>
        <h4>Yes, I Agree</h4>
        </div>

        <div style={{padding: 15, display: "flex"}}>
          <span style={{marginRight: 10}}>
            <Button
              variant="contained"
              color="primary"
              disabled={!checked}
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