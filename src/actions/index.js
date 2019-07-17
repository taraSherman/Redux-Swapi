// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
import axios from 'axios';

// loading state
export const FETCHING_CHARACTERS_START = 'FETCHING_CHARACTERS_START'
// if successfully completed
export const FETCHING_CHARACTERS_SUCCESS = 'FETCHING_CHARACTERS_SUCCESS'
// if failed
export const FETCHING_CHARACTERS_FAILURE = 'FETCHING_CHARACTERS_FAILURE'

// action creator
export function fetchingCharacters() {
    return (dispatch) => {
        dispatch({ type: FETCHING_CHARACTERS_START})

        axios
            .get('https://swapi.co/api/people/')
            .then((response) => {
                dispatch({ type: FETCHING_CHARACTERS_SUCCESS, payload: response.data})
            })
            .catch((error) => {
                dispatch({ type: FETCHING_CHARACTERS_FAILURE, payload: error.response.data})
            })
    }
}