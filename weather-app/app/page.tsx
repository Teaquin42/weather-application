'use client';

import { useState } from 'react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import FiveDayWeather from './components/FiveDayWeather';


export default function Home() {
  const [location, setLocation] = useState<string | null>(null);

  return (
    <div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <main className='flex min-h-100 w-full max-w-4xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start'>
        <h1 className='text-5xl font-bold mb-8'>Weather Forecast</h1>
        <SearchBar onSubmitLocation={setLocation} />
      {location && (
      <><CurrentWeather location={location} />
      <FiveDayWeather location={location} />
      </>)}
      </main>
    </div>
  );
}
