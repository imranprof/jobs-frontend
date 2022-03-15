import {useContext, useState} from "react";

import {Button, Icon, Box, TextField} from "@material-ui/core";
import {setAuthToken, SignIn} from "../../operations";
import FontAwesomeIcons from "../../../../styles/FontAwesomeIcons";

import {useFormik} from 'formik';
import * as yup from 'yup';
import {AuthContext} from "../../../contexts/AuthContext";

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
      'Password must contain 6 characters, one uppercase, one lowercase, one number and one special case Character'
    )
    .required('Password is required'),
});

const SignInForm = ({setShowSignInModal}) => {
  const {setAuthenticated} = useContext(AuthContext);
  const [apiError, setApiError] = useState(undefined);
  const HandleApiResponse = response => {
    if (response.statusText === 'Unauthorized') {
      setApiError(response.data.message);
    } else {
      setAuthToken(response.data.authToken);
      setAuthenticated(true);
      setShowSignInModal(false);
    }
  }
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      const response = await SignIn(values);
      HandleApiResponse(await response);
    }
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      {apiError &&
      <Box display="flex"
           justifyContent="center"
           color="red"
           marginTop={-3}
           marginBottom={2}
      >{apiError}</Box>
      }
      <TextField
        fullWidth
        variant="outlined"
        required
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
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
      <Button fullWidth type="submit" endIcon={<Icon className={FontAwesomeIcons.signIn}/>}>
        Sign In
      </Button>
    </Box>
  );
}

export default SignInForm;
