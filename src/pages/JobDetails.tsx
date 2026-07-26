import { useParams, Link } from "react-router-dom";
import { useJob } from "../hooks/useJobs";
import { useSavedJobs } from "../hooks/useSavedJobs";
import { FaSpinner } from "react-icons/fa";

const JobDetails = () => {
  const { id } = useParams();
  const { job, loading } = useJob(id ? Number(id) : null);
  const { isJobSaved, toggleSavedJob } = useSavedJobs();

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <FaSpinner className="h-10 w-10 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="py-20 text-center animate-in fade-in">
        <h2 className="text-2xl font-bold text-gray-900">Job not found</h2>
        <p className="mt-2 text-gray-600">The job you're looking for doesn't exist or has been removed.</p>
        <Link to="/jobs" className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-2.5 text-white hover:bg-blue-700">
          Back to Jobs
        </Link>
      </div>
    );
  }

  const saved = isJobSaved(job.id);

  return (
    <div className="mx-auto max-w-4xl px-6 py-12 animate-in fade-in duration-500">
      <Link to="/jobs" className="mb-6 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900">
        ← Back to all jobs
      </Link>

      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{job.title}</h1>
            <p className="mt-2 text-xl font-medium text-indigo-600">{job.company}</p>
          </div>
          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
            <button
              onClick={() => toggleSavedJob(job)}
              className={`flex items-center justify-center gap-2 rounded-lg border px-6 py-3 font-medium transition-colors ${
                saved
                  ? "border-red-100 bg-red-50 text-red-600 hover:bg-red-100"
                  : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <span>{saved ? "❤️" : "🤍"}</span> {saved ? "Saved" : "Save Job"}
            </button>
            <button className="rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition hover:bg-blue-700">
              Apply Now
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 border-y border-gray-100 py-6">
          <div className="flex items-center gap-2 text-gray-700">
            <span>📍</span> <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <span>💼</span> <span>{job.employmentType}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <span>💰</span> <span>{job.salary}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <span>📈</span> <span>{job.experienceLevel}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <span>🕒</span> <span>Posted {job.postedAt}</span>
          </div>
        </div>

        <div className="mt-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900">About the Role</h2>
            <p className="mt-4 leading-relaxed text-gray-700">{job.description}</p>
          </section>

          {job.skills && job.skills.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900">Skills Required</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Requirements</h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-gray-700">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;