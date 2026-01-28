export default function AppLoader() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      {/* Navbar shimmer */}
      <div className="h-16 px-6 flex items-center border-b border-dullwhite">
        <div className="h-12 w-12 rounded-full shimmer" />
        <div className="ml-auto flex gap-4">
          <div className="h-8 w-20 rounded-sm shimmer" />
          <div className="h-8 w-28 rounded-sm shimmer" />
        </div>
      </div>

      <div className="flex-1 px-6 py-10 space-y-6">
        <div className="h-20 w-1/3 rounded shimmer" />
        <div className="h-4 w-2/3 rounded shimmer" />
        <div className="h-4 w-1/2 rounded shimmer" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-80 rounded-xl shimmer"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
