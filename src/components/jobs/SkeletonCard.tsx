const SkeletonCard = () => {
  return (
    <div className="flex h-[320px] w-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm animate-pulse">
      <div>
        <div className="h-6 w-3/4 rounded-md bg-gray-200"></div>
        <div className="mt-2 h-4 w-1/2 rounded-md bg-gray-200"></div>

        <div className="mt-6 space-y-3">
          <div className="h-4 w-2/3 rounded-md bg-gray-100"></div>
          <div className="h-4 w-1/2 rounded-md bg-gray-100"></div>
          <div className="h-4 w-3/4 rounded-md bg-gray-100"></div>
          <div className="h-4 w-1/2 rounded-md bg-gray-100"></div>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <div className="h-10 w-24 shrink-0 rounded-lg bg-gray-200"></div>
        <div className="h-10 flex-1 rounded-lg bg-gray-200"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
