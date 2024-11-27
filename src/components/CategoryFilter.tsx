import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
}) => {
  return (
    <div className="flex space-x-4 overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategorySelect(category)}
          className={`px-4 py-2 rounded-full transition-colors whitespace-nowrap
            ${selectedCategory === category 
              ? 'bg-red-600 text-white' 
              : 'bg-gray-800 text-white hover:bg-red-600'}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};