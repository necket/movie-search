import makeRequest from './makeRequest.js';

const key = 'c268af90';

export default function getFilms(id){
    return makeRequest(`https://www.omdbapi.com/?i=${id}&apikey=${key}`)
}