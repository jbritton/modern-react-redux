import axios from 'axios';


const API_KEY = 'ab632fddae05ac12c42370db3a6fc4db';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?mode=json&appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;

    // construct a get request - returns a promise
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}