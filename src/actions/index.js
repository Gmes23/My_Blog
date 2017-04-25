import axios from 'axios'

export const FETCH_POST = 'FETCH_POST';

const ROOT_URL = 'https://raw.githubusercontent.com/Gmes23/CodeWars/master/Javascript/Fundamentals';

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/${id}.js`);

    return {
        type: FETCH_POST,
        payload: request
    };
}