import BlogServer from "./BlogServer";

export default async function BlogInfo({ slug, preview }) {
  const { blog, notFound } = await BlogServer({ slug, preview });

  if (notFound) {
    return (
      <div className="min-h-screen bg-[#fffdf8] flex items-center justify-center text-gray-500">
        <p>This article does not exist or is not yet published.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#fffdf8] py-24 px-6">
      <article className="max-w-3xl mx-auto space-y-12">

        {/* Preview Banner */}
        {preview && (
          <div className="bg-yellow-100 border border-yellow-300 text-yellow-900 px-4 py-3 rounded-lg text-sm text-center">
            You are viewing this article in <strong>Preview Mode</strong>. It is not visible to the public yet.
          </div>
        )}

        {/* Status Badge */}
        {blog.status !== "published" && (
          <div className="flex justify-center">
            <span className="px-4 py-1 rounded-full text-sm bg-gray-200 text-gray-700">
              {blog.status.toUpperCase()}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 text-center leading-tight">
          {blog.title}
        </h1>

        {/* Meta */}
        <div className="text-center text-gray-500 text-sm">
          <p>
            By <span className="font-medium text-gray-700">{blog.author}</span>
            {blog.publishedAt && ` • ${blog.publishedAt}`}
          </p>
        </div>

        {/* Cover Image */}
        {blog.coverImage && (
          <div className="rounded-2xl overflow-hidden">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg max-w-none prose-gray">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>

        {/* Footer */}
        <div className="pt-16 border-t border-gray-200 text-center space-y-4">
          <p className="text-gray-600">
            May this knowledge guide your path.
          </p>
          <p className="text-orange-600 font-medium">
            Jai Shree Ram 🚩
          </p>
        </div>

      </article>
    </main>
  );
}
