import axios from "axios";

import {authenticate, signInRejected} from "../store/actions/authAction";

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

export function setProfileSlug(profileSlug) {
  if (profileSlug) {
    localStorage.setItem('profileSlug', profileSlug);
  } else {
    localStorage.removeItem('profileSlug');
  }
}

export function setPrivateSlug(slug) {
  if (slug) {
    localStorage.setItem('privateSlug', slug);
  } else {
    localStorage.removeItem('privateSlug');
  }
}

export const getPrivateSlug = () => {
  if (typeof window !== 'undefined') {
    const privateSlug = localStorage.getItem('privateSlug')
    if (privateSlug) {
      return privateSlug;
    }
    return null;
  }
}

export function getRole() {
  if (typeof window !== 'undefined') {
    const role = localStorage.getItem('role')
    if (role) {
      return role;
    }
    return null;
  }
}

export function setRole(role) {
  if (role) {
    localStorage.setItem('role', role);
  } else {
    localStorage.removeItem('role');
  }
}

export function handleApiResponse(response) {
  return async (dispatch) => {
    if (response.statusText === 'OK') {
      setAuthToken(response.data.authToken);
      setProfileSlug(response.data.profile_slug);
      setPrivateSlug(response.data.profile_slug);
      setRole(response.data.role)
      await dispatch(authenticate({authenticate: true}))
    } else {
      await dispatch(signInRejected(response.data.message))
    }
  }
}

export function signUp(values) {
  return async () => {
    const {first_name, last_name, email, password, passwordConfirmation, companyName} = values
    const data = {
      user: {
        first_name,
        last_name,
        email,
        password,
        password_confirmation: passwordConfirmation
      }
    }
    if (companyName !== "") {
      data.user["company_name"] = companyName;
      data.user["role"] = "employer";
    }
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
        await setProfileSlug(false)
        await dispatch(authenticate(false))
      })
      .catch(err => alert(err));
  }
}
