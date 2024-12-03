import { useState } from "react";

export default function SearchBar({
  onSearch,
}: {
  onSearch: (city: string) => void;
}) {
  const [city, setCity] = useState("");

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 my-4">
      <input
        type="text"
        className="ripple-input w-64 p-2 border rounded-md text-gray-700"
        placeholder="Enter city name (e.g., Nairobi)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="ripple-btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        onClick={() => onSearch(city)}
      >
        Search
      </button>
    </div>
  );
}
