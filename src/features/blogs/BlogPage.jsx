'use client';
import { Button } from "@/components/ui/button";
import { useAuth } from "@/utils/AuthContext";
import useUTCtoIST from "@/utils/hooks/useUTCtoIST";
import axios from "axios";
import { Loader, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const BlogPage = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { isUser } = useAuth();

    const pathname = usePathname();

    useEffect(() => {
    window.scrollTo(0, 0);
    }, [pathname]);
    
    const handleFetchUnverifiedBlogs = async () => {
        try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/public/blogs?page=0`,
            {withCredentials: true}
        );
        console.log("All blogs:", response.data.data);
        setData(response.data.data);
        } catch (err) {
        if(axios.isAxiosError(err)) {
            setError(err.response?.data?.message || "An error occurred while fetching verified blogs.Try again.");
        }
        toast.error("Failed to fetch verified blogs.");
        } finally {
        setLoading(false);
        }
    }

    useEffect(() => {
        handleFetchUnverifiedBlogs();
    }, []);

    if(error) {
        return (
        <div className="flex flex-col items-center justify-center px-8 mx-auto min-h-screen space-y-6">
            <p className="text-red-600 font-semibold sm:text-xl text-lg">⚠️{error}</p>
            <h2 className="sm:text-2xl text-md font-semibold ">
                Please pause for a moment
            </h2>
            <p className="text-neutral-600 max-w-md text-center">
                Our servers are receiving many seekers right now.  
                Please wait a short while before continuing.
            </p>
            <button
                onClick={() => window.location.reload()}
                className="px-6 py-2 btn-primary text-xl cursor"
            >
                Refresh
            </button>
        </div>
        );
    }
    
    return (
        <section className="pb-12 pt-4 sm:py-14">
            <div className="max-w-7xl mx-auto sm:px-6 relative">
                <div className="text-center max-w-4xl mx-auto space-y-4 pb-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900">
                        Sanatan Knowledge Vault
                    </h1>
                    <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
                        A curated collection of verified articles on Sanatan Dharma, yoga, scriptures, and timeless wisdom — written to guide, awaken, and inspire every seeker.
                    </p>
                </div>

                {loading ?
                    (
                        <div className="flex flex-col items-center justify-center px-8 mx-auto space-y-6 py-40">
                            <Loader2 className="animate-spin" size={50}/>
                        </div>
                    )
                    :
                    (
                        <div className = "flex flex-col items-center px-4 py-6">
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {data.map((blog) => (
                                    <Link href={`/blogs/${blog.id}`} key={blog.id}>
                                        <article
                                            className="rounded-xl border card-sacred"
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
                                    </Link>
                                ))}
                            </div>

                            {isUser && <Link href="/blogs/contribute">
                                <Button className="btn-primary sm:text-xl sm:py-6 sm:px-5 text-md mt-10">
                                    Write a Blog
                                </Button>
                            </Link>}
                                
                        </div>
                    )
                }
                
                {!data && <div className="flex flex-col items-center justify-center px-6 text-center">

                    <Image
                        src="/omDark.png"
                        alt="image"
                        width={200}
                        height={100}
                        priority
                        className = "w-auto h-auto"
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
                </div>}
            </div>
        </section>
    );
}
export default BlogPage;