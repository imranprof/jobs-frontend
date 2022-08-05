import {useRouter} from "next/router";
import {useEffect} from "react";
import {useDispatch, connect} from "react-redux";
import {useFormik} from 'formik';
import * as yup from 'yup';

import {Button, Icon, Box, TextField} from "@material-ui/core";

import {signIn, handleApiResponse} from "../operations";
import FontAwesomeIcons from "../../../styles/FontAwesomeIcons";
import {modalType} from "../../store/actions/authAction";

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
});

const SignInForm = ({error, isAuthenticated}) => {
  const dispatch = useDispatch()
  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (isAuthenticated) {
        await router.push("/");
        dispatch(modalType(''));
      }
    })()
  }, [isAuthenticated])

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      await router.prefetch('/');
      const response = await dispatch(signIn(values));
      dispatch(handleApiResponse(await response));
    }
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      {error &&
      <Box
        display="flex"
        justifyContent="center"
        color="red"
        marginTop={-3}
        marginBottom={2}
      >
        {error}
      </Box>
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

const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
    isAuthenticated: state.auth.isAuthenticated,
  }
}

export default connect(mapStateToProps)(SignInForm);
