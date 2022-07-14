import axios from "axios";

const profileURL = process.env.NEXT_PUBLIC_PROFILE_URL;

export function getProfileData(values) {
  const {id} = values
  return axios.get(profileURL, {
    params: {
      user_id: id
    }
  }).then(res => res.data)
    .catch(err => err.data);
}

export const setProfile = ({profile, features},
                           {
                             setHeadline,
                             setBio,
                             setIntro,
                             setExpertises,
                             setLinks,
                             setProfileID,
                             setName,
                             setAvatar
                           }) => {
  setName({firstName: profile.first_name, lastName: profile.last_name})
  setProfileID(profile.id);
  setHeadline(profile.headline);
  setBio(profile.bio);
  setIntro(profile.title);
  setAvatar(profile.avatar);
  setExpertises(profile.expertises);
  delete profile.social_links.id;
  setLinks(profile.social_links);
}

export const updateHeadline = ({headline, setHeadline, profileID}) => {
  const data = {
    "user": {
      "user_profile_attributes": {
        "id": profileID,
        "headline": headline
      }
    }
  }

  axios.patch(profileURL, data).then(res => setHeadline(res.data.profile.headline))
    .catch(err => err.response);
}

export const updateBio = ({bio, setBio, profileID}) => {
  const data = {
    "user": {
      "user_profile_attributes": {
        "id": profileID,
        "bio": bio
      }
    }
  }

  axios.patch(profileURL, data).then(res => setBio(res.data.profile.bio))
    .catch(err => err.response);
}

export const updateIntroAndExpertises = ({intro, setIntro, expertises, setExpertises, profileID}) => {
  const data = {
    "user": {
      "user_profile_attributes": {
        "id": profileID,
        "title": intro,
        "expertises": expertises
      }
    }
  }

  axios.patch(profileURL, data).then(res => {
    setIntro(res.data.profile.title);
    setExpertises(res.data.profile.expertises);
  }).catch(err => err.response);
}
