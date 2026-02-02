import BlogInfo from "@/features/blogs/BlogInfo";

export default async function BlogSlugPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  return (
    <BlogInfo
      slug={slug}
    />
  );
}
