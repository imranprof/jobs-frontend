import { combineReducers } from 'redux';
import {profilesReducer} from "./profilesReducers";
import {profileReducer} from "./profileReducers";

const rootReducers = combineReducers({
    allProfiles: profilesReducer,
    profile: profileReducer
})

export default rootReducers;
