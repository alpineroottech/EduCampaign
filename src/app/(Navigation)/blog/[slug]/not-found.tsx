import Link from 'next/link';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F5F3FF] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center">
            <FileQuestion className="w-12 h-12 text-[#6B4FA1]" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Blog Post Not Found
        </h1>

        <p className="text-gray-600 mb-8">
          Sorry, we couldn&apos;t find the blog post you&apos;re looking for. It may have been moved or deleted.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog"
            className="bg-[#6B4FA1] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5a3f8a] transition-colors"
          >
            Back to Blog
          </Link>

          <Link
            href="/"
            className="bg-white text-[#6B4FA1] px-6 py-3 rounded-full font-semibold border-2 border-[#6B4FA1] hover:bg-purple-50 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
