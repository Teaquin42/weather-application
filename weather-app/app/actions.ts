"use server"

export async function fetchWeatherData(location: string) {
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.WEATHER_API_KEY}`);
        // console.log("Response: ", res);
        const data = await res.json();
        return { data };
    }
    catch (error) {
        // console.log("Error fetching weather data");
        console.error("error: ", error);
    }
}