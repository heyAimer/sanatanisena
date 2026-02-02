'use client';

import useUTCtoIST from "@/utils/hooks/useUTCtoIST";
import axios from "axios";
import { Loader2 } from "lucide-react";
import Link from "next/link";
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
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFetchUnverifiedBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}/blogs?page=0&scope=unverified`,
        {withCredentials: true}
      );
      console.log("Unverified blogs:", response.data.data);
      setData(response.data.data);
    } catch (err) {
      if(axios.isAxiosError(err)) {
        console.error("Axios error:", err.response);
        setError(err.response?.data?.message || "An error occurred while fetching unverified blogs.Try again.");
      }
      toast.error("Failed to fetch unverified blogs.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    handleFetchUnverifiedBlogs();
  }, []);

  if(error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-8 mx-auto">
        <p className="text-red-600 font-semibold text-lg">{error}</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#fffdf8] px-10 py-12">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">
              Unverified Articles
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
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr className="text-sm text-gray-600">
                  <th className="sm:px-6 sm:py-4 font-medium px-4 py-2">Title</th>
                  <th className="px-6 py-4 font-medium hidden sm:table-cell">Author</th>
                  <th className="px-6 py-4 font-medium hidden md:table-cell">Submitted</th>
                  <th className="sm:px-6 sm:py-4 font-medium px-4 py-2">Actions</th>
                </tr>
              </thead>

              <tbody>
                {data.map((blog) => (
                  <tr
                    key={blog.id}
                    className="border-b last:border-b-0 hover:bg-gray-50 transition"
                  >
                    <td className="sm:px-6 sm:py-5 font-medium text-gray-900 max-w-[120px]  md:max-w-[400px] truncate sm:text-lg text-xs px-4 py-4">
                      {blog.title}
                    </td>
                    <td className="px-6 py-5 text-gray-700 hidden sm:table-cell">
                      {blog.author}
                    </td>
                    <td className="px-6 py-5 text-gray-500 hidden md:table-cell">
                      {useUTCtoIST(blog.published_at)}
                    </td>
                    <td className="sm:px-2">
                      <Link href={`/admin/blogs/${blog.id}`}>
                        <button className="sm:border-2 border border-orange-600 rounded-sm px-3 py-1 text-orange-600 hover:bg-orange-50 transition text-xs sm:text-lg mx-3 cursor-pointer">
                          Preview
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
