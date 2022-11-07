import {useState} from "react";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {Rating} from 'react-simple-star-rating';

import {Button, Paper, TextField} from "@material-ui/core";

import {getRole} from "../../../../auth/operations";
import ErrorMessage from "../../../../lib/errorMessage";
import {contractEndFeedback} from "../../../../store/actions/jobAction";

const ContractFeedback = (props) => {
  const router = useRouter()
  const {id} = router.query;
  const dispatch = useDispatch()
  const {jobContract, classes} = props
  const {self_feedback, self_rating, get_feedback, get_rating} = jobContract
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
    if (values.feedback.length > 3000) {
      errors.feedback = "Feedback must be within 3000 characters"
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

  const isDisabledFeedbackBtn = (!(ratingValue !== 0 && formik.values.feedback.length <= 3000))

  return (
    <div className={`${classes}__feedback`}>
      {(self_feedback !== null && self_rating !== null) ? (
        <>
          <div className={`${classes}__feedback-wrapper`}>
            <h3 className={`${classes}__feedback-title`}>Your Feedback to {role}</h3>
            <Paper className={`${classes}__feedback-rating`}>
              <Rating
                readonly={true}
                initialValue={self_rating}
                size={35}
                transition
                allowFraction
                showTooltip
                tooltipArray={tooltipArray}
                fillColorArray={fillColorArray}
                onClick={handleRating}
              />
              <span className={`${classes}__feedback-rating__score`}>Rating: {self_rating}</span>
              <p className={`${classes}__feedback__text`}>{self_feedback}</p>
            </Paper>
          </div>

          {(get_feedback !== null && get_rating !== null) ? (
            <div>
              <h3 className={`${classes}__feedback-title`}>{role} feedback to you</h3>
              <Paper className={`${classes}__feedback-rating`}>
                <Rating
                  readonly={true}
                  initialValue={get_rating}
                  size={35}
                  transition
                  allowFraction
                  showTooltip
                  tooltipArray={tooltipArray}
                  fillColorArray={fillColorArray}
                  onClick={handleRating}
                />
                <span className={`${classes}__feedback-rating__score`}>Rating: {get_rating}</span>
                <p className={`${classes}__feedback__text`}>{get_feedback}</p>
              </Paper>
            </div>
          ) : (
            <>
              <h3 className={`${classes}__feedback-title`}>{role} feedback to you</h3>
              <p className={`${classes}__feedback-message__title`}>{role} has not feedback to you yet</p>
            </>
          )}
        </>
      ) : (
        <>
          <div className={`${classes}__feedback-wrapper`}>
            <h2 className={`${classes}__feedback-title`}>{role} feedback to you</h2>
            <p className={`${classes}__feedback-message__title`}>{role} feedback is hidden until you provide feedback</p>
          </div>

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
              <p className={`${classes}__feedback-message__title`}>Share your experience with this {role} (Optional)</p>
              <TextField
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
                <span
                  className={`${classes}__feedback-message__input-length`}>{3000 - formik.values.feedback.length} characters left</span>
                {formik.errors.feedback ? <ErrorMessage error={formik.errors.feedback}/> : null}
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
        </>
      )}
    </div>
  );
};

export default ContractFeedback;
