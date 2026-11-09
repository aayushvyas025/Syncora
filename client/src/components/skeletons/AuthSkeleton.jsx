
function AuthSkeleton({skeletonContacts=[]}) {
  return (
    <div className="min-h-screen bg-base-100">
      <header className="h-16 border-b border-base-300 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="skeleton w-10 h-10 rounded-xl" />
          <div className="skeleton h-5 w-20" />
        </div>

        <div className="skeleton h-10 w-28 rounded-full" />
      </header>

      <main className="grid lg:grid-cols-2 min-h-[calc(100vh-4rem)]">
        <section className="flex items-center justify-center p-6">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="skeleton w-14 h-14 rounded-2xl" />
              </div>

              <div className="space-y-3 flex flex-col items-center">
                <div className="skeleton h-7 w-48" />
                <div className="skeleton h-5 w-44" />
              </div>
            </div>
            <div className="space-y-7">
              <div className="skeleton h-14 w-full rounded-2xl" />
              <div className="skeleton h-14 w-full rounded-2xl" />
              <div className="skeleton h-14 w-full rounded-2xl" />
              <div className="flex justify-center items-center gap-2">
                <div className="skeleton h-4 w-36" />
                <div className="skeleton h-4 w-28" />
              </div>

            </div>
          </div>
        </section>
        <section className="hidden lg:flex bg-base-200 items-center justify-center p-12">
          <div className="max-w-md w-full space-y-10">

            <div className="grid grid-cols-3 gap-3">
              {skeletonContacts.map((_, index) => (
                <div
                  key={index}
                  className="skeleton aspect-square rounded-2xl"
                />
              ))}
            </div>
            <div className="space-y-4 flex flex-col items-center">
              <div className="skeleton h-7 w-64" />

              <div className="space-y-2 w-full flex flex-col items-center">
                <div className="skeleton h-4 w-11/12" />
                <div className="skeleton h-4 w-3/4" />
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}

export default AuthSkeleton;
