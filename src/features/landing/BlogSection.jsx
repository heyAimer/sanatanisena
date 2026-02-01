import Image from "next/image";

const blogs = [
  {
    id: 1,
    title: "What is Sanatan Dharma?",
    excerpt:
      "Understanding the eternal principles of Sanatan Dharma and its relevance in modern life.",
    category: "Dharma",
    image: "/hanumanji.png",
    slug: "what-is-sanatan-dharma",
  },
  {
    id: 2,
    title: "Lessons from Ramayan",
    excerpt:
      "Key teachings from Shri Ramcharitmanas that guide a righteous life.",
    category: "Itihas",
      slug: "lessons-from-ramayan",
    image: "/logo.png",
  },
  {
    id: 3,
    title: "Bhakti: The Path of Devotion",
    excerpt:
      "How devotion leads the soul towards inner peace and self-realization.",
    category: "Bhakti",
      slug: "bhakti-path-of-devotion",
    image: "/diyasoft.png",
  },
];

const BlogSection = () => {
    return (
        <section className="w-full py-10 my-10 px-6 md:px-16 bg-background">
            <div className="max-w-7xl mx-auto">
            {/* Main Heading */}
                <h2 className="text-center text-3xl md:text-4xl font-semibold mb-10">
                    Sanatan Gyaan – Articles by the Community
                </h2>

                <div className="mx-auto items-center flex flex-col justify-center ">
                    <p className="text-muted-foreground leading-relaxed text-center">
                        This space is dedicated to seekers who wish to share authentic Sanatan knowledge, reflections, and learnings with the community.
                    </p>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 my-10">
                        {blogs.map((blog) => (
                        <article
                            key={blog.id}
                            className="overflow-hidden rounded-xl border card-sacred"
                        >
                            {blog.image && <div className="relative h-50 w-full">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-contain w-auto h-auto"
                            />
                            </div>}
            
                            <div className="p-5">
                            <span className="mb-2 inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700 border">
                                {blog.category}
                            </span>
            
                            <h3 className="mt-3 text-lg font-semibold">
                                {blog.title}
                            </h3>
            
                            <p className="mt-2 text-sm text-muted-foreground">
                                {blog.excerpt}
                            </p>
                            </div>
                        </article>
                        ))}
                    </div>
                    <button className="btn-primary py-3 px-6 text-lg">
                        Read Community Writings
                    </button>
                </div>
            </div>
        </section>

    )
}
export default BlogSection;

// “No articles have been published yet. Be the first to share your understanding of Dharma.”