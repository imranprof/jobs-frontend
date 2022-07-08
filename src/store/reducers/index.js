import { combineReducers } from 'redux';
import {profilesReducer} from "./profilesReducers";
import {profileReducer} from "./profileReducers";
import {authReducers} from "./authReducers";
import {editProfileReducer} from "./editProfileReducers";
import {resumeReducers} from "./resumeReducers";
import {portfolioReducer} from "./portfolioReducers"
import {blogReducer} from "./blogReducers";

const rootReducers = combineReducers({
    allProfiles: profilesReducer,
    profile: profileReducer,
    editProfile: editProfileReducer,
    editResume: resumeReducers,
    auth: authReducers,
    portfolios: portfolioReducer,
    blogs: blogReducer
})

export default rootReducers;
