const mockPendingBlogs = [
  {
    id: 1,
    title: "The Meaning of Dharma in Kali Yuga",
    author: "Arjun Sharma",
    submittedAt: "2026-01-20",
  },
  {
    id: 2,
    title: "Why Shiva is called Adiyogi",
    author: "Neha Verma",
    submittedAt: "2026-01-21",
  },
  {
    id: 3,
    title: "Sanatan Dharma is not a Religion",
    author: "Rahul Mishra",
    submittedAt: "2026-01-22",
  },
];

export default function Pending() {
  return (
    <main className="min-h-screen bg-[#fffdf8] px-10 py-12">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">
              Pending Articles
            </h1>
            <p className="text-gray-500 mt-1">
              Articles submitted by contributors, awaiting editorial approval.
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr className="text-sm text-gray-600">
                <th className="px-6 py-4 font-medium">Title</th>
                <th className="px-6 py-4 font-medium">Author</th>
                <th className="px-6 py-4 font-medium">Submitted</th>
                <th className="px-6 py-4 font-medium text-right">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {mockPendingBlogs.map((blog) => (
                <tr
                  key={blog.id}
                  className="border-b last:border-b-0 hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-5 font-medium text-gray-900">
                    {blog.title}
                  </td>
                  <td className="px-6 py-5 text-gray-700">
                    {blog.author}
                  </td>
                  <td className="px-6 py-5 text-gray-500">
                    {blog.submittedAt}
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex justify-end gap-3">

                      <button className="px-4 py-2 text-sm rounded-lg border border-gray-300 hover:bg-gray-100 transition">
                        Preview
                      </button>

                      <button className="px-4 py-2 text-sm rounded-lg bg-green-600 text-white hover:bg-green-700 transition">
                        Approve
                      </button>

                      <button className="px-4 py-2 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 transition">
                        Reject
                      </button>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty state (when no pending blogs) */}
        {mockPendingBlogs.length === 0 && (
          <div className="text-center py-24 text-gray-500">
            <p className="text-lg">
              No articles are waiting for review.
            </p>
            <p className="mt-2 italic">
              “धर्मः रक्षति रक्षितः”
            </p>
          </div>
        )}

      </div>
    </main>
  );
}
