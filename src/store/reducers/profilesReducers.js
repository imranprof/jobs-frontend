import {HAS_MORE_PROFILES, SHOW_PROFILES} from "../constants/profilesConstants";
import {ProfileCardData} from "../../../API/mock/profiles/profileCardData";

const chunkedData = ProfileCardData.slice(0, 8)

const initialState = {
    profiles: chunkedData,
    hasMore: true,
}

export const profilesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_PROFILES:
            return {
                ...state,
                profiles: action.payload,
            }
        case HAS_MORE_PROFILES:
            return {
                ...state,
                hasMore: action.payload.hasMore
            }
        default:
            return state
    }
}
