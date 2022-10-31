import axios from 'axios'

export const gameApi = axios.create({baseURL: 'https://fuzzyjess-board-games.herokuapp.com'});

export const fetchReviews = () => {
    return gameApi.get('/api/reviews').then((res) => {
   
    return res.data.reviews;})
} 