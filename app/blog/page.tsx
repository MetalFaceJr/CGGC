import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog-data";
import BlogCard from "@/ui/BlogCard";

export const metadata: Metadata = {
  title: "Blog | Calhoun GA Grappling Club",
  description:
    "Tips, techniques, and insights about Brazilian Jiu-Jitsu, grappling, and martial arts training.",
};

export default function BlogPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-dark-surface py-12 sm:py-16 border-b border-primary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-light-text mb-4">
            Our <span className="text-primary">Blog</span>
          </h1>
          <p className="text-light-text/80 max-w-2xl">
            Tips, techniques, and insights from our instructors about Brazilian
            Jiu-Jitsu, grappling, and martial arts training.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 sm:py-20 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Empty State */}
          {blogPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-light-text/80 text-lg">
                More posts coming soon. Check back regularly!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 sm:py-20 bg-dark-surface">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-light-text mb-4">
            Stay <span className="text-primary">Updated</span>
          </h2>
          <p className="text-light-text/80 mb-8">
            Follow us on social media or call us for updates on new blog posts,
            tips, and gym news.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+17066297367"
              className="flex-1 px-6 py-3 bg-primary text-light-text font-bold rounded-lg hover:bg-primary/90 transition"
            >
              Call Us
            </a>
            <a
              href="mailto:Randy.Roden@CalhounGaGrapplingClub.com"
              className="flex-1 px-6 py-3 border border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition"
            >
              Email Updates
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
