const BlogSection = () => {
    return (
        <section className="w-full py-10 my-10 px-6 md:px-16 bg-background">
            {/* Main Heading */}
            <h2 className="text-center text-3xl md:text-4xl font-semibold mb-10">
                Sanatan Gyaan – Articles by the Community
            </h2>

            <div className="mx-auto items-center flex flex-col justify-center ">
                <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                    This space is dedicated to seekers who wish to share authentic Sanatan knowledge, reflections, and learnings with the community.
                </p>

                <button className="btn-primary btn-md">
                    Read Community Writings
                </button>
            </div>
        </section>

    )
}
export default BlogSection;

// “No articles have been published yet. Be the first to share your understanding of Dharma.”