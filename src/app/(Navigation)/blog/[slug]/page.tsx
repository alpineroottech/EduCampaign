import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blogData';
import { Clock, Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
    // Await params as required by Next.js 15
    const { slug } = await params;
    
    // Find the blog post by slug
    const post = blogPosts.find(p => p.slug === slug);

    // If post not found, show 404
    if (!post) {
        notFound();
    }

    // Get related posts (same category, exclude current post, limit to 3)
    const relatedPosts = blogPosts
        .filter(p => p.category === post.category && p.slug !== post.slug)
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-[#F5F3FF]">
            {/* Hero Section */}
            <div className="bg-gradient-to-br h-[350px] from-[#6B4FA1] via-[#7B5FB1] to-[#8B5FD1] text-white py-16 overflow-hidden relative flex items-center justify-center">
                {/* Decorative circles */}
                <div className="absolute top-10 right-10 w-32 h-32 bg-[#FF9F66] rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#FFB966] rounded-full opacity-20 blur-2xl"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Back Button */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Blog</span>
                    </Link>

                    {/* Category Badge */}
                    <div className="mb-4">
                        <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold">
                            {post.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                        {post.title}
                    </h1>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-6 text-purple-100">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <time dateTime={post.publishedDate} className="text-sm">
                                {new Date(post.publishedDate).toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric'
                                })}
                            </time>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span className="text-sm">{post.author.name}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Featured Image */}
                <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-xl">
                    <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 896px"
                    />
                </div>

                {/* Author Info Card */}
                <div className="bg-white rounded-2xl p-6 mb-12 shadow-sm border border-purple-100 flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900">{post.author.name}</h3>
                        <p className="text-sm text-gray-600">{post.author.role}</p>
                    </div>
                    <Button className="ml-auto bg-purple-100 rounded-full hover:bg-purple-200 transition-colors">
                        <Share2 className="w-5 h-5 text-[#6B4FA1]" />
                    </Button>
                </div>

                {/* Blog Content */}
                <article className="prose prose-lg max-w-none">
                    {/* Introduction */}
                    <div className="bg-purple-50 border-l-4 border-[#6B4FA1] p-6 rounded-r-xl mb-8">
                        <p className="text-gray-700 leading-relaxed mb-0">
                            {post.excerpt}
                        </p>
                    </div>

                    {/* Main Content - This would come from your CMS/API */}
                    <div className="text-gray-700 space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Introduction</h2>
                        <p>
                            This is where the full blog content would go. In a real application, this would be fetched from the CMS
                            or API. For now, I am showing the structure and styling.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Points</h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#6B4FA1] text-white flex items-center justify-center text-sm font-bold mt-0.5">1</span>
                                <span>Understand the requirements and prepare your documents well in advance.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#6B4FA1] text-white flex items-center justify-center text-sm font-bold mt-0.5">2</span>
                                <span>Research universities and programs that align with your career goals.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#6B4FA1] text-white flex items-center justify-center text-sm font-bold mt-0.5">3</span>
                                <span>Prepare for standardized tests like IELTS, TOEFL, GRE, or SAT as required.</span>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h2>
                        <p>
                            Following these guidelines will significantly improve your chances of success in your study abroad journey.
                            Remember, preparation is key, and our expert counselors are always here to guide you through every step.
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <h3 className="text-sm font-semibold text-gray-500 mb-3">TAGS</h3>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-2 bg-purple-50 text-[#6B4FA1] rounded-full text-sm font-medium hover:bg-purple-100 transition-colors cursor-pointer"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </article>

                {/* CTA Card */}
                <div className="bg-gradient-to-r from-[#6B4FA1] to-[#8B5FD1] text-white rounded-2xl p-8 md:p-12 my-16 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Need Personalized Guidance?
                    </h2>
                    <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                        Our expert counselors are ready to help you navigate your study abroad journey. Book a free consultation today!
                    </p>
                    <Button className="bg-white text-[#6B4FA1] px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-colors shadow-xl">
                        Book Free Consultation
                    </Button>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedPosts.map((relatedPost) => (
                                <Link
                                    key={relatedPost.id}
                                    href={`/blog/${relatedPost.slug}`}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-purple-100"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={relatedPost.featuredImage}
                                            alt={relatedPost.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <span className="inline-block text-xs font-semibold text-[#6B4FA1] bg-purple-50 px-3 py-1 rounded-full mb-3">
                                            {relatedPost.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                        </span>
                                        <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#6B4FA1] transition-colors line-clamp-2">
                                            {relatedPost.title}
                                        </h3>
                                        <p className="text-sm text-gray-500">{relatedPost.readTime}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}