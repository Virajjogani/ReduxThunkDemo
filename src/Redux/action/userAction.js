import axios from "axios"
import { GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS } from "../constant/userConstants"

export const userAction = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: GET_USER_REQUEST })
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log("🚀 ~   ", data)
            dispatch({ type: GET_USER_SUCCESS, payload: data })
        } catch (error) {
            dispatch({
                type: GET_USER_FAIL,
                payload: error.data && error.response.data.message ? error.response.data.message : error.message
            })
        }
    }

}

