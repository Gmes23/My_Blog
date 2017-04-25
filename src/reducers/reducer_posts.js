import { FETCH_POST } from '../actions/index';

const INITIAL_STATE = { post: null };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_POST:
            return { ...state, post: action.payload.data }
        default:
            return state;
    }
}