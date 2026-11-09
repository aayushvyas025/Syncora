function ProfileSkeleton() {
  return (
    <div className="max-w-2xl mx-auto p-4 py-8">
      <div className="bg-base-300 rounded-xl p-6 space-y-8">
        <div className="space-y-3">
          <div className="skeleton h-7 w-40" />
          <div className="skeleton h-4 w-64" />
        </div>

        <div className="divider" />
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <div className="skeleton w-24 h-24 rounded-full shrink-0" />

          <div className="flex-1 space-y-3 text-center sm:text-left">
            <div className="skeleton h-5 w-36 mx-auto sm:mx-0" />
            <div className="skeleton h-4 w-48 mx-auto sm:mx-0" />
            <div className="skeleton h-9 w-32 rounded-lg mx-auto sm:mx-0" />
          </div>
        </div>

        <div className="divider" />
        <div className="space-y-5">
          <div className="skeleton h-6 w-44" />
          <div className="space-y-2">
            <div className="skeleton h-4 w-24" />
            <div className="skeleton h-12 w-full rounded-lg" />
          </div>
          <div className="space-y-2">
            <div className="skeleton h-4 w-16" />
            <div className="skeleton h-12 w-full rounded-lg" />
          </div>
        </div>

        <div className="divider" />
        <div className="space-y-5">
          <div className="skeleton h-6 w-44" />

          <div className="space-y-2">
            <div className="skeleton h-4 w-28" />
            <div className="skeleton h-12 w-full rounded-lg" />
          </div>

          <div className="flex justify-between items-center gap-4">
            <div className="skeleton h-4 w-36" />
            <div className="skeleton h-10 w-32 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSkeleton;
