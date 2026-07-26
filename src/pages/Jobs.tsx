import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import JobCard from "../components/jobs/JobCard";
import SkeletonCard from "../components/jobs/SkeletonCard";
import { useJobs } from "../hooks/useJobs";

const Jobs = () => {
  const { jobs, loading } = useJobs();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const searchQuery = searchParams.get("search") || "";
  const [location, setLocation] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.requirements?.some(req => req.toLowerCase().includes(searchQuery.toLowerCase())); // Search skills too if available
      const matchesLocation = location ? job.location === location : true;
      const matchesType = employmentType ? job.employmentType === employmentType : true;
      const matchesExperience = experienceLevel ? job.experienceLevel === experienceLevel : true;

      return matchesSearch && matchesLocation && matchesType && matchesExperience;
    });
  }, [jobs, searchQuery, location, employmentType, experienceLevel]);

  // Extract unique filter options from data
  const locations = Array.from(new Set(jobs.map((j) => j.location)));
  const types = Array.from(new Set(jobs.map((j) => j.employmentType)));
  const levels = Array.from(new Set(jobs.map((j) => j.experienceLevel)));

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 animate-in fade-in duration-500">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Find Your Next Role
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Browse all our available job opportunities matching your skills.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-12 flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by job title or company..."
            value={searchQuery}
            onChange={(e) => {
              const newParams = new URLSearchParams(searchParams);
              if (e.target.value) {
                newParams.set("search", e.target.value);
              } else {
                newParams.delete("search");
              }
              setSearchParams(newParams, { replace: true });
            }}
            className="w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 pl-11 text-gray-900 focus:border-blue-500 focus:ring-blue-500 outline-none border transition-colors"
          />
          <span className="absolute left-4 top-3.5 text-gray-400">🔍</span>
        </div>

        <div className="flex flex-wrap gap-4">
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="flex-1 min-w-[150px] rounded-xl border-gray-300 bg-gray-50 px-4 py-2.5 outline-none border focus:border-blue-500 focus:ring-blue-500"
            disabled={loading}
          >
            <option value="">All Locations</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>

          <select
            value={employmentType}
            onChange={(e) => setEmploymentType(e.target.value)}
            className="flex-1 min-w-[150px] rounded-xl border-gray-300 bg-gray-50 px-4 py-2.5 outline-none border focus:border-blue-500 focus:ring-blue-500"
            disabled={loading}
          >
            <option value="">All Job Types</option>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          <select
            value={experienceLevel}
            onChange={(e) => setExperienceLevel(e.target.value)}
            className="flex-1 min-w-[150px] rounded-xl border-gray-300 bg-gray-50 px-4 py-2.5 outline-none border focus:border-blue-500 focus:ring-blue-500"
            disabled={loading}
          >
            <option value="">All Experience Levels</option>
            {levels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Jobs Grid / Empty State */}
      {loading ? (
        <div className="flex flex-wrap justify-center gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]">
              <SkeletonCard />
            </div>
          ))}
        </div>
      ) : filteredJobs.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-6 animate-in fade-in duration-500">
          {filteredJobs.map((job) => (
            <div key={job.id} className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]">
              <JobCard job={job} />
            </div>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center animate-in fade-in">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-4xl mb-6">
            🧐
          </div>
          <h2 className="text-2xl font-bold text-gray-900">No jobs found</h2>
          <p className="mt-2 text-gray-600">
            We couldn't find any jobs matching your search criteria. Try adjusting your filters.
          </p>
          <button
            onClick={() => {
              const newParams = new URLSearchParams(searchParams);
              newParams.delete("search");
              setSearchParams(newParams, { replace: true });
              
              setLocation("");
              setEmploymentType("");
              setExperienceLevel("");
            }}
            className="mt-6 rounded-lg bg-blue-50 px-6 py-2.5 font-medium text-blue-600 hover:bg-blue-100 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Jobs;