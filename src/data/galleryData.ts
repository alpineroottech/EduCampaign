export type GalleryCategory = 'all' | 'study-tours' | 'events' | 'campus-visits' | 'student-life';

export interface GalleryItem {
  id: number;
  title: string;
  category: GalleryCategory;
  image: string;
  date: string;
  location?: string;
  description?: string;
}

// Sample  -  using Unsplash placeholders
// TODO: Replace with real images from public/images/gallery/ before production
export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'University Campus Tour - UK',
    category: 'study-tours',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=900&fit=crop',
    date: 'March 2025',
    location: 'Oxford University',
    description: 'Students exploring the historic Oxford University campus'
  },
  {
    id: 2,
    title: 'IELTS Success Celebration',
    category: 'events',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&h=900&fit=crop',
    date: 'February 2025',
    location: 'Kathmandu Office',
    description: 'Celebrating students achieving 7+ band scores'
  },
  {
    id: 3,
    title: 'Student Visa Approval',
    category: 'student-life',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200&h=900&fit=crop',
    date: 'January 2025',
    location: 'Nepal',
    description: 'Happy students receiving their study visas'
  },
  {
    id: 4,
    title: 'Australia Campus Visit',
    category: 'campus-visits',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200&h=900&fit=crop',
    date: 'April 2025',
    location: 'University of Melbourne',
    description: 'Exploring state-of-the-art facilities in Melbourne'
  },
  {
    id: 5,
    title: 'Pre-Departure Orientation',
    category: 'events',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=900&fit=crop',
    date: 'March 2025',
    location: 'Kathmandu',
    description: 'Preparing students for their study abroad journey'
  },
  {
    id: 6,
    title: 'Canada University Fair',
    category: 'events',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&h=900&fit=crop',
    date: 'February 2025',
    location: 'Kathmandu',
    description: 'Meeting representatives from top Canadian universities'
  },
  {
    id: 7,
    title: 'Student Accommodation Tour',
    category: 'study-tours',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&h=900&fit=crop',
    date: 'April 2025',
    location: 'London, UK',
    description: 'Viewing student accommodation options in London'
  },
  {
    id: 8,
    title: 'Scholarship Award Ceremony',
    category: 'events',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=900&fit=crop',
    date: 'January 2025',
    location: 'Kathmandu',
    description: 'Students receiving scholarship awards'
  },
  {
    id: 9,
    title: 'Campus Life - USA',
    category: 'student-life',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=900&fit=crop',
    date: 'May 2025',
    location: 'Boston University',
    description: 'International students enjoying campus activities'
  },
  {
    id: 10,
    title: 'New Zealand Campus Visit',
    category: 'campus-visits',
    image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&h=900&fit=crop',
    date: 'March 2025',
    location: 'Auckland University',
    description: 'Tour of Auckland University facilities'
  },
  {
    id: 11,
    title: 'TOEFL Preparation Workshop',
    category: 'events',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&h=900&fit=crop',
    date: 'February 2025',
    location: 'Kathmandu',
    description: 'Interactive TOEFL preparation session'
  },
  {
    id: 12,
    title: 'Group Departure to UK',
    category: 'study-tours',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=900&fit=crop',
    date: 'April 2025',
    location: 'TIA, Kathmandu',
    description: 'Students departing for their UK universities'
  }
];

export const categories = [
  { id: 'all', label: 'All', value: 'all' },
  { id: 'study-tours', label: 'Study Tours', value: 'study-tours' },
  { id: 'events', label: 'Events', value: 'events' },
  { id: 'campus-visits', label: 'Campus Visits', value: 'campus-visits' },
  { id: 'student-life', label: 'Student Life', value: 'student-life' }
] as const;
