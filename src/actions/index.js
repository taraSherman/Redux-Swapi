// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
import axios from 'axios';

// loading state
export const GET_CHARACTERS_START = 'GET_CHARACTERS_START'
// if successfully completed
export const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS'
// if failed
export const GET_CHARACTERS_FAILED = 'GET_CHARACTERS_FAILED'

// action creator
export function getCharacters() {
    return (dispatch) => {
        dispatch({ type: GET_CHARACTERS_START})

        axios
            .get('https://swapi.co/api/people/')
            .then((response) => {
                dispatch({ type: GET_CHARACTERS_SUCCESS, payload: response.data})
            })
            .catch((error) => {
                dispatch({ type: GET_CHARACTERS_FAILED, payload: error.response.data})
            })
    }
}