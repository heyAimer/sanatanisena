
import BlogHistory from "@/features/blogs/BlogHistory";

export default async function BlogSlugPage({ params }) {
  const resolvedParams = await params;

  const { slug } = resolvedParams;
  
  return (
    <BlogHistory
      slug={slug}
    />
  );
}
