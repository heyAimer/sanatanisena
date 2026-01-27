'use client'
import { useState } from "react";
import MarkdownEditor from "@/components/editor/MarkdownEditor";
import { Button } from "@/components/ui/button";

const Contribute = () => {
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    return (
        <section className="pb-12 pt-4 sm:py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
                <div className="space-y-4">
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-center">
                        Contribute to an article
                    </h3>
                    <p className=" text-center">
                        Share your knowledge of Sanatan Dharma to guide seekers across the world. Your words may inspire, heal, and awaken many.
                    </p>
                </div>

                <div className="mt-14 border-2 border-dashed border-neutral-300/40 rounded-2xl px-10 py-12 flex flex-col items-center justify-center gap-4 transition">

                    <input
                        type="file"
                        id="coverUpload"
                        className="hidden"
                        accept="image/*"
                    />

                    <label
                        htmlFor="coverUpload"
                        className="cursor-pointer px-5 py-1 rounded-xl border-2 border-neutral-500 transition font-semibold text-neutral-500"
                    >
                        Upload Image
                    </label>

                    <p className="text-sm text-center max-w-sm">
                        Upload a relevant image (Shiva, scripture, temple, etc.)
                    </p>

                </div>
                
                <div className="my-8 md:mb-14">
                    <div className="mb-4">
                        <input
                        type="text"
                        placeholder="Your Article Title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-3 rounded-md border-b-2 outline-none border-neutral-100 "
                        />
                    </div>
                    <MarkdownEditor value={content} onChange={setContent} />
                </div>

                <div className="flex flex-row gap-4 justify-end">

                    <Button className="md:px-6 md:py-6 btn-primary md:text-lg text-sm">
                        Submit for Review
                    </Button>
                </div>
            </div>
        </section>
    )
}
export default Contribute
