export type BlogCategory = 
  | 'all'
  | 'study-abroad-tips'
  | 'visa-guides'
  | 'test-preparation'
  | 'country-guides'
  | 'success-stories'
  | 'scholarships';

export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  category: BlogCategory;
  featuredImage: string;
  author: Author;
  publishedDate: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

// Sample blog data - API-ready structure
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'ielts-band-8-essential-tips',
    title: '10 Essential Tips to Score IELTS Band 8+',
    excerpt: 'Master the IELTS exam with proven strategies from our expert instructors. Learn the secrets to achieving a band score of 8 or higher.',
    category: 'test-preparation',
    featuredImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=600&fit=crop',
    author: {
      name: 'Priya Sharma',
      role: 'IELTS Instructor',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    },
    publishedDate: '2025-10-10',
    readTime: '8 min read',
    tags: ['IELTS', 'Test Prep', 'Study Tips'],
    featured: true
  },
  {
    id: 2,
    slug: 'uk-student-visa-guide-2025',
    title: 'Complete UK Student Visa Application Guide 2025',
    excerpt: 'Everything you need to know about applying for a UK student visa, from required documents to interview preparation.',
    category: 'visa-guides',
    featuredImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&h=600&fit=crop',
    author: {
      name: 'Rajesh Kumar',
      role: 'Visa Consultant',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    },
    publishedDate: '2025-10-08',
    readTime: '12 min read',
    tags: ['UK', 'Visa', 'Student Visa']
  },
  {
    id: 3,
    slug: 'top-universities-canada',
    title: 'Top 10 Universities in Canada for International Students',
    excerpt: 'Discover the best Canadian universities offering world-class education and excellent post-graduation opportunities.',
    category: 'country-guides',
    featuredImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=600&fit=crop',
    author: {
      name: 'Sarah Chen',
      role: 'Education Counselor',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    },
    publishedDate: '2025-10-05',
    readTime: '10 min read',
    tags: ['Canada', 'Universities', 'Rankings']
  },
  {
    id: 4,
    slug: 'writing-statement-of-purpose',
    title: 'How to Write a Winning Statement of Purpose',
    excerpt: 'Learn the art of crafting a compelling SOP that showcases your unique story and impresses admission committees.',
    category: 'study-abroad-tips',
    featuredImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&h=600&fit=crop',
    author: {
      name: 'Dr. Anil Thapa',
      role: 'Application Advisor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    publishedDate: '2025-10-03',
    readTime: '7 min read',
    tags: ['SOP', 'Application', 'Writing']
  },
  {
    id: 5,
    slug: 'scholarships-nepali-students-australia',
    title: 'Scholarship Opportunities for Nepali Students in Australia',
    excerpt: 'Comprehensive guide to fully-funded and partial scholarships available for Nepali students in Australia.',
    category: 'scholarships',
    featuredImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=600&fit=crop',
    author: {
      name: 'Anjali Rai',
      role: 'Scholarship Advisor',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop'
    },
    publishedDate: '2025-09-30',
    readTime: '9 min read',
    tags: ['Scholarships', 'Australia', 'Funding']
  },
  {
    id: 6,
    slug: 'kathmandu-to-oxford-journey',
    title: 'From Kathmandu to Oxford: A Student&apos;s Journey',
    excerpt: 'An inspiring story of determination and success. Read how Bikram went from Nepal to Oxford University.',
    category: 'success-stories',
    featuredImage: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=600&fit=crop',
    author: {
      name: 'Bikram Shrestha',
      role: 'Oxford Graduate',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
    },
    publishedDate: '2025-09-28',
    readTime: '6 min read',
    tags: ['Success Story', 'Oxford', 'Inspiration']
  },
  {
    id: 7,
    slug: 'cost-comparison-usa-uk',
    title: 'Cost of Studying in USA vs UK: Complete Breakdown',
    excerpt: 'Detailed comparison of tuition fees, living expenses, and hidden costs when studying in the USA versus the UK.',
    category: 'country-guides',
    featuredImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=600&fit=crop',
    author: {
      name: 'Michael Roberts',
      role: 'Financial Advisor',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop'
    },
    publishedDate: '2025-09-25',
    readTime: '11 min read',
    tags: ['USA', 'UK', 'Budget']
  },
  {
    id: 8,
    slug: 'toefl-preparation-strategies',
    title: 'TOEFL Preparation Strategies for 100+ Score',
    excerpt: 'Proven methods and practice techniques to help you achieve a TOEFL score of 100 or above.',
    category: 'test-preparation',
    featuredImage: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1200&h=600&fit=crop',
    author: {
      name: 'Jessica Lin',
      role: 'TOEFL Expert',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop'
    },
    publishedDate: '2025-09-22',
    readTime: '10 min read',
    tags: ['TOEFL', 'Test Prep']
  },
  {
    id: 9,
    slug: 'part-time-jobs-canada',
    title: 'Part-Time Job Opportunities for Students in Canada',
    excerpt: 'Learn about work permits, popular student jobs, and how to balance work with studies in Canada.',
    category: 'study-abroad-tips',
    featuredImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=600&fit=crop',
    author: {
      name: 'David Thompson',
      role: 'Career Counselor',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop'
    },
    publishedDate: '2025-09-20',
    readTime: '8 min read',
    tags: ['Canada', 'Jobs', 'Work']
  }
];

export const categories = [
  { id: 'all', label: 'All Posts', value: 'all' },
  { id: 'study-abroad-tips', label: 'Study Tips', value: 'study-abroad-tips' },
  { id: 'visa-guides', label: 'Visa Guides', value: 'visa-guides' },
  { id: 'test-preparation', label: 'Test Prep', value: 'test-preparation' },
  { id: 'country-guides', label: 'Country Guides', value: 'country-guides' },
  { id: 'success-stories', label: 'Success Stories', value: 'success-stories' },
  { id: 'scholarships', label: 'Scholarships', value: 'scholarships' }
] as const;
