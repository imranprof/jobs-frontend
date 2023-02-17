import {useEffect, useState} from "react";
import {connect, useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {useFormik} from 'formik';
import * as yup from 'yup';

import {Button, Box, TextField} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import {getProfileSlug} from "../../store/reducers/authReducers";
import {handleApiResponse, signIn, signUp} from "../operations";
import {AuthStyle} from "./style";
import {modalType} from "../../store/actions/authAction";
import LinkedInPage from "../../lib/LinkedInPage";

const SignUpForm = (props) => {
  const theme = useTheme();
  const classes = AuthStyle(theme);
  const dispatch = useDispatch();
  const {isAuthenticated, selectedValue, handleClose} = props;
  const router = useRouter();

  useEffect( async () => {
    if (isAuthenticated) {
      await router.push(`/${getProfileSlug()}`);
      dispatch(modalType(""));
    }
  }, [isAuthenticated])

  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(6, 'Password should be of minimum 6 characters length')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
        'Password must contain 6 characters, one uppercase, one lowercase, one number and one special case Character'
      )
      .required('Password is required'),
    passwordConfirmation: yup
      .string()
      .required('this field is required')
      .oneOf(
        [yup.ref('password'), null],
        "passwords didn't match!"
      ),
  });

  const [apiError, setApiError] = useState(undefined);
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      companyName: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      const response = await dispatch(signUp(values));
      if (response.statusText === 'Created') {
        const response = await dispatch(signIn(values));
        dispatch(handleApiResponse(await response));
      } else {
        setApiError(response.data.email);
      }
    }
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <div className={classes.authWrapper}>
        <TextField
          variant="outlined"
          required
          id="first_name"
          name="first_name"
          label="First Name"
          value={formik.values.first_name}
          onChange={formik.handleChange}
          error={formik.touched.first_name && Boolean(formik.errors.first_name)}
          helperText={formik.touched.first_name && formik.errors.first_name}
          className={`${classes.authWrapper}__name`}
        />
        <TextField
          variant="outlined"
          required
          id="last_name"
          name="last_name"
          label="Last Name"
          value={formik.values.last_name}
          onChange={formik.handleChange}
          error={formik.touched.last_name && Boolean(formik.errors.last_name)}
          helperText={formik.touched.last_name && formik.errors.last_name}
          className={`${classes.authWrapper}__name`}
        />
      </div>
      <TextField
        fullWidth
        variant="outlined"
        required
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={Boolean(apiError) || formik.touched.email && Boolean(formik.errors.email)}
        helperText={apiError || formik.touched.email && formik.errors.email}
      />
      {selectedValue === 'employer' && (
        <TextField
          fullWidth
          variant="outlined"
          required
          id="companyName"
          name="companyName"
          label="Company Name"
          value={formik.values.companyName}
          onChange={formik.handleChange}
        />
      )}
      <TextField
        fullWidth
        variant="outlined"
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <TextField
        fullWidth
        variant="outlined"
        id="passwordConfirmation"
        name="passwordConfirmation"
        label="Confirm Password"
        type="password"
        value={formik.values.passwordConfirmation}
        onChange={formik.handleChange}
        error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
        helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
      />
      <Button fullWidth type="submit">
        Sign Up
      </Button>
      <div className={`${classes.authWrapper}__linkedin-Icon-Wrapper`}>
        <p>Or</p>
        <LinkedInPage/>
      </div>

    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  }
}

export default connect(mapStateToProps)(SignUpForm);
