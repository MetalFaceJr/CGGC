import Link from "next/link";
import { BlogPost } from "@/lib/blog-data";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="bg-dark-surface border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 transition hover:shadow-lg hover:shadow-primary/10 cursor-pointer h-full">
        {/* Placeholder Image Header */}
        <div className="bg-gradient-to-br from-primary to-primary/50 h-40 flex items-center justify-center">
          <div className="text-4xl">📖</div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
              {post.category}
            </span>
            <span className="text-xs text-light-text/60">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>

          <h3 className="text-lg font-bold text-light-text mb-2 line-clamp-2">
            {post.title}
          </h3>

          <p className="text-light-text/80 text-sm mb-4 line-clamp-2">
            {post.excerpt}
          </p>

          <div className="pt-4 border-t border-primary/10 flex justify-between items-center">
            <span className="text-xs text-light-text/60">By {post.author}</span>
            <span className="text-primary font-semibold text-sm">Read more →</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
