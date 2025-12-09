import React from 'react'
import { WeatherData } from '../types/weather'

export default function CurrentWeather({ data }: { data: WeatherData }) {
  return (
    <div>CurrentWeather
        <h2>{data.name}</h2>
        <p>Temperature: {data.main.temp}</p>
    </div>
  )
}

// export interface WeatherData {
//     name: string;
//     main: {
//         temp: number;
//         feels_like: number;
//         temp_min: number;
//         temp_max: number;
//         humidity: number;
//     };
//     weather: {
//         main: string;
//         description: string;
//         icon: string;
//     }[];
//     wind: {
//         speed: number;
//         gust: number;
//     };
// }