import { ForecastData } from "../types/forecast";

// Utility to get weather icon URL
export function getWeatherIconUrl(iconCode: string, size: "1x" | "2x" = "1x") {
    const suffix = size === "2x" ? "@2x" : "";
    return `http://openweathermap.org/img/wn/${iconCode}${suffix}.png`;
}

// Utility to pick midday forecast from 5-day data
export function getDailyForecasts(list: ForecastData["list"]) {
    const daily: Record<string, typeof list[0]> = {};
    
    for (const item of list) {
        const date = new Date(item.dt * 1000).toLocaleDateString();
        const hour = new Date(item.dt * 1000).getHours();
        if (hour === 12 && !daily[date]) {
            daily[date] = item;
        }
    }
    return Object.values(daily).slice(0, 5);
}