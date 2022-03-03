import {Grid} from "@material-ui/core";

const InputWrapper = ({type, extraSmall, small, labelFor, labelName, formValues, changeHandler, classes}) => {
    return (
      <Grid item xs={extraSmall} sm={small} className={`${classes}__contact-form__input-wrapper`}>
        <label htmlFor={labelFor} className={`${classes}__contact-form__label`}>{labelName}</label>
        {(type === "input") ? (
          <input type='text' id={labelFor} name={labelFor} value={formValues} className={`${classes}__contact-form__input`} onChange={changeHandler} />
        ) : (
          <textarea id={labelFor} name={labelFor} value={formValues} className={`${classes}__contact-form__input message-field`} onChange={changeHandler} />
        ) }
      </Grid>
    );
}

export default InputWrapper;
