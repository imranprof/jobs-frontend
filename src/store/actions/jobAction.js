import axios from "axios";

const jobPostUrl = process.env.NEXT_PUBLIC_JOB_POST_URL


export const addJobAction = (job) => {
  const {title, description, location, skills} = job;
  console.log(skills)
  let data = {
    "job": {
      "title": title,
      "description": description,
      "skills": `{${skills}}`,
      "location": location
    }
  }

  return (dispatch) => {
    axios.post(jobPostUrl, data)
      .then(res => console.log(res.data))
      .catch(err => err.response)
  }
}
