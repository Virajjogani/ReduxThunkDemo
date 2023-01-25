import { GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS } from "../constant/userConstants";

export const userReducer = (state = { user: [] }, action) => {
    switch (action.type) {
        case GET_USER_REQUEST:
            return { loading: true, user: [] }
        case GET_USER_SUCCESS:
            return { loading: false, user: action.payload }
        case GET_USER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
