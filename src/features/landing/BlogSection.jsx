import useUTCtoIST from "@/utils/hooks/useUTCtoIST";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Understanding the Eternal Way of Life, Truth, and Cosmic Harmony",
    excerpt:
      "Understanding the eternal principles of Sanatan Dharma and its relevance in modern life.",
    category: "Dharma",
    cover_image: "/hanumanji.png",
    published_at:"2026-02-01T16:17:39.961021Z",
    author:"Hey_aimer"
  },
  {
    id: 2,
    title: "Timeless Teachings on Duty, Dharma, Courage, and Ideal Conduct",
    excerpt:
      "Key teachings from Shri Ramcharitmanas that guide a righteous life.",
    category: "Itihas",
      published_at:"2026-02-01T16:17:39.961021Z",
    cover_image: "/logo.png",
    author:"Andro_ez"
  },
  {
    id: 3,
    title: "Experiencing Divine Love Through Faith, Surrender, and Devotion",
    excerpt:
      "How devotion leads the soul towards inner peace and self-realization.",
    category: "Bhakti",
      published_at:"2026-02-01T16:17:39.961021Z",
    cover_image: "/diyasoft.png",
    author:"Mad_max"
  },
];

const BlogSection = () => {
    return (
        <section className="w-full py-10 my-10 px-6 md:px-16 bg-background">
            <div className="max-w-7xl mx-auto relative">
            {/* Main Heading */}
                <h2 className="text-center text-3xl md:text-4xl font-semibold mb-10">
                    Sanatan Gyaan – Articles by the Community
                </h2>

                <div className="mx-auto items-center flex flex-col justify-center ">
                    <p className="text-muted-foreground leading-relaxed text-center">
                        This space is dedicated to seekers who wish to share authentic Sanatan knowledge, reflections, and learnings with the community.
                    </p>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 my-10 ">
                        {blogs.map((blog) => (
                            <article
                                className="rounded-xl border card-sacred transition-all duration-300 cursor-pointer "
                                key={blog.id}
                            >
                                <div className="hover:shadow-lg transition rounded-lg">
                                    {blog.cover_image &&
                                        <div className="relative h-50 w-full">
                                            <Image
                                                src={blog.cover_image}
                                                alt="image"
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="object-cover w-auto h-auto"
                                            />
                                        </div>
                                    }
                                    
                                    <div className="py-4">
                                        <div className="px-5 space-y-2">
                                            <h3 className="text-lg font-semibold">
                                                {blog.title}
                                            </h3>
                                            
                                        </div>
                                        
                                        <div className="px-4 flex items-center gap-2 py-2 mt-2">
                                            <img
                                                src="./bholenath.png"
                                                className="h-10 w-10 object-cover rounded-full"
                                            />
                                            <div className="leading-none text-[14px] space-y-1">
                                                <p className="font-semibold">{ blog.author}</p>
                                                <p>{ useUTCtoIST(blog.published_at)}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>  
                        ))}
                    </div>
                    <Link href="/blogs">
                        <button className="btn-primary py-3 px-6 text-lg">
                            Read Community Writings
                        </button>
                    </Link>
                </div>
            </div>
        </section>

    )
}
export default BlogSection;

// “No articles have been published yet. Be the first to share your understanding of Dharma.”