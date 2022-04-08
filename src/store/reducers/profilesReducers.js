import {SHOW_PROFILES} from "../constants/profilesTypes";
import {ProfileCardData} from "../../../API/mock/profiles/profileCardData";

const chunkedData = ProfileCardData.slice(0, 8)

const initialState = {
    profiles: chunkedData,
}

export const profilesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_PROFILES:
            return {
                ...state,
                profiles: action.payload,
            }
        default:
            return state
    }
}
