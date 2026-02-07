'use client';
import { Button } from "@/components/ui/button";
import { useAuth } from "@/utils/AuthContext";
import usefetchblogs from "@/utils/hooks/usefetchblogs";
import useUTCtoIST from "@/utils/hooks/useUTCtoIST";
import axios from "axios";
import { Loader2, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function History() {
    const { isUser } = useAuth();
    const { data, loading, error, refetch } = usefetchblogs("/blogs?page=0&scope=user" , isUser);
    const [deletingId, setDeletingId] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const confirmDelete  = async (blogid) => {
        try {
            setDeletingId(blogid);
            const response = await axios.delete(
                `${BASE_URL}/blog`,
                {
                data:{id:blogid},
                withCredentials: true 
                }
            );
            toast.success(response.data.message);
            refetch();
            setShowDeleteModal(false);
             setDeleteId(null);
        } catch (err) {
            toast.error(err.response?.data?.message || "Please try again.");
        } finally {
            setDeletingId(null);
        }
    }

    if(error) {
        return (
        <div className="flex flex-col items-center justify-center px-8 mx-auto min-h-screen space-y-6">
            <p className="text-red-600 font-semibold sm:text-xl text-lg">⚠️{error}</p>
            <h2 className="sm:text-2xl text-md font-semibold ">
                Something went wrong.
            </h2>
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
        <section className="pb-12 pt-4 sm:py-14">
            <div className="max-w-7xl mx-auto sm:px-6 relative">
                {data.length > 0 && <>
                    <div className="text-center max-w-4xl mx-auto space-y-4 pb-10">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900">
                            Your Seva Through Sacred Words
                        </h1>
                        <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
                            View, manage, and revisit every blog you have written — a digital record of your service to Dharma and seekers.
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
                                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                    {data.map((blog) => (
                                        <article
                                            className="rounded-xl border card-sacred" key={blog.id}
                                            >
                                            <div className="hover:shadow-lg transition rounded-lg h-90 bg-[#ffffff]">
                                                
                                                <Link href={`/history/blog/${blog.id}`}>
                                                    <div className="z-10">
                                                        {blog.cover_image &&
                                                            <div className="relative h-50 w-full mb-4">
                                                                <Image
                                                                    src={blog.cover_image}
                                                                    alt="image"
                                                                    fill
                                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                                    className="object-cover w-auto  rounded-t-lg"
                                                                />
                                                            </div>
                                                        }
                                                        <div className="px-5 space-y-2">
                                                            <h3 className="text-lg font-semibold line-clamp-1">
                                                                {blog.title}
                                                            </h3>
                                                        </div>
                                                        <div className="px-5 space-y-2 text-sm line-clamp-2 leading-5 h-10">
                                                            {blog.content}
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className="z-20">
                                                    <div className="px-4 flex items-center justify-between gap-2 py-2 mt-2 z-20">
                                                        <div className="flex gap-2  items-center">
                                                            <img
                                                                src="./bholenath.png"
                                                                className="h-10 w-10 object-cover rounded-full"
                                                            />
                                                            <div className="leading-none text-[14px] space-y-1">
                                                                <p className="font-semibold">{ blog.author}</p>
                                                                <p>{ useUTCtoIST(blog.published_at)}</p>
                                                            </div>
                                                        </div>
                                                        <div className="pr-3">
                                                            <div className="flex cursor-pointer px-2 py-2 hover:bg-red-100 rounded-sm " onClick={() => {
                                                                setDeleteId(blog.id);
                                                                setShowDeleteModal(true);
                                                            }}>
                                                                {deletingId === blog.id ? 
                                                                <Loader2 size={20} />  
                                                                :
                                                                <>
                                                                    <Trash2 className="text-red-600" size={24} />
                                                                </>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                            </div>
                                        </article>
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
                </>}
                {data.length === 0 && <div className="flex flex-col items-center justify-center px-6 text-center -mt-10">

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
                    <Link href="/blogs/contribute">
                        <Button className="btn-primary sm:text-2xl sm:py-6 sm:px-6 text-lg mt-10" >
                            Write a Blog
                        </Button>
                    </Link>
                </div>}
            </div>

            {showDeleteModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    
                    <div
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    onClick={() => setShowDeleteModal(false)}
                    />

                    {/* Modal Box */}
                    <div className="relative z-10 bg-white rounded-lg shadow-xl w-[90%] max-w-md py-6 px-8 animate-scaleIn">
                    <h2 className="text-xl font-bold text-gray-800">
                        Delete this blog?
                    </h2>

                    <p className="text-gray-600 mt-2">
                        This action cannot be undone. Are you sure you want to permanently delete this blog?
                    </p>

                    <div className="flex justify-end gap-4 mt-6">
                        <button
                        onClick={() => setShowDeleteModal(false)}
                        className="px-4 py-2 rounded-sm border hover:bg-gray-100 cursor-pointer"
                        >
                        Cancel
                        </button>

                        <button
                        onClick={() => confirmDelete(deleteId)}
                        disabled={deletingId === deleteId}
                        className="px-4 py-2 rounded-sm bg-red-600 text-white hover:bg-red-700 flex items-center gap-2 cursor-pointer"
                        >
                        {deletingId === deleteId ? (
                            <>
                            <Loader2 className="animate-spin" size={16} />
                            Deleting...
                            </>
                        ) : (
                            "Delete"
                        )}
                        </button>
                    </div>
                    </div>
                </div>
            )}
        </section>
    );
}