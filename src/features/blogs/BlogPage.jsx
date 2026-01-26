import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "What is Sanatan Dharma?",
    excerpt:
      "Understanding the eternal principles of Sanatan Dharma and its relevance in modern life.",
    category: "Dharma",
    image: "/bholenath.png",
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
  {
    id: 4,
    title: "What is Sanatan Dharma?",
    excerpt:
      "Understanding the eternal principles of Sanatan Dharma and its relevance in modern life.",
    category: "Dharma",
    image: "/youtube.png",
    slug: "what-is-sanatan-dharma",
  },
];

const BlogPage = () => {
    return (
        <section className="pb-12 pt-4 sm:py-20">
            <div className="max-w-7xl mx-auto sm:px-6 relative">
                <div className="flex flex-col items-center px-4 py-4">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {blogs.map((blog) => (
                            <article
                                key={blog.id}
                                className="overflow-hidden rounded-xl border card-sacred"
                            >
                                {blog.image &&
                                    <div className="relative h-50 w-full">
                                        <Image
                                            src={blog.image}
                                            alt={blog.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                }
                                
                                <div className="py-4">
                                    <div className="px-5 space-y-2">
                                        <h3 className="text-lg font-semibold">
                                            {blog.title}
                                        </h3>
                                        
                                        <span className="inline-block rounded-full bg-orange-50 px-4 py-1 text-xs font-medium text-orange-700 border">
                                            {blog.category}
                                        </span>

                                        <p className="mt-2 text-sm text-muted-foreground">
                                            {blog.excerpt}
                                        </p>
                                    </div>
                                    
                                    <div className="px-4 flex items-center gap-2 py-2 mt-5">
                                        <img
                                            src="./bholenath.png"
                                            className="h-10 w-10 object-cover rounded-full"
                                        />
                                        <div className="leading-none text-[14px] space-y-1">
                                            <p>Aimer Aie</p>
                                            <p>15 june 2025</p>
                                        </div>
                                    </div>
                                </div>
                            </article>  
                        ))}
                    </div>

                    <Link href="/blogs/contribute">
                        <Button className="btn-primary sm:text-xl sm:py-6 sm:px-5 text-md mt-10">
                            Write a Blog
                        </Button>
                    </Link>
                </div>
                {/* <div className="flex flex-col items-center justify-center px-6 text-center">

                    <Image
                        src="/omDark.png"
                        alt="image"
                        width={200}
                        height={100}
                        priority
                    />

                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                        Sacred Knowledge is Being Prepared
                        </h1>

                        <p className="text-lg leading-relaxed mt-6 sm:mt-14 sm:mb-10 mb-6">
                        Our team is working to bring authentic Sanatan Dharma articles,
                        scriptures, and spiritual wisdom to this space.
                        Soon, this page will be filled with knowledge that guides the seeker.
                        </p>

                        <blockquote className="italic ">
                        “When the student is ready, the teacher appears.”
                        </blockquote>
                    </div>

                    <Button className="btn-primary sm:text-2xl sm:py-6 sm:px-6 text-lg mt-10">
                        Write a Blog
                    </Button>
                </div> */}
            </div>
        </section>
    );
}
export default BlogPage;