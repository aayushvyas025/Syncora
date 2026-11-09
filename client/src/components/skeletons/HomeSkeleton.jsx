
function HomeSkeleton({skeletonContacts = []}) {
  return (
    <div className="min-h-screen bg-base-100">
      <header className="h-16 border-b border-base-300 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="skeleton w-10 h-10 rounded-xl" />
          <div className="skeleton h-5 w-20" />
        </div>
        <div className="flex items-center gap-3">
          <div className="skeleton h-10 w-28 rounded-full" />
          <div className="skeleton h-10 w-24 rounded-full" />
          <div className="skeleton h-8 w-8 rounded-lg" />
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4">
        <div className="bg-base-200 rounded-xl overflow-hidden h-[calc(100vh-7rem)] flex">
          <aside className="w-80 md:w-[350px] shrink-0 border-r border-base-300 flex flex-col">
            <div className="p-4 border-b border-base-300 space-y-4">
              <div className="flex items-center gap-3">
                <div className="skeleton w-7 h-7 rounded-full" />
                <div className="skeleton h-5 w-24" />
              </div>

              <div className="flex items-center gap-3">
                <div className="skeleton w-6 h-6 rounded-full" />
                <div className="skeleton h-4 w-28" />
                <div className="skeleton h-4 w-12" />
              </div>
            </div>
            <div className="flex-1 overflow-hidden p-3 space-y-3">
              {skeletonContacts.map((_, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-2"
                >
                  <div className="skeleton w-14 h-14 rounded-full shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="skeleton h-4 w-32" />
                    <div className="skeleton h-3 w-16" />
                  </div>
                </div>
              ))}
            </div>
          </aside>
          <section className="flex-1 hidden sm:flex flex-col items-center justify-center gap-5">
            <div className="skeleton w-20 h-20 rounded-2xl" />
            <div className="skeleton h-7 w-64" />
            <div className="skeleton h-5 w-80 max-w-[80%]" />

          </section>
        </div>
      </main>
    </div>
  );
}

export default HomeSkeleton;
