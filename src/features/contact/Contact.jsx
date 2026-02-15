'use client';
import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({
        email: "",
        subject: "",
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
            const res = await fetch("snantani-sena-backend-production.up.railway.app/contactus", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (!res.ok) throw new Error("Failed");

            setStatus("Message sent successfully 🕉️");
            setForm({ email: "", subject: "", message: "" });
        } catch (err) {
            setStatus("Something went wrong. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="w-full flex justify-center px-4 py-16 bg-orange-50">
            <div className="w-full max-w-xl rounded-2xl border border-orange-200 bg-white shadow-lg p-8">
                <h2 className="text-3xl font-bold text-orange-600  mb-2 text-center">
                    Contact Us
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
                            className="w-full rounded-lg border border-orange-300 px-4 py-2
                         focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="you@example.com"
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
                            className="w-full rounded-lg border border-orange-300 px-4 py-2
                         focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Write your message here..."
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-lg bg-orange-600 py-3 font-semibold text-white
                       hover:bg-orange-700 transition disabled:opacity-60"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                    {status && (
                        <p className="text-center text-sm text-stone-700 mt-4">
                            {status}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}