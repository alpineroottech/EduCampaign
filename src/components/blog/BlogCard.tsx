'use client';

import Image from 'next/image';
import Link from 'next/link';
import { type BlogPost } from '@/data/blogData';

interface BlogCardProps {
    post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    const categoryLabel = post.category
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return (
        <Link href={`/blog/${post.slug}`} className="group block h-full">
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-purple-100">
                {/* Image */}
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                    <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                        <span className="bg-[#6B4FA1] text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                            {categoryLabel}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#6B4FA1] transition-colors line-clamp-2">
                        {post.title}
                    </h3>

                    <p className=" mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                                src={post.author.avatar}
                                alt={post.author.name}
                                fill
                                className="object-cover"
                                sizes="40px"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-gray-900 truncate">{post.author.name}</p>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <time dateTime={post.publishedDate}>
                                    {new Date(post.publishedDate).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </time>
                                <span>•</span>
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
}
