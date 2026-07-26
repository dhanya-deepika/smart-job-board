import { Link } from "react-router-dom";
import JobCard from "../components/jobs/JobCard";
import { useSavedJobs } from "../hooks/useSavedJobs";
import { FaBookmark } from "react-icons/fa";

const SavedJobs = () => {
  const { savedJobs } = useSavedJobs();

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 animate-in fade-in duration-500">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Saved Jobs
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Review and apply to the opportunities you've bookmarked.
        </p>
      </div>

      {savedJobs.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-6 animate-in fade-in duration-500">
          {savedJobs.map((job) => (
            <div key={job.id} className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]">
              <JobCard job={job} />
            </div>
          ))}
        </div>
      ) : (
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl border border-gray-100 bg-gradient-to-b from-white to-gray-50 p-12 text-center shadow-sm animate-in fade-in duration-500">
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-blue-100/50">
            <FaBookmark className="h-10 w-10 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">No saved jobs yet</h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-gray-600">
            You haven't bookmarked any jobs. Start exploring the job board and save the ones you like to easily find them later!
          </p>
          <div className="mt-10">
            <Link
              to="/jobs"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-blue-500 hover:scale-105"
            >
              Explore Jobs Now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedJobs;