import {useRouter} from "next/router";
import {useEffect, useState} from 'react';
import {connect, useDispatch} from "react-redux";

import {useTheme} from "@material-ui/core/styles";

import {ResumeStyle} from "./style";
import ResumeCards from "./components/resumeCards";
import NavList from "./components/navList";
import {getDemoResumeAction, getResumeAction} from "../../../store/actions/resumeActions";

const Resume = (props) => {
  const theme = useTheme();
  const resumeWrapper = ResumeStyle(theme).resumeWrapper;
  const {resume, profileSlug} = props;
  const dispatch = useDispatch()
  const {profile} = useRouter().query;

  useEffect(() => {
    profile && profileSlug ? dispatch(getResumeAction()) : dispatch(getDemoResumeAction());
  }, [profile, profileSlug])

  let resumeSections = [];
  for (let key in resume) {
    resumeSections.push(key);
  }

  const [selected, setSelected] = useState(0);
  const cardType = resumeSections[selected];
  const cardData = resume[cardType];

  return (
    <>
      <div className={resumeWrapper} id="resume">
        <div className={`${resumeWrapper}__body`}>
          <NavList
            resumeSections={resumeSections}
            resumeClasses={resumeWrapper}
            selected={selected}
            setSelected={setSelected}
          />
          <ResumeCards cardData={cardData} cardType={cardType}/>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    resume: state.resumeItems.resume,
    profileSlug: state.auth.profileSlug
  }
}

export default connect(mapStateToProps)(Resume);
