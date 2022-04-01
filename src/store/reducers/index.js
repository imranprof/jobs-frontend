import { combineReducers } from 'redux';
import {profilesReducer} from "./profilesReducers";

const rootReducers = combineReducers({
    allProfiles: profilesReducer
})

export default rootReducers;
