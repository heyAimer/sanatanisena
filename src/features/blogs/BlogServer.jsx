const MOCK_BLOGS = [
  {
    id: 1,
    title: "Why Shiva is called Adiyogi",
    slug: "why-shiva-is-called-adiyogi",
    author: "Sanatani Sena",
    status: "published",
    publishedAt: "Jan 20, 2026",
    coverImage: "/images/shiva.jpg",
    content: `
      <p>Shiva is known as Adiyogi — the first yogi. He transmitted the science of yoga to the Saptarishis.</p>
      <p>Yoga is not physical exercise. It is the science of inner awakening.</p>
      <p><em>योगः चित्तवृत्ति निरोधः</em></p>
    `,
  },
  {
    id: 2,
    title: "The Meaning of Dharma in Kali Yuga",
    slug: "meaning-of-dharma-in-kali-yuga",
    author: "Arjun Sharma",
    status: "pending",
    publishedAt: null,
    coverImage: null,
    content: `
      <p>Dharma in Kali Yuga is about choosing righteousness when confusion is everywhere.</p>
      <p>True Dharma is eternal.</p>
    `,
  },
];

export default async function BlogServer({ slug, preview }) {
  const blog = MOCK_BLOGS.find((b) => b.slug === slug);

  if (!blog) {
    return { notFound: true };
  }

  // Public users can only see published
  if (!preview && blog.status !== "published") {
    return { notFound: true };
  }

  return { blog };
}
