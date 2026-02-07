'use client';
import MarkdownRenderer from "@/components/editor/MarkdownRenderer";
import useUTCtoIST from "@/utils/hooks/useUTCtoIST";
import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const BlogInfo = ({ slug }) => {
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const getBlogInfo = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/public/bloginfo?blogid=${slug}`,
        {withCredentials: true}
      );
      
      const blog = response.data.data;

      setBlog(blog);
      setTitle(blog.title || "");
      setContent(blog.content || "");

    } catch (err) {
      if(axios.isAxiosError(err)) {
        const message = err.response?.data?.message || "Something went wrong. Try again";
        setError(message);
      }
      
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
    <section className="w-full py-10 bg-neutral-100">
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

        <div className={`bg-[#ffffff] text-center space-y-4 flex justify-center items-center rounded-md px-6 py-4 mt-10 mb-4 gap-6`}>
              <div className="w-full text-xl md:text-3xl font-semibold text-gray-900 sm:text-center outline-none transition my-auto text-justify" >{blog.title}</div>
        </div>

        <div className={` bg-[#ffffff] rounded-md px-6 py-6 space-y-2`}>
            <MarkdownRenderer
             content={content}
            />
        </div>

        <div className="flex flex-col text-sm text-gray-500 mt-10 mb-4 justify-end items-end text-lg px-2">
          <span>By {blog.author}</span>
          {blog.published_at
            && <span className="ml-2">{useUTCtoIST(blog.published_at)} </span>
          }
        </div>

        <div className={`pt-12 border-t border-neutral-300 text-center space-y-4 flex sm:flex-row flex-col justify-center justify-between items-center`}>
          <div>
            <p className="text-gray-600 italic">
              May this knowledge guide your path.
            </p>
            <p className="text-orange-600 font-semibold">
              Jai Shree Ram 🚩
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
export default BlogInfo;