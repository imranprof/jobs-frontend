import {SHOW_PROFILES, HAS_MORE_PROFILES} from "../constants/profilesConstants";

export const showProfiles = (profiles) => {
    return {
        type: SHOW_PROFILES,
        payload: profiles
    }
}

export const hasMoreProfiles = (hasMore) => {
    return {
        type: HAS_MORE_PROFILES,
        payload: hasMore
    }
}
