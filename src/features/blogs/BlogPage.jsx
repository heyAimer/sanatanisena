'use client';
import { Button } from "@/components/ui/button";
import { useAuth } from "@/utils/AuthContext";
import usefetchblogs from "@/utils/hooks/usefetchblogs";
import useUTCtoIST from "@/utils/hooks/useUTCtoIST";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState} from "react";

const BlogPage = () => {
    const [page, setPage] = useState(0);
    const [allBlogs, setAllBlogs] = useState([]);
    
    const {data, loading, error,nextBlog, refetch} = usefetchblogs(`/public/blogs?page=${page}`);
    const { isUser } = useAuth();
    const pathname = usePathname();
    
    const handleLoadMore = () => {
        if (loading) return;
        setPage((prev) => prev + 1);
    };
    
   useEffect(() => {
        if (data) {
            setAllBlogs((prev) => {
            const newBlogs = data.filter(
                (newBlog) => !prev.some((oldBlog) => oldBlog.id === newBlog.id)
            );

            return [...prev, ...newBlogs];
            });
        }
    }, [data]);

    useEffect(() => {
    window.scrollTo(0, 0);
    }, [pathname]);

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
                onClick={refetch}
                className="px-6 py-2 btn-primary text-xl cursor"
            >
                Refresh
            </button>
        </div>
        );
    }
    
    return (
        <section className="pb-8 pt-8 sm:py-14">
            <div className="absolute inset-0 pointer-events-none -z-10">

                {/* Top Left */}
                <div className="absolute top-40 left-20 w-60 h-60 rounded-full bg-[#ffb366] animate-float-slow" />

                <div className="absolute top-2 left-64 w-36 h-36 rounded-full bg-[#f28c28] animate-float-fast md:flex hidden" />

                {/* Bottom Right */}
                <div className="absolute bottom-4 right-12 w-[400px] h-[120px] rounded-full bg-[#f28c28] animate-float-slow" />

                <div className="absolute bottom-6 right-72 w-40 h-20 rounded-full bg-[#ffb366] animate-float-fast" />

            </div>
            <div className="max-w-7xl mx-auto sm:px-6 relative">
                <div className="flex flex-col md:flex-row justify-between items-center px-4 md:gap-6">
                    <div className=" text-center md:text-start max-w-4xl space-y-4 md:pb-10 pb-6">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900">
                            Sanatan Knowledge Vault
                        </h1>
                        <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
                            A curated collection of verified articles on Sanatan Dharma, yoga, scriptures, and timeless wisdom — written to guide, awaken, and inspire every seeker.
                        </p>
                    </div>
                
                    <div className="md:mb-0 sm:mb-8 mb-6">
                        {isUser && <Link href="/blogs/contribute">
                            <Button className="btn-primary sm:text-xl sm:py-6 sm:px-5 text-md cursor-pointer">
                                Write a Blog
                            </Button>
                        </Link>}
                    </div>
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
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {allBlogs.map((blog) => (
                                    <Link href={`/blogs/${blog.id}`} key={blog.id}>
                                        <article
                                            className="rounded-xl border card-sacred"
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
                                                           {blog.content}
                                                    </div>
                                                    
                                                    <div className="px-4 flex items-center gap-2 py-2 mt-2">
                                                        <img
                                                            src="./omDark.png"
                                                            className="h-10 w-10 object-cover rounded-full border-2 "
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

                            {(
                                <button className="btn-secondary py-2 px-5 sm:text-md text-sm mt-10  transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer" onClick={handleLoadMore} disabled={loading || !nextBlog}>
                                    {loading
                                        ? "Loading..."
                                        : nextBlog
                                            ? "View More"
                                            : "No More Blogs"
                                    }
                                </button>
                            )}    
                        </div>
                    )
                }
                
                {!data && <div className="flex flex-col items-center justify-center px-6 text-center">

                    <Image
                        src="/omDark.png"
                        alt="image"
                        width={200}
                        height={100}
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