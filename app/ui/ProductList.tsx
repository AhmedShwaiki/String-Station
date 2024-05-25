'use client';

import List from './List';
import ProductCard from './ProductCard';
import { useState } from 'react';

const ProductList = () => {
  // Mock data for demonstration
  const mockData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    title: `Product ${index + 1}`,
    description: `Description of Product ${index + 1}`,
    price: Math.floor(Math.random() * 100) + 1, // Random price between 1 and 100
    rating: Math.floor(Math.random() * 5) + 1, // Random rating between 1 and 5
    image: `https://via.placeholder.com/150?text=Product${index + 1}`, // Placeholder image URL
  }));

  const [layout, setLayout] = useState<'grid' | 'row'>('grid');

  return (
    <>
      <div className="flex justify-end mb-4">
        <button
          className={`mx-2 p-2 rounded ${
            layout === 'grid'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setLayout('grid')}
        >
          Grid
        </button>
        <button
          className={`mx-2 p-2 rounded ${
            layout === 'row'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setLayout('row')}
        >
          Row
        </button>
      </div>
      <List
        items={mockData}
        layout={layout}
        renderItem={item => <ProductCard key={item.id} product={item} />}
      />
    </>
  );
};

export default ProductList;
