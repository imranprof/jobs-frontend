import axios from "axios";

import {authenticate, signInRejected} from "../store/actions/authAction";

const signUpURL = `${process.env.NEXT_PUBLIC_APP_URL}/users`
const signInURL = `${process.env.NEXT_PUBLIC_APP_URL}/sign_in`
const signOutURL = `${process.env.NEXT_PUBLIC_APP_URL}/sign_out`
const linkedinLoginUrl = `${process.env.NEXT_PUBLIC_APP_URL}/linkedin_login`
const linkedinGetProfileUrl = `${process.env.NEXT_PUBLIC_LINKEDIN_API_URL}/me?`
const linkedinGetEmailUrl = `${process.env.NEXT_PUBLIC_LINKEDIN_API_URL}/emailAddress?q=members&projection=(elements*(handle~))`
const linkedinClientId = process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID
const linkedinClientSecret = process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_SECRET
const linkedinRedirectUri = process.env.NEXT_PUBLIC_LINKEDIN_REDIRECT_URI
const linkedinAccessTokenUrl = process.env.NEXT_PUBLIC_LINKEDIN_ACCESS_TOKEN_URL

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

export const setPrivateRole = (role) => {
  setRole(role)
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
        await setRole('')
      })
      .catch(err => alert(err));
  }
}


export const signInWithLinkedin = (values) => {
  return async () => {
    const data = {
      social_auth: values
    }
    const response = await axios.post(linkedinLoginUrl, data)
      .then(data => data)
      .catch(err => err.response);
    return (response);
  }
}

export const requestAccessToken = (code) => {

  const qs = require('qs');
  return (dispatch) => {
    const data = {
      "grant_type": 'authorization_code',
      "code": code,
      "redirect_uri": linkedinRedirectUri,
      "client_id": linkedinClientId,
      "client_secret": linkedinClientSecret
    }

    axios.post(linkedinAccessTokenUrl, qs.stringify(data))
      .then(async (res) => {

          let profileResponse = await requestProfileData(res.data.access_token)
          let emailResponse = await requestEmail(res.data.access_token)

          if (profileResponse.status === 200 && emailResponse.status === 200) {
            let response = await dispatch(signInWithLinkedin({
              first_name: profileResponse.data.localizedFirstName,
              last_name: profileResponse.data.localizedLastName,
              email: emailResponse.data.elements[0]["handle~"].emailAddress
            }))
            dispatch(handleApiResponse(await response));
          }

        }
      )
      .catch(err => err.response);


  }
}

const requestProfileData = (token) => {

  const params = {
    'oauth2_access_token': token
  };

  return axios.get(linkedinGetProfileUrl, {params: params})
    .then(res => res)
    .catch(err => err.response)

}

const requestEmail = (token) => {
  const params = {
    'oauth2_access_token': token
  };
  return axios.get(linkedinGetEmailUrl, {params: params})
    .then(res => res)
    .catch(err => err.response)
}

