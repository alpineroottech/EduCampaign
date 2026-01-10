'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();

  // Comprehensive label mapping for all routes
  const LABEL_MAP: Record<string, string> = {
    // Main sections
    'studyabroad': 'Study Abroad',
    'testpreparation': 'Test Preparation',
    'about': 'About Us',
    'abroad': 'Abroad',
    'blog': 'Blog',
    'contact': 'Contact',
    'events': 'Events',
    'gallery': 'Gallery',
    'services': 'Services',
    'testimonials': 'Testimonials',
    
    // Study abroad subsections
    'japan': 'Study in Japan',
    'bekka': 'Bekka Program',
    'languageprogram': 'Language Program',
    'university': 'University Program',
    'universityprogram': 'University Program',
    'japaneselanguageprogram': 'Japanese Language Program',
    
    // Test preparation subsections
    'daigaku': 'Daigaku Program',
    'ielts': 'IELTS',
    'japaneselanguage': 'Japanese Language',
    'pte': 'PTE',
    'sswpreparation': 'SSW Preparation',
    'vocationallanguage': 'Vocational Language',
  };

  /**
   * Format segment to human-readable label
   * Checks mapping first, then falls back to title case
   */
  const formatLabel = (segment: string): string => {
    if (LABEL_MAP[segment]) {
      return LABEL_MAP[segment];
    }
    
    // Fallback: Convert kebab-case/camelCase to Title Case
    return segment
      .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase to spaces
      .replace(/[-_]/g, ' ') // kebab-case to spaces
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  /**
   * Filter out Next.js route groups (segments wrapped in parentheses)
   * Example: (Navigation) or (subpages) should be excluded
   */
  const isRouteGroup = (segment: string): boolean => {
    return segment.startsWith('(') && segment.endsWith(')');
  };

  /**
   * Build breadcrumb items from pathname
   */
  const buildBreadcrumbs = (): BreadcrumbItem[] => {
    if (!pathname || pathname === '/') {
      return [];
    }

    const segments = pathname.split('/').filter(segment => segment && !isRouteGroup(segment));
    const breadcrumbs: BreadcrumbItem[] = [];
    let accumulatedPath = '';

    segments.forEach((segment) => {
      accumulatedPath += `/${segment}`;

      breadcrumbs.push({
        label: formatLabel(segment),
        href: accumulatedPath,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = buildBreadcrumbs();

  if (breadcrumbs.length === 0) {
    return null;
  }

  return (
    <div className="mt-3 px-5 py-3 max-w-7xl text-sm z-50 font-medium rounded-md w-fit">
      <div className="flex items-center gap-2">
        <Link href="/">
          <div className="hover:underline">Home Page</div>
        </Link>
        {breadcrumbs.length > 0 && <div>&gt;</div>}
        
        {breadcrumbs.map((crumb, index) => (
          <div key={crumb.href} className="flex items-center gap-2">
            <Link href={crumb.href}>
              <div className="hover:underline">{crumb.label}</div>
            </Link>
            {index !== breadcrumbs.length - 1 && <div>&gt;</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
