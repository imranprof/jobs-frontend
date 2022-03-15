import {Box} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import {useFormik} from 'formik';
import * as yup from 'yup';
import {setAuthToken, SignIn, SignUp} from "../../operations";
import {useState} from "react";

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

const SignUpForm = ({setAuthenticated, setShowSignUpModal}) => {
  const [apiError, setApiError] = useState(undefined);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      const response = await SignUp(values);
      if (response.statusText === 'Conflict') {
        setApiError(response.data.email);
      } else {
        const response = await SignIn(values);
        setAuthenticated(true);
        setAuthToken(response.data.authToken);
        setShowSignUpModal(false);
      }
    }
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        variant="outlined"
        required
        id="name"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
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
    </Box>
  );
};

export default SignUpForm;
