import { combineReducers } from 'redux';
import {profilesReducer} from "./profilesReducers";
import {profileReducer} from "./profileReducers";
import {authReducers} from "./authReducers";
import {editProfileReducer} from "./editProfileReducers";
import {resumeReducers} from "./resumeReducers";

const rootReducers = combineReducers({
    allProfiles: profilesReducer,
    profile: profileReducer,
    editProfile: editProfileReducer,
    editResume: resumeReducers,
    auth: authReducers
})

export default rootReducers;
