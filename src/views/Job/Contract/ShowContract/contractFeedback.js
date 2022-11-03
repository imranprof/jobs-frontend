import {useState} from "react";
import {useDispatch} from "react-redux";
import { Rating } from 'react-simple-star-rating';
import {useFormik} from "formik";

import {Button, Paper, TextField} from "@material-ui/core";

import {getRole} from "../../../../auth/operations";
import ErrorMessage from "../../../../lib/errorMessage";
import {contractEndFeedback} from "../../../../store/actions/jobAction";
import {useRouter} from "next/router";

const ContractFeedback = ({classes}) => {
  const router = useRouter()
  const {id} = router.query;
  const dispatch = useDispatch()
  const [ratingValue, setRatingValue] = useState(0)
  const role = getRole() === 'employee' ? 'employer' : 'job seeker'

  const tooltipArray = [
    "Terrible",
    "Terrible+",
    "Bad",
    "Bad+",
    "Average",
    "Average+",
    "Great",
    "Great+",
    "Awesome",
    "Awesome+"
  ];

  const fillColorArray = [
    "#EB3830",
    "#EB3830",
    "#f19745",
    "#f19745",
    "#FFAB1A",
    "#FFAB1A",
    "#66bb6a",
    "#66bb6a",
    "#388e3c",
    "#388e3c",
  ];

  const handleRating = (rate) => {
    setRatingValue(rate)
  }

  const initialFeedbackValue = {
    feedback: ''
  }

  const feedbackValidation = (values) => {
    let errors = {}
    if (!values.feedback) {
      errors.feedback = "Feedback can't be empty"
    } else if (values.feedback.length > 5000) {
      errors.feedback = "Feedback must be within 5000 characters"
    }
    return errors;
  }

  const formik = useFormik({
    initialValues: initialFeedbackValue,
    validate: feedbackValidation
  })

  const giveFeedbackHandler = (id, feedback, rating) => {
    id && dispatch(contractEndFeedback(id, feedback, rating))
  }

  const isDisabledFeedbackBtn = (!(formik.values.feedback.length !== 0 && ratingValue !== 0))

  return (
    <div className={`${classes}__feedback`}>
      <h2 className={`${classes}__feedback-title`}>Leave Feedback</h2>

      <div>
        <h4 className={`${classes}__feedback-subtitle`}>Feedback to {role}</h4>
        <Paper className={`${classes}__feedback-rating`}>
          <Rating
            initialValue={ratingValue}
            size={35}
            transition
            allowFraction
            showTooltip
            tooltipArray={tooltipArray}
            fillColorArray={fillColorArray}
            onClick={handleRating}
          />
          <span className={`${classes}__feedback-rating__score`}>Rating: {ratingValue}</span>
        </Paper>

        <div className={`${classes}__feedback-message`}>
          <p className={`${classes}__feedback-message__title`}>Share your experience with this {role}</p>
          <TextField
            required
            multiline={true}
            fullWidth
            rows={5}
            label="Feedback"
            variant="outlined"
            name="feedback"
            value={formik.values.feedback}
            onChange={formik.handleChange}
          />
          <div className={`${classes}__feedback-message__input`}>
            <span className={`${classes}__feedback-message__input-length`}>{5000 - formik.values.feedback.length} characters left</span>
            {formik.errors.feedback ? <ErrorMessage error={formik.errors.feedback} /> : null}
          </div>
        </div>
      </div>

      <Button
        variant="contained"
        onClick={() => giveFeedbackHandler(id, formik.values.feedback, ratingValue)}
        className={`${classes}__feedback__submit-btn`}
        disabled={isDisabledFeedbackBtn}
      >
        Submit feedback
      </Button>
    </div>
  );
};

export default ContractFeedback;
