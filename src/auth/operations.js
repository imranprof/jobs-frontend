import axios from "axios";

const signUpURL = 'http://localhost:3000/users';
const signInURL = 'http://localhost:3000/sign_in';
const signOutURL = 'http://localhost:3000/sign_out';

export function setAuthToken(token) {
  if (token) {
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common["Authorization"];
  }
}

export function SignUp(values) {
  const {name, email, password, passwordConfirmation} = values
  const data = {user: {name, email, password, passwordConfirmation}}
  const response = axios.post(signUpURL, data)
    .then(data => data)
    .catch(err => err.response);
  return (response);
}

export function SignIn(values) {
  const {email, password} = values
  const auth = {email, password}
  const response = axios.post(signInURL, auth)
    .then(data => data)
    .catch(err => err.response);
  return (response);
}

export function SignOut(setAuthenticated) {
  axios.delete(signOutURL)
    .then(() => {
      setAuthToken(false);
      setAuthenticated(false);
    })
    .catch(err => alert(err.response.data.message));
}
