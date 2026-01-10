'use client';

import { categories, type BlogCategory } from '@/data/blogData';

interface CategoryFilterProps {
    activeCategory: BlogCategory;
    onCategoryChange: (category: BlogCategory) => void;
}

export default function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
    return (
        <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
                const isActive = activeCategory === category.value;
                return (
                    <button
                        key={category.id}
                        onClick={() => onCategoryChange(category.value as BlogCategory)}
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
