import axios from "axios";

const signUpURL = 'http://localhost:3000/users';
const signInURL = 'http://localhost:3000/sign_in';
const signOutURL = 'http://localhost:3000/sign_out';

export function setAuthToken(token) {
    if (token) {
        localStorage.setItem("token", token);
        axios.defaults.headers.common['Authorization'] = token;
        console.log('Signed In');
    } else {
        localStorage.removeItem('token');
        delete axios.defaults.headers.common["Authorization"];
        console.log('Signed Out');
    }
}

export function SignUp(values) {
    const data = {
        user: {
            name: values.name,
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword,
        }
    };
    axios.post(signUpURL, data).then(({data}) => {
        console.log('Signed Up')
    });
}

export function SignIn(values) {
    const data = {
        email: values.email,
        password: values.password,
    };
    axios.post(signInURL, data).then(({data}) => {
        setAuthToken(data.auth_token);
    });
}

export function SignOut() {
    axios.delete(signOutURL).then(() => {
        setAuthToken(false);
    });
}
