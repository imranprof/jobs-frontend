import {Box} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import {useFormik} from 'formik';
import * as yup from 'yup';
import {SignUp} from "../../operations";
import FontAwesomeIcons from "../../../../styles/FontAwesomeIcons";

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

const SignUpForm = ({setShowSignUpModal}) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            SignUp(values);
            setShowSignUpModal(false);
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
            <TextField
                fullWidth
                variant="outlined"
                id="confirmPassword"
                name="Confirm Password"
                label="Confirm Password"
                type="password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
            />
            <Button fullWidth type="submit" endIcon={<Icon className={FontAwesomeIcons.signIn}/>}>
                Sign Up
            </Button>
        </Box>
    );
};

export default SignUpForm;