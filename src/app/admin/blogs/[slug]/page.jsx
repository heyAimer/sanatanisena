import BlogInfo from "@/features/blogs/BlogInfo";

export default async function BlogSlugPage({ params }) {
  const resolvedParams = await params;

  const { slug } = resolvedParams;

  console.log("SLUG", slug);
  console.log("PARAMS:, ", params);
  
  return (
    <BlogInfo
      slug={slug}
    />
  );
}
