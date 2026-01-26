import BlogInfo from "@/features/blogs/BlogInfo";

export default async function BlogSlugPage({ params, searchParams }) {
  const { slug } = params;
  const isPreview = searchParams?.preview === "true";

  return (
    <BlogInfo
      slug={slug}
      preview={isPreview}
    />
  );
}
