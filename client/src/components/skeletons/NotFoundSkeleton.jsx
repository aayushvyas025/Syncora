
function NotFoundSkeleton() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-sm px-4">
      <div className="skeleton h-24 md:h-32 w-64 md:w-80 rounded-lg" />
      <div className="skeleton h-1 w-16 rounded my-5 md:my-7" />
      <div className="skeleton h-8 md:h-9 w-64 md:w-80 rounded" />
      <div className="w-full max-w-md space-y-2 mt-4 flex flex-col items-center">
        <div className="skeleton h-4 w-full rounded" />
        <div className="skeleton h-4 w-4/5 rounded" />
      </div>
      <div className="skeleton h-11 w-36 rounded-md mt-6" />

    </div>
  );
}

export default NotFoundSkeleton;
