'use client';
import MarkdownEditor from "@/components/editor/MarkdownEditor";
import MarkdownRenderer from "@/components/editor/MarkdownRenderer";
import { Button } from "@/components/ui/button";
import useUTCtoIST from "@/utils/hooks/useUTCtoIST";
import axios from "axios";
import { CheckCircle, Loader2, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const BlogHistory = ({ slug }) => {
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [update, setUpdated] = useState(false);
  const [verified, setVerified] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [originalContent, setOriginalContent] = useState(""); 

  const isContentChanged = content !== originalContent;
  const router = useRouter();

  const TITLE_LIMIT = 80;

  const getBlogInfo = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/blog?blogid=${slug}`,
        {withCredentials: true}
      );

      const blog = response.data.data;
      setBlog(blog);
      setIsAdmin(response.data.isAdmin);
      setTitle(blog.title || "");
      setContent(blog.content || "");
      setVerified(blog.verified);
      setOriginalContent(blog.content);

    } catch (err) {
      if(axios.isAxiosError(err)) {
        const message = err.response?.data?.message || "Something went wrong. Try again";
        setError(message);
      }
    } finally {
      setLoading(false);
    }
  }

  const handleVerifyBlog = async () => {
    try {
      setUpdated(true);
      const jsonBody = {
          id: blog.id,
          author:blog.author,
          title: title,
          content: content,
          coverImage: blog.cover_image,
          verified: verified
      }
      const response = await axios.patch(
        `${BASE_URL}/blog`,
        jsonBody,
        { withCredentials: true }
      );
      toast.success(response.data.message);
      setOriginalContent(content);
      router.push("/history");
      getBlogInfo();
    } catch (err) {
      if(axios.isAxiosError(err)) {
        console.error("Axios error:", err.response);
      }
      console.error("Something went wrong", err.response?.data || err.message);
      toast.error(err.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setUpdated(false);
    }
  }

  useEffect(() => {
    if(!slug) return;
    getBlogInfo();
  }, [slug]);

  if (loading) {
    return <div className="flex flex-col items-center justify-center px-8 mx-auto py-78">
        <Loader2 className="animate-spin" size={50}/>
    </div>
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

          {isAdmin || !verified && 
            <div className={`text-center space-y-4 flex justify-center items-center bg-[#ffffff] rounded-md px-6 py-4 mt-10 mb-4 gap-6`}>
              (
              <>
                  <input
                  value={title}
                  onChange={(e) => {
                      if (e.target.value.length <= TITLE_LIMIT) {
                      setTitle(e.target.value);
                      }
                  }}
                  className="w-full text-xl md:text-3xl font-semibold text-gray-900 sm:text-center outline-none transition my-auto h-12"
                  placeholder="Enter blog title..."
                  />
                  <p className={`text-sm mt-1 ${
                      title.length > TITLE_LIMIT - 10 ? "text-red-500" : "text-gray-400"
                  }`}>
                      {title.length}/{TITLE_LIMIT}
                  </p>
              </>
              )
            </div>
          }
          
          {verified && 
            <div className={`text-center space-y-4 flex justify-center items-center bg-[#ffffff] rounded-md px-6 py-4 mt-10 mb-4 gap-6 font-bold sm:text-2xl text-xl`}>
              {title}
            </div>
          }
          <div className={`rounded-md px-6 py-6 space-y-2 bg-[#ffffff] `}>
          {!verified ?
              (<MarkdownEditor value={content} onChange={setContent} />)
              :
              (<MarkdownRenderer content={content} />)
          }
          </div>

          <div className={`flex text-sm text-gray-500 mt-10 mb-4 justify-end items-end text-lg px-2`}>
              <div className="flex flex-col items-end">
                  <span>By {blog.author}</span>
                  {blog.published_at
                      && <span className="ml-2">{useUTCtoIST(blog.published_at)} </span>
                  }
              </div>
          </div>
              

          <div className={`pt-12 border-t border-neutral-300 text-center space-y-4 flex sm:flex-row flex-col ${!verified ? "justify-between" : "justify-center"} justify-between items-center`}>
          <div>
              <p className="text-gray-600 italic">
              May this knowledge guide your path.
              </p>
              <p className="text-orange-600 font-semibold">
              Jai Shree Ram 🚩
              </p>
          </div>

          <button
            onClick={handleVerifyBlog}
            disabled={!isContentChanged}
            className={`flex ${!isContentChanged ? "opacity-0 cursor-not-allowed pointer-events-none" : "cursor-pointer"}
            px-4 py-2 btn-primary transition text-sm font-semibold sm:text-xl  active:scale-95`}
            >
            {!verified &&
              (
              <div className="flex gap-2 items-center justify-center">
                  {update? "Updating..." :"Update"}
              </div>
              )
            }
          </button>
          
          </div>
        </div>
      </section>
    )
}

export default BlogHistory;