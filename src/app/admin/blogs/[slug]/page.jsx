
import BlogInfoAdmin from "@/features/blogs/BlogInfoAdmin";

export default async function BlogSlugPage({ params }) {
  const resolvedParams = await params;

  const { slug } = resolvedParams;
  
  return (
    <BlogInfoAdmin
      slug={slug}
    />
  );
}
