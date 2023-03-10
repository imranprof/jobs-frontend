import { combineReducers } from 'redux';
import {profilesReducer} from "./profilesReducers";
import {authReducers} from "./authReducers";
import {topSectionReducer} from "./topSectionReducers";
import {resumeReducers} from "./resumeReducers";
import {portfolioReducer} from "./portfolioReducers"
import {blogReducer} from "./blogReducers";
import {contactReducer} from "./contactReducers";
import {featureReducer} from "./featureReducers";
import {jobsReducer} from "./jobsReducers";
import {messageReducer} from "./messageReducers";

const rootReducers = combineReducers({
    allProfiles: profilesReducer,
    topSection: topSectionReducer,
    auth: authReducers,
    portfolios: portfolioReducer,
    contacts: contactReducer,
    blogs: blogReducer,
    features: featureReducer,
    resumeItems: resumeReducers,
    allJobs: jobsReducer,
    messageList: messageReducer
})

export default rootReducers;
