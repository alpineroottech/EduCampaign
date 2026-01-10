'use client';

import { categories, type GalleryCategory } from '@/data/galleryData';

interface FilterTabsProps {
  activeCategory: GalleryCategory;
  onCategoryChange: (category: GalleryCategory) => void;
}

/*
  here is a simple flow of how this component works with example:
  1. The `categories` array is defined in `galleryData.ts` and contains objects with `id`, `label`, and `value` properties.
  2. The `FilterTabs` component receives `activeCategory` and `onCategoryChange` as props.
  3. It maps over the `categories` array to render a button for each category.
  4. Each button has an `onClick` handler that calls `onCategoryChange` with the respective category value.
  5. The button's styling changes based on whether its category matches `activeCategory`, providing visual feedback to the user.
  6. When a button is clicked, the parent component updates the `activeCategory` state, which in turn updates the `FilterTabs` component to reflect the new active category.
  7. This allows users to filter gallery items by category through an intuitive tab interface.
  8. Accessibility features like `aria-label` and `aria-current` are included to enhance usability for screen readers.
  9. The component is styled using Tailwind CSS classes for a modern and responsive design.
  10. Overall, this component provides a user-friendly way to filter gallery items by category.

  
*/

export default function FilterTabs({ activeCategory, onCategoryChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => {
        const isActive = activeCategory === category.value;
        console.log('activeCategory:', activeCategory, ' | category.value:', category.value, ' | isActive:', isActive);
        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.value as GalleryCategory)}
            className={`
              px-6 py-3 rounded-full font-medium transition-all duration-300
              ${isActive
                ? 'bg-[#6B4FA1] text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-purple-50 border border-purple-100 shadow-sm'
              }
            `}
            aria-label={`Filter by ${category.label}`}
            aria-current={isActive ? 'true' : undefined}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
