import {SHOW_PROFILES} from "../constants/profilesTypes";

export const showProfiles = (profiles) => {
    return {
        type: SHOW_PROFILES,
        payload: profiles
    }
}
