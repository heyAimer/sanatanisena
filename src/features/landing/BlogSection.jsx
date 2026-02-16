import useUTCtoIST from "@/utils/hooks/useUTCtoIST";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Deva, Bhagwān, Iśvara – What’s the Difference?",
    excerpt:
      "In everyday conversations, we often use the terms Dev, Bhagwan, and Ishwar interchangeably to refer to the Divine.  But in the world of Sanātana Dharma, these words have very distinct meanings, rooted in deep philosophy and centuries of spiritual understanding.",
    category: "classification",
    cover_image: "/whatisdeva.png",
    published_at:"2026-02-01T16:17:39.961021Z",
    author:"Hey_aimer"
  },
  {
    id: 2,
    title: "Sanātana Dharma Basic Guide",
    excerpt:
      "The Vedas, dharma is something which holds and supports the universe together and guides societal and individual conduct. The Upaniṣads, dharma is the inner realization of unity, living according to dharma aligns one’s actions with the Self (Ātman) and the ultimate reality (Brahman) to maintain cosmic harmony through right knowledge.",
    category: "Dharma",
      published_at:"2026-02-01T16:17:39.961021Z",
    cover_image: "/basicdharma.png",
    author:"Andro_ez"
  },
  {
    id: 3,
    title: "Is Hinduism a religion or a way of life?",
    excerpt:
      "The belief in and reverence for a supernatural power or powers, regarded as creating and governing the universe. A particular variety of belief in the supernatural , especially when organized into a system of doctrine and practice.",
    category: "Bhakti",
      published_at:"2026-02-01T16:17:39.961021Z",
    cover_image: "/wayoflife.png",
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
                            className="rounded-xl border card-sacred" key={blog.id}
                        >
                            <div className="hover:shadow-lg transition rounded-lg h-90 bg-[#ffffff]">

                                
                                {blog.cover_image &&
                                    <div className="relative h-50 w-full">
                                        <Image
                                            src={blog.cover_image}
                                        alt="image"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover w-auto  rounded-t-lg"
                                    />
                                    </div>
                                }
                                <div className="py-4">
                                    <div className="px-5 space-y-2">
                                        <h3 className="text-lg font-semibold line-clamp-1">
                                            {blog.title}
                                        </h3>
                                    </div>
                                    <div className="px-5 space-y-2 text-sm line-clamp-2 leading-5 h-10">
                                            {blog.excerpt}
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