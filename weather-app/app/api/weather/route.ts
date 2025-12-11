import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const location = req.nextUrl.searchParams.get("location");
    if (!location) {
        return NextResponse.json({ error: "Location is required" }, { status: 400 });
    }

    const trimmedLocation = location.trim().toUpperCase();
    const apiKey = process.env.WEATHER_API_KEY;
    // Check is location is UK postcode (UK Gov postcode regex)
    const isPostcode = /^([A-Z][A-HJ-Y]?\d[A-Z\d]? ?\d[A-Z]{2}|GIR ?0A{2})$/.test(trimmedLocation)

    // Set url based on if location is city or UK postcode
    const url = isPostcode? `https://api.openweathermap.org/data/2.5/weather?zip=${trimmedLocation},GB&appid=${apiKey}`
    : `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(trimmedLocation)}&appid=${apiKey}`;

    try {
        const res = await fetch(url);
        if (!res.ok) {
            return NextResponse.json({ error: "Failed to fetch weather data" }, { status: res.status });
        }
        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to fetch weather data" }, { status: 500 });
    }
}