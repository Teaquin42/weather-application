import Image from "next/image";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-100 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="">Weather Forecast</h1>
        <SearchBar />
        {/* <CurrentWeather /> */}
      </main>
    </div>
  );
}
