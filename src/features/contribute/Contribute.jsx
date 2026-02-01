'use client'
import { use, useEffect, useState } from "react";
import MarkdownEditor from "@/components/editor/MarkdownEditor";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { CLOUDINARY_API, CLOUDINARY_UPLOAD_PRESET } from "../../../cloudinary";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cropper from "react-easy-crop";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    
const Contribute = () => {
    const router = useRouter();
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(false);

    const [coverFile, setCoverFile] = useState(null);   // File object
    const [coverUrl, setCoverUrl] = useState("");      // Cloudinary URL
    const [uploading, setUploading] = useState(false);
    const [changingImage, setChangingImage] = useState(false);

    const [imageSrc, setImageSrc] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [showCrop, setShowCrop] = useState(false);
    
    const TITLE_LIMIT = 80;

    const uploadToCloudinary = async (file) => {
        try {
         
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

            const res = await axios.post(CLOUDINARY_API, formData);

            const imageUrl = res.data.secure_url;
            return imageUrl;
        } catch (err) {
            toast.error("⚠️Upload failed!");
            throw err;
        }
    };

    const handleCreateBlog = async () => {
        if (!coverUrl) {
            alert("Image still uploading");
            return;
        }
        try {
            setLoading(true);
            const response = await axios.post(`${BASE_URL}/create/blog`,
                {
                    title: title,
                    content:content,
                    cover_image: coverUrl,
                },
                {withCredentials: true}
            )
            console.log(response);
            toast.success("Blog submitted for review successfully!");
            router.push("/blogs");
        } catch (err) {
            console.error("Error creating blog:", err);
            if(axios.isAxiosError(err)) {
                console.error("Axios error response:", err.response);
            }
        } finally {
            setLoading(false);
        }
    }

    const getCroppedImg = async (imageSrc, pixelCrop) => {
        const image = new Image();
        image.src = imageSrc;
        await new Promise((res) => (image.onload = res));

        const canvas = document.createElement("canvas");
        canvas.width = pixelCrop.width;
        canvas.height = pixelCrop.height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(
            image,
            pixelCrop.x,
            pixelCrop.y,
            pixelCrop.width,
            pixelCrop.height,
            0,
            0,
            pixelCrop.width,
            pixelCrop.height
        );

        return new Promise((resolve) => {
            canvas.toBlob((blob) => {
            resolve(new File([blob], "cover.jpg", { type: "image/jpeg" }));
            }, "image/jpeg");
        });
    };

    useEffect(() => {
        if (!coverFile) return;

        const upload = async () => {
            setUploading(true);
            const url = await uploadToCloudinary(coverFile);
            setCoverUrl(url);
            setUploading(false);
        };

        upload();
    }, [coverFile]);

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

                <div className="mt-14 border-2 border-dashed border-neutral-300/40 rounded-2xl px-10 py-12 flex flex-col items-center justify-center gap-4 transition bg-[#ffffff]">
                    
                    <input
                        type="file"
                        id="coverUpload"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            if (!file) {
                                setChangingImage(false);
                                return;
                            }
                        const reader = new FileReader();
                        reader.onload = () => {
                            setImageSrc(reader.result);
                            setShowCrop(true);
                            setChangingImage(false);
                        };
                        reader.readAsDataURL(file);
                        }}
                    />

                    {coverUrl ? (
                        <div className="w-full rounded-xl overflow-hidden border-2 border-neutral-500 shadow bg-black">
                            <img
                            src={coverUrl}
                            alt="Cover preview"
                            className="w-full max-h-[500px] object-contain"
                            />

                            <label
                            htmlFor="coverUpload"
                            className="block text-center py-2 bg-orange-600 text-white cursor-pointer hover:bg-orange-700 transition"
                            >
                               {changingImage ? "Changing..." : "Change Image"}
                            </label>
                        </div>
                        ) : (
                        <label
                            htmlFor="coverUpload"
                            className="cursor-pointer px-5 py-2 rounded-xl border-2 border-orange-500 text-orange-600 font-semibold hover:bg-orange-50 transition"
                        >
                            {uploading ? "Uploading..." : "Upload Cover Image"}
                        </label>
                        )}

                    <p className="text-sm text-center max-w-sm text-neutral-500">
                        Upload a relevant image (Shiva, scripture, temple, etc.)
                    </p>

                    {showCrop && (
                        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
                            <div className="p-6 rounded-xl w-[90%] max-w-xl space-y-4">
                                <div className="relative w-full h-[400px]">
                                    <Cropper
                                    image={imageSrc}
                                    crop={crop}
                                    zoom={zoom}
                                    aspect={16 / 9}
                                    onCropChange={setCrop}
                                    onZoomChange={setZoom}
                                    onCropComplete={(_, croppedPixels) => setCroppedAreaPixels(croppedPixels)}
                                    />
                                </div>

                                <input
                                    type="range"
                                    min={1}
                                    max={3}
                                    step={0.1}
                                    value={zoom}
                                    onChange={(e) => setZoom(e.target.value)}
                                />

                                <div className="flex justify-end gap-3">
                                    <button
                                    onClick={() => setShowCrop(false)}
                                    className="px-4 py-2 rounded-md border"
                                    >
                                    Cancel
                                    </button>

                                    <button
                                    onClick={async () => {
                                        const croppedFile = await getCroppedImg(imageSrc, croppedAreaPixels);
                                        setCoverFile(croppedFile);
                                        setShowCrop(false);
                                    }}
                                    className="px-4 py-2 bg-orange-600 text-white rounded-md"
                                    >
                                    Crop & Upload
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
                
                <div className="my-8 md:mb-14">
                    <div className="mb-4">
                        <input
                        type="text"
                        placeholder="Your Article Title..."
                        value={title}
                            onChange={(e) => {
                            if (e.target.value.length <= TITLE_LIMIT) {
                                setTitle(e.target.value)
                            }
                        }}
                        className="w-full px-4 py-3 rounded-md border-b-2 outline-none border-neutral-100 bg-[#ffffff] "
                        />
                         <p
                            className={`text-sm text-right px-3 py-2 ${
                            title.length > 70 ? "text-red-500" : "text-gray-400"
                            }`}
                        >
                            {title.length} / {TITLE_LIMIT} words
                        </p>
                    </div>
                    <MarkdownEditor value={content} onChange={setContent} />
                </div>

                <div className="flex justify-end">

                    <Button
                        className="md:px-6 md:py-6 btn-primary md:text-lg text-sm"
                        onClick={handleCreateBlog}
                        disabled={uploading || !coverUrl}
                    >
                        {loading ? "Submitting..." : "Submit for Review"}
                    </Button>
                </div>
            </div>
        </section>
    )
}
export default Contribute
