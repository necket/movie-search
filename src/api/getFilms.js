import makeRequest from './makeRequest.js';

const key = 'c268af90';

export default function getFilms(name){
    return makeRequest(`https://www.omdbapi.com/?s=${name}&apikey=${key}`)
}