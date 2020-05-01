import makeRequest from './makeRequest.js';

const key = 'c268af90';

export default function getFilms(name, page = 1){
    return makeRequest(`https://www.omdbapi.com/?s=${name}&page=${page}&apikey=${key}`)
}