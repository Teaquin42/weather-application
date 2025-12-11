'use client';

import { useEffect, useState } from 'react';
import { WeatherData } from '../types/weather';
import { getWeatherIconUrl } from '../lib/utils';

export default function CurrentWeather({ location }: { location: string }) {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch(`/api/weather?location=${location}`);
                const data = await res.json();
                if (res.ok) {
                    setWeather(data);
                } else {
                    setError(data.error || 'Failed to fetch weather data');
                }
            } catch (error) {
                setError('Failed to fetch weather data');
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [location]);

    if (loading) return <div>Loading weather...</div>;
    if (error) return <div className='mt-4 text-red-600'>{error}</div>;
    if (!weather) return null;
    
    return (
    <div className='bg-white/50 rounded-xl shadow p-4 mb-8 w-full'>
        <div className='text-center mb-4'>
            <h1 className='text-3xl font-semibold mb-2'>Current Weather</h1>
            <h2 className='text-2xl font-semibold'>{weather.name}</h2>
            <div className='flex items-center justify-center gap-2 mt-2'>
                <p className='text-4xl font-bold'>{weather.main.temp}°C</p>
                <img
                src={getWeatherIconUrl(weather.weather[0].icon, '2x')}
                alt={weather.weather[0].description}
                />
            </div>
            <div className='flex items-center justify-center gap-10 mt-2'>
                <p>Humidity: {weather.main.humidity}%</p>
                <p>Wind Speed: {weather.wind.speed} mph</p>
                <p className='text-gray-500 mt-1 capitalize'>{weather.weather[0].description}</p>
                
            </div>
        </div>
    </div>
    )
}