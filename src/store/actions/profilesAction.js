import {SHOW_PROFILES} from "../actionTypes/profilesTypes";

export const showProfiles = (profiles) => {
    return {
        type: SHOW_PROFILES,
        payload: profiles
    }
}
