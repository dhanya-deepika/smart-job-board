import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/jobs?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate("/jobs");
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
          Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Dream Job Today</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
          Discover opportunities from top companies.
        </p>

        <div className="mx-auto mt-10 max-w-2xl">
          <form onSubmit={handleSearch} className="flex w-full items-center gap-2 rounded-full border border-gray-200 bg-white p-2 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 hover:shadow-md transition-shadow">
            <div className="relative flex-1">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs by title, skill, or company..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border-none bg-transparent py-3 pl-12 pr-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:text-lg"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Search
            </button>
          </form>
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-4 text-sm sm:gap-8 sm:text-base font-medium text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-xl">🔥</span> 500+ Jobs
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🏢</span> 100+ Companies
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">💼</span> Remote • Hybrid • Onsite
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
