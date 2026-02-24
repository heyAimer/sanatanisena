'use client';

import useUTCtoIST from "@/utils/hooks/useUTCtoIST";
import axios from "axios";
import { BadgeCheck, Eye, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

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

//https://snantani-sena-backend.onrender.com/blogs?page=0&scope=unverified
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function Pending() {
  const [allBlogs, setAllBlogs] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [nextBlog, setNextBlog] = useState("");
  const router = useRouter()
  const handleFetcBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}/blogs?page=0&scope=all`,
        {withCredentials: true}
      );
      console.log("handlejlsdjf: ", response);
      setData(response.data.data);
    } catch (err) {
      if(axios.isAxiosError(err)) {
        const message = err.response?.data?.message || "Something went wrong. Try again";
        setError(message);
        router.push("/")
      }
    } finally {
      setLoading(false);
    }
  }

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
    handleFetcBlogs();
  }, []);

  if(error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-8 mx-auto">
        <p className="text-red-600 font-semibold text-lg">{error}</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen px-10 pb-12 pt-8">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">
              All Articles
            </h1>
            <p className="text-gray-500 mt-1">
              Articles submitted by contributors, awaiting editorial approval.
            </p>
          </div>
        </div>

        {/* Table */}
        {loading ?
          <div className="flex items-center justify-center px-8 mx-auto space-y-6 py-40">
            <Loader2 className="animate-spin" size={50}/>
          </div>
          :
          data.length > 0 &&
          <div className="bg-white border border-gray-200 rounded-md sm:rounded-2xl overflow-hidden shadow-sm">
              <div className="hidden lg:block">
                <table className="w-full table-fixed text-left">
                  <colgroup>
                    <col className="w-[40%]" />
                    <col className="w-[20%]" />
                    <col className="w-[20%]" />
                    <col className="w-[20%]" />
                  </colgroup>
                  
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr className="text-sm text-gray-600">
                      <th className="font-medium px-4 py-2">Title</th>
                      <th className="px-6 py-4 font-medium ">Author</th>
                      <th className="px-6 py-4 font-medium ">Submitted</th>
                      <th className="font-medium px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                </table>
              
                <div className="max-h-[calc(100vh-320px)] overflow-y-auto">
                  <table className="w-full text-left">
                    <colgroup>
                      <col className="w-[40%]" />
                      <col className="w-[20%]" />
                      <col className="w-[20%]" />
                      <col className="w-[20%]" />
                    </colgroup>
                    <tbody>
                      {allBlogs.map((blog) => (
                        <tr
                          key={blog.id}
                          className="border-b last:border-b-0 hover:bg-gray-50 transition"
                        >
                          <td className="font-medium text-gray-900 max-w-[400px] truncate text-lg px-4 py-4">
                            {blog.title}
                          </td>
                          <td className="px-6 py-5 text-gray-700">
                            {blog.author}
                          </td>
                          <td className="px-6 py-5 text-gray-500">
                            {useUTCtoIST(blog.published_at)}
                          </td>
                          <td className="sm:px-2">
                            <Link href={`/admin/blogs/${blog.id}`}>
                              <button className={`sm:border-2 border rounded-sm px-3 py-1 ${blog.verified? 'text-green-600 border-green-600 hover:bg-green-50  ' : "text-orange-600 border-orange-600 hover:bg-orange-50  "}  transition text-xs sm:text-lg mx-3 cursor-pointer flex items-center gap-2`}>
                              {blog.verified ? <BadgeCheck className="text-green-600" size={22} /> : <Eye className="text-orange-600" size={22} />}
                                Preview
                              </button>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
             
              {/* =============Mobile//tab============ */}
              <div className="lg:hidden">
                <table className="w-full text-left table-fixed">
                  <colgroup>
                    <col className="w-[50%] sm:w-[90%]" />
                    <col className="w-[50%] sm: w-[10%]" />
                  </colgroup>

                  <thead className="bg-gray-50 border-b">
                    <tr className="text-sm text-gray-600">
                      <th className="px-4 py-3">Title</th>
                      <th className="sm:pl-22 pl-10 py-3">Action</th>
                    </tr>
                  </thead>
                </table>

                <div className="max-h-[550px] overflow-y-auto">
                  <table className="w-full table-fixed">
                    <colgroup>
                      <col className="w-[50%] sm:w-[90%]" />
                      <col className="w-[50%] sm: w-[10%]" />
                    </colgroup>

                    <tbody>
                      {data.map((blog) => (
                        <tr key={blog.id} className="border-b hover:bg-gray-50 ">
                          <td className="font-medium text-gray-900 max-w-[120px] truncate text-sm sm:text-md px-4 py-8">
                            {blog.title}
                          </td>
                          <td className="sm:pl-20 pl-8">
                            <Link href={`/admin/blogs/${blog.id}`}>
                              <button className={`sm:border-2 border rounded-sm px-3 py-1 ${blog.verified? 'text-green-600 border-green-600 hover:bg-green-50  ' : "text-orange-600 border-orange-600 hover:bg-orange-50  "}  transition text-xs sm:text-lg mx-3 cursor-pointer flex items-center gap-2`}>
                              {blog.verified ? <BadgeCheck className="text-green-600" size={22} /> : <Eye className="text-orange-600" size={22} />}
                                Preview
                              </button>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {(
                <div className="flex justify-center items-center border-t border-gray-200 py-4">
                  <button className="border-2 border-orange-600 text-orange-600 font-semibold rounded-xl py-2 px-5 sm:text-md text-sm transition-all duration-200 disabled:opacity-50 disabled:text-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed cursor-pointer my-4" onClick={handleLoadMore} disabled={loading || !nextBlog}>
                    {loading
                        ? "Loading..."
                        : nextBlog
                            ? "View More"
                            : "No More Blogs"
                    }
                  </button>
                </div>
              )}
          </div>
          }

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
    </section>
  );
}
