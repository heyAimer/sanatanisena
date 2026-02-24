"use client";

import axios from "axios";
import toast from "react-hot-toast";

const { useState, useCallback, useEffect } = require("react");

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const usefetchblogs = (endpoint , enabled = true) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [nextBlog, setNextBlog] = useState("");

    const fetchBlogs = useCallback(async () => {
        if (!enabled) return;
        try {
            setLoading(true);
            setError(null);
            const response = await axios.get(`${BASE_URL}${endpoint}`,
                { withCredentials: true }
            );
            setNextBlog(response?.data?.nextBlog)
            setData(response.data?.data);
        } catch (err) {
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.message || "An error occurred while fetching verified blogs.Try again.");
            }
            toast.error("Failed to fetch verified blogs.");
        } finally {
            setLoading(false);
        }
    }, [endpoint, enabled]);
    useEffect(() => {
        if (enabled) fetchBlogs();
    }, [fetchBlogs,enabled]);

    return {
        data,nextBlog,loading,error, refetch:fetchBlogs
    }
}  
export default usefetchblogs;