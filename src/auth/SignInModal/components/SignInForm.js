import {Box} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import {useFormik} from 'formik';
import * as yup from 'yup';
import {SignIn} from "../../operations";
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

const SignInForm = ({setShowSignInModal}) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            SignIn(values);
            setShowSignInModal(false);
        }
    });

    return (
    <Box component="form" onSubmit={formik.handleSubmit}>
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
};

export default SignInForm;