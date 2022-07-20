import { combineReducers } from 'redux';
import {profilesReducer} from "./profilesReducers";
import {profileReducer} from "./profileReducers";
import {authReducers} from "./authReducers";
import {topSectionReducer} from "./topSectionReducers";
import {resumeReducers} from "./resumeReducers";
import {portfolioReducer} from "./portfolioReducers"
import {blogReducer} from "./blogReducers";
import {featureReducer} from "./featureReducers";

const rootReducers = combineReducers({
    allProfiles: profilesReducer,
    profile: profileReducer,
    topSection: topSectionReducer,
    editResume: resumeReducers,
    auth: authReducers,
    portfolios: portfolioReducer,
    blogs: blogReducer,
    features: featureReducer
})

export default rootReducers;
