import { Link } from "react-router-dom";
import type { Job } from "../../types/job";
import { useSavedJobs } from "../../hooks/useSavedJobs";

interface JobCardProps {
  job: Job;
}

const getInitials = (companyName: string) => {
  return companyName
    .split(" ")
    .map((word) => word[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
};

const getAvatarColor = (initials: string) => {
  const colors = [
    "bg-blue-100 text-blue-700",
    "bg-indigo-100 text-indigo-700",
    "bg-purple-100 text-purple-700",
    "bg-pink-100 text-pink-700",
    "bg-rose-100 text-rose-700",
    "bg-orange-100 text-orange-700",
    "bg-green-100 text-green-700",
    "bg-teal-100 text-teal-700",
  ];
  const charCode = initials.charCodeAt(0) || 0;
  return colors[charCode % colors.length];
};

const JobCard = ({ job }: JobCardProps) => {
  const { isJobSaved, toggleSavedJob } = useSavedJobs();
  const saved = isJobSaved(job.id);
  const initials = getInitials(job.company);

  return (
    <div className="group flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-indigo-300 hover:-translate-y-1">
      <div>
        <div className="flex items-start gap-4">
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-bold ${getAvatarColor(initials)}`}>
            {initials}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
              {job.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-gray-600 line-clamp-1">{job.company}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 text-sm font-medium">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-50 px-2.5 py-1 text-blue-700">
            <span>📍</span> <span className="truncate max-w-[120px]">{job.location}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-indigo-50 px-2.5 py-1 text-indigo-700">
            <span>💼</span> <span>{job.employmentType}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-green-50 px-2.5 py-1 text-green-700">
            <span>💰</span> <span>{job.salary}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-orange-50 px-2.5 py-1 text-orange-700">
            <span>⭐</span> <span>{job.experienceLevel}</span>
          </span>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleSavedJob(job);
          }}
          className={`flex h-10 w-24 shrink-0 items-center justify-center gap-2 rounded-lg border font-medium transition-colors ${
            saved
              ? "border-red-100 bg-red-50 text-red-600 hover:bg-red-100"
              : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900"
          }`}
          title={saved ? "Unsave Job" : "Save Job"}
        >
          <span>{saved ? "❤️" : "🤍"}</span> Save
        </button>
        <Link
          to={`/jobs/${job.id}`}
          className="flex h-10 flex-1 items-center justify-center rounded-lg bg-blue-600 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;