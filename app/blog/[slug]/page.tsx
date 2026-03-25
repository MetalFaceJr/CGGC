import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPostBySlug, getAllBlogSlugs, blogPosts } from "@/lib/blog-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Calhoun GA Grappling Club",
    };
  }

  return {
    title: `${post.title} | Calhoun GA Grappling Club`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Post Not Found
          </h1>
          <p className="text-light-text/80 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            href="/blog"
            className="inline-block px-6 py-3 bg-primary text-dark-bg font-bold rounded-lg hover:bg-primary/90 transition"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Find previous and next posts for navigation
  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost =
    postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-dark-surface border-b border-primary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-light-text/60">
            <Link href="/blog" className="hover:text-primary">
              Blog
            </Link>
            <span>/</span>
            <span className="text-light-text">{post.title}</span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <section className="bg-dark-surface py-12 sm:py-16 border-b border-primary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
              {post.category}
            </span>
            <span className="text-xs text-light-text/60">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-light-text mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-light-text/80 mb-4">By {post.author}</p>
          <p className="text-light-text/70">{post.excerpt}</p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 sm:py-16 bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-invert max-w-none">
            {/* Render content with line breaks */}
            <div className="text-light-text/80 leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
          </article>

          {/* Author Info */}
          <div className="mt-12 pt-8 border-t border-primary/20">
            <h3 className="text-lg font-bold text-light-text mb-2">
              About the Author
            </h3>
            <p className="text-light-text/80">
              <strong>{post.author}</strong> is an instructor at Calhoun GA
              Grappling Club with extensive experience in Brazilian Jiu-Jitsu
              and grappling training.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      {(prevPost || nextPost) && (
        <section className="py-12 sm:py-16 bg-dark-surface border-t border-primary/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg font-bold text-light-text mb-8">
              More <span className="text-primary">Articles</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {prevPost && (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group block p-6 border border-primary/20 rounded-lg hover:border-primary/50 transition"
                >
                  <p className="text-sm text-primary/70 mb-2">← Previous Post</p>
                  <h4 className="text-lg font-bold text-light-text group-hover:text-primary transition">
                    {prevPost.title}
                  </h4>
                </Link>
              )}
              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group block p-6 border border-primary/20 rounded-lg hover:border-primary/50 transition"
                >
                  <p className="text-sm text-primary/70 mb-2 text-right">
                    Next Post →
                  </p>
                  <h4 className="text-lg font-bold text-light-text group-hover:text-primary transition">
                    {nextPost.title}
                  </h4>
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog */}
      <section className="py-12 sm:py-16 bg-dark-bg text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-block px-8 py-3 bg-primary text-dark-bg font-bold rounded-lg hover:bg-primary/90 transition"
          >
            Back to All Posts
          </Link>
        </div>
      </section>
    </>
  );
}
