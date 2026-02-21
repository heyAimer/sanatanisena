'use client';
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export default function Contact() {
    const [form, setForm] = useState({
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);
        try {
            const res = await axios.post(`${BASE_URL}/contactus`, {
                email: form.email,
                message:form.message
            });
            toast.success(res.data.message);
            setForm({ email: "", message: "" });
        } catch (err) {
            if (axios.isAxiosError(err)) {
                const message = err.response?.data?.message || "Error sending a message.";
                setStatus(message);
            } else {
                setStatus("Something went wrong. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="pb-12 pt-4 sm:py-10">
            
            <div className="absolute inset-0 pointer-events-none">

                {/* Top Left */}
                <div className="absolute top-24 left-10 w-80 h-80 rounded-full bg-[#ffb366] animate-float-slow" />

                <div className="absolute top-48 left-64 w-36 h-36 rounded-full bg-[#f28c28] animate-float-fast" />

                {/* Bottom Right */}
                <div className="absolute bottom-50 right-12 w-[420px] h-[120px] rounded-full bg-[#f28c28] animate-float-slow" />

                <div className="absolute bottom-52 right-72 w-40 h-40 rounded-full bg-[#ffb366] animate-float-fast" />

            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative space-y-10 flex justify-center flex-col items-center">

                <div className="space-y-4 max-w-2xl">
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-center">
                        Get In <span className="text-[#f28c28]">Touch</span>
                    </h3>
                    <p className=" text-center ">
                        Have a question, a suggestion, or something you’d like to share?
                        We’re here to listen. Fill out the form and we’ll get back to you shortly.
                    </p>
                </div>
                
                <div className="w-full flex justify-center items-center " >
                    <div className="sm:max-w-xl w-full rounded-2xl border border-gray-100 shadow-lg p-10 bg-white ">
                        <h2 className="text-3xl font-semibold mb-6 text-center">
                            Send us a message
                        </h2>
                        {/* <p className="text-stone-700 mb-8">
                            Reach out for collaboration, ideas, or meaningful conversations.
                        </p> */}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Email */}
                            <div>
                                <label className="block mb-1 text-sm font-medium text-stone-800">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full rounded-sm border border-orange-300 px-4 py-2
                                focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="youremail@example.com"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block mb-1 text-sm font-medium text-stone-800">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    required
                                    value={form.message}
                                    onChange={handleChange}
                                    className="w-full rounded-sm border border-orange-300 px-4 py-2
                                focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="Write your message here..."
                                />
                            </div>

                            <div className="space-y-3">
                                {status && (
                                    <p className="text-sm text-red-600 mt-2 font-semibold ">
                                        {status}
                                    </p>
                                )}
                                {/* Button */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="btn-lg btn-primary w-full transition disabled:opacity-60"
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}