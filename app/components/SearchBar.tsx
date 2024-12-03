import { useState } from "react";

export default function SearchBar({
  onSearch,
}: {
  onSearch: (city: string) => void;
}) {
  const [city, setCity] = useState("");

  return (
    <div className="flex items-center justify-center gap-4 my-4">
      <input
        type="text"
        className="ripple-input w-64"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="ripple-btn bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => onSearch(city)}
      >
        Search
      </button>
    </div>
  );
}
