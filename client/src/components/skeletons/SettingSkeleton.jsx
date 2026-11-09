function SettingSkeleton({ skeletonContacts = [] }) {
  return (
    <div className="container mx-auto px-4 pt-20 max-w-5xl space-y-8">
      <section className="bg-base-300 rounded-xl p-6 space-y-6">
        <div className="space-y-2">
          <div className="skeleton h-6 w-40" />
          <div className="skeleton h-4 w-64" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {skeletonContacts.map((_, index) => (
            <div key={index} className="space-y-2">
              <div className="skeleton h-16 w-full rounded-lg" />
              <div className="skeleton h-3 w-16 mx-auto" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-base-300 rounded-xl p-6 space-y-6">
        <div className="space-y-2">
          <div className="skeleton h-6 w-32" />
          <div className="skeleton h-4 w-56" />
        </div>
        <div className="border border-base-content/10 rounded-xl overflow-hidden">
          <div className="flex items-center gap-3 p-4 border-b border-base-content/10">
            <div className="skeleton w-11 h-11 rounded-full" />

            <div className="flex-1 space-y-2">
              <div className="skeleton h-4 w-32" />
              <div className="skeleton h-3 w-16" />
            </div>
          </div>
          <div className="p-5 space-y-6 min-h-64">
            <div className="flex justify-start">
              <div className="skeleton h-12 w-48 rounded-xl" />
            </div>

            <div className="flex justify-end">
              <div className="skeleton h-12 w-56 rounded-xl" />
            </div>

            <div className="flex justify-start">
              <div className="skeleton h-12 w-40 rounded-xl" />
            </div>
          </div>
          <div className="p-4 border-t border-base-content/10">
            <div className="skeleton h-11 w-full rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default SettingSkeleton;
