"use client"

import { useState } from 'react'

export default function SearchBar({ onSubmitLocation }: { onSubmitLocation: (loc: string) => void; }) {
    const [input, setInput] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page reload
        if (!input.trim()) return; // Ignore empty input
        onSubmitLocation(input);
        setInput(""); // Clear input after submission
        console.log("Searching for: ", input);
    }

    return (
    <div>
        <form onSubmit={handleSearch}
        className="flex mb-8 w-full max-w-md">
            <input value={input} onChange={(e) => setInput(e.target.value)}
            type="text" placeholder="Enter city or postcode" name="location" 
            className="border border-gray-300 rounded-l-md p-2"/>
            <button type="submit"
            className="border border-gray-300 rounded-r-md p-2"
            >Search</button>
        </form>
    </div>
  )
}
