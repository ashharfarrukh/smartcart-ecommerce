

import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <p className="text-gray-500 text-sm">{product.description}</p>
        <p className="text-indigo-600 font-bold mt-2">₹{product.price}</p>
        <span className="inline-block mt-2 text-xs text-white bg-indigo-500 rounded-full px-2 py-1">
          {product.category}
        </span>
      </div>
    </div>
  );
}
