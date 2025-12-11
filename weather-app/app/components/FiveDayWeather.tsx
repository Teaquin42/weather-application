'use client';

import { use, useEffect, useState } from 'react';
import { ForecastData } from '../types/forecast';
import { getWeatherIconUrl, getDailyForecasts } from '../lib/utils';

export default function FiveDayWeather({ location }: { location: string }) {
    const [forecast, setForecast] = useState<ForecastData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        if (!location) return;

        const fetchForecast = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch(`/api/forecast?location=${location}`);
                const data = await res.json();
                if (res.ok) {
                    setForecast(data);
                } else {
                    setError(data.error || 'Failed to fetch forecast data');
                }
            } catch (error) {
                setError('Failed to fetch forecast data');
            } finally {
                setLoading(false);
            }
        };
        fetchForecast();
    }, [location]);
    if (loading) return <div>Loading forecast...</div>;
    if (error) return <div className='mt-4 text-red-600'>{error}</div>;
    if (!forecast) return null;

    const dailyForecasts = getDailyForecasts(forecast.list);
    return (
    <div className='p-4'>
        <h2 className='text-xl font-semibold mb-4'>5-Day Forecast for {forecast.city.name}</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4'>
            {dailyForecasts.map((day) => {const date = new Date(day.dt * 1000).toLocaleDateString();
            return (
            <div key={day.dt}
            className='bg-white/50 rounded-xl shadow p-4 flex flex-col items-center'>
            <p className='text-md font-semibold mb-2'>{date}</p>
            <p className='text-sm font-semibold'>Daily High: {day.main.temp_max}°C</p>
            <p className='text-sm font-semibold'>Daily Low: {day.main.temp_min}°C</p>
            <p className='text-slate-600 italic mt-6 text-center capitalize'>
                {day.weather[0].description}</p>
            <img
            src={getWeatherIconUrl(day.weather[0].icon, '2x')}
            alt={day.weather[0].description}
            />
        </div>
        );
        })}
        </div>
        </div>
        );
    }