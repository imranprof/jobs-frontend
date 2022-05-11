import axios from "axios";

import {authenticate} from "../store/actions/authAction";

const signUpURL = process.env.NEXT_PUBLIC_SIGNUP_URL
const signInURL = process.env.NEXT_PUBLIC_SIGNIN_URL
const signOutURL = process.env.NEXT_PUBLIC_SIGNOUT_URL

export function setAuthToken(token) {
  if (token) {
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common["Authorization"];
  }
}

export function signUp(values) {
  return async () => {
  const {name, email, password, passwordConfirmation} = values
  const data = {user: {name, email, password, passwordConfirmation}}
  const response = await axios.post(signUpURL, data)
    .then(data => data)
    .catch(err => err.response);
  return (response);
  }
}

export function signIn(values) {
  return async () => {
    const {email, password} = values
    const auth = {email, password}
    const response = await axios.post(signInURL, auth)
      .then(data => data)
      .catch(err => err.response);
    return (response);
  }
}

export function SignOut() {
  return async (dispatch) => {
    await axios.delete(signOutURL)
      .then(async () => {
        await setAuthToken(false)
        await dispatch(authenticate(false))
      })
      .catch(err => alert(err));
  }
}
