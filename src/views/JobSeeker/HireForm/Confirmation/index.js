import React, {useState} from 'react';
import {Checkbox, Paper} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import {useTheme} from "@material-ui/styles";
import {HireStyle} from "../../../../pages/job-application/[id]/hire/style";

const Confirmation = (props) => {
  const theme = useTheme()
  const classes = HireStyle(theme);
  const [checked, setChecked] = useState(false)
  const {applicationDetails} = props

  const handleCheck = (e) => {
    setChecked(e.target.checked)
  }

  return (
    <>
      <Paper>
        <div className={`${classes.hireWrapper}__checkbox-title-wrapper`}>
              <span>
                <Checkbox
                  checked={checked}
                  onChange={handleCheck}
                  className={`${classes.hireWrapper}__checkbox`}
                />
              </span>
          <h4>Yes, I understand and agree</h4>
        </div>

        <div className={`${classes.hireWrapper}__buttons-wrapper`}>
              <span className={`${classes.hireWrapper}__confirm-button-wrapper`}>
                <Button
                  variant="contained"
                  className={`${classes.hireWrapper}__button`}
                  disabled={!checked}
                >
                  Confirm
                </Button>
              </span>
          <Link href={`/job-application/${applicationDetails.id}/details`}>
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

export default Confirmation;