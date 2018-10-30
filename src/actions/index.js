import axios from 'axios'

const API_KEY = "774b88d77530047fb93c8e50430ad6a2"
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city , country){
    const url = `${ROOT_URL}&q=${city},${country}`
    const request = axios.get(url)
    return {
        type : FETCH_WEATHER,
        payload : request
    }
}
