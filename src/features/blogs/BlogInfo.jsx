'use client';
import MarkdownEditor from "@/components/editor/MarkdownEditor";
import useUTCtoIST from "@/utils/hooks/useUTCtoIST";
import MDEditor from "@uiw/react-md-editor";
import axios from "axios";
import { CheckCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import toast from "react-hot-toast";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const BlogInfo = ({ slug }) => {
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [verify, setIsVerify] = useState(false);

  const TITLE_LIMIT = 80;
  const DESC_LIMIT = 2000;

  console.log("Fetching blog with SLUG:", slug); 

  const handleVerifyBlog = async () => {
    try {
      setIsVerify(true);
      const response = await axios.post(
        `${BASE_URL}/blog/verify`,
        {
          blogid: slug,
        },
        { withCredentials: true }
      );
    } catch (err) {
      if(axios.isAxiosError(err)) {
        console.error("Axios error:", err.response);
      }
      console.error("Something went wrong", err.response?.data || err.message);
      toast.error(err.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setIsVerify(false);
    }
  }
  const getBlogInfo = async () => {
    console.log("Getting blog info for slug:", slug);
    try {
      const response = await axios.get(
        `${BASE_URL}/blog?blogid=${slug}`,
        {withCredentials: true}
      );

      console.log("Blog fetch response:", response);

      const blog = response.data.data;
      setBlog(blog);
      setTitle(blog.title || "");
      setContent(blog.content || "");

    } catch (err) {
      if(axios.isAxiosError(err)) {
        console.error("Axios error:", err.response);
      }
      console.error("Blog fetch failed:", err.response?.data || err.message);
      setError(err.response?.data?.message || "An error occurred while fetching the blog. Please try again.");
    } finally {
      setLoading(false);
    }

  }
  useEffect(() => {
    if(!slug) return;
    getBlogInfo();
  }, [slug]);

  if (loading) {
    return <div className="text-center font-semibold sm:text-2xl text-xl py-12">Loading blog...</div>
  }
  if (error) {
    return <div className="text-center font-semibold sm:text-2xl text-xl py-12 text-red-600">{error}</div>
  }

  return (
    <section className="w-full py-10">
      <div className="max-w-7xl mx-auto px-6">

        {blog.cover_image && (
          <div className="rounded-2xl overflow-hidden shadow-lg bg-black">
            <img
              src={blog.cover_image}
              alt={title}
              className="w-full max-h-[500px] object-contain"
            />
          </div>
        )}

        <div className="text-center space-y-4 flex justify-center items-center bg-neutral-100 rounded-md px-6 py-2 mt-10 mb-4">
          <input
            value={title}
            onChange={(e) => {
              if (e.target.value.length <= TITLE_LIMIT) {
                setTitle(e.target.value);
              }
            }}
            className="w-full text-xl md:text-3xl font-semibold text-gray-900 sm:text-center outline-none transition h-14 my-auto"
            placeholder="Enter blog title..."
          />
          <p className={`text-sm mt-1 ${
            title.length > TITLE_LIMIT - 10 ? "text-red-500" : "text-gray-400"
          }`}>
            {title.length}/{TITLE_LIMIT}
          </p>
        </div>

        <div className="bg-neutral-100 rounded-md px-6 py-6 space-y-2">
          <MarkdownEditor value={content} onChange={setContent} />
        </div>


        <div className="flex flex-col text-sm text-gray-500 mt-10 mb-4 justify-end items-end text-lg px-2">
          <span>By {blog.author}</span>
          {blog.published_at
            && <span className="ml-2">{useUTCtoIST(blog.published_at)} </span>
          }
        </div>

        <div className="pt-12 border-t border-neutral-300 text-center space-y-4 flex sm:flex-row flex-col justify-between items-center">
          <div>
            <p className="text-gray-600 italic">
              May this knowledge guide your path.
            </p>
            <p className="text-orange-600 font-semibold">
              Jai Shree Ram 🚩
            </p>
          </div>

          <div onClick={handleVerifyBlog}>
              <button className="flex sm:border-3 border border-orange-600 rounded-full px-6 py-2 text-orange-600 hover:bg-orange-50 transition text-sm font-semibold sm:text-xl mx-3 cursor-pointer active:scale-95">
              {verify ? 
                <div className="flex gap-3 items-center justify-center">
                  <Loader2 className="animate-spin" size={18} />
                  Verifying...
                </div>
                : 
                <div className="flex gap-2 items-center justify-center ">
                  <CheckCircle size={25}  />
                  Verify
                </div>}
              </button>
          </div>
        </div>

      </div>
    </section>
  )
}
export default BlogInfo;