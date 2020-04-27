import makeRequest from './makeRequest.js';

const key = 'c268af90';

export default function getFilms(id){
    return makeRequest(`http://www.omdbapi.com/?i=${id}&apikey=${key}`)
}