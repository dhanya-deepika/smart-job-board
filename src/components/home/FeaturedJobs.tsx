import JobCard from "../jobs/JobCard";
import SkeletonCard from "../jobs/SkeletonCard";
import { useJobs } from "../../hooks/useJobs";

const FeaturedJobs = () => {
  const { jobs, loading } = useJobs();

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Featured Jobs
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Hand-picked opportunities from top companies.
        </p>
      </div>

      {loading ? (
        <div className="flex flex-wrap justify-center gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]">
              <SkeletonCard />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-6 animate-in fade-in duration-500">
          {jobs.slice(0, 3).map((job) => (
            <div key={job.id} className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]">
              <JobCard job={job} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedJobs;