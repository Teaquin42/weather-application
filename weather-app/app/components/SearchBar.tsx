"use client"
import React from 'react'
import { fetchWeatherData } from '../actions'

const handleSearch = async (formData: FormData) => {
    const location = formData.get("location") as string;
    const response = await fetchWeatherData(location);
    if (response?.data) {
        console.log(response.data);
    } else {
        console.log("No data found");
    }
}

const SearchBar = () => {
  return (
    <div>SearchBar
        <form action={handleSearch}>
            <input type="text" placeholder="Enter city or postcode" name="location" 
            className="border border-gray-300 rounded-l-md p-2"/>
            <button type="submit"
            className="border border-gray-300 rounded-r-md p-2"
            >Search</button>
        </form>
    </div>
  )
}

export default SearchBar