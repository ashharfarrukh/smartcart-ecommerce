import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import smartWatch from './assets/smartWatch.jpg';
import speaker from './assets/speaker.jpg';



const mockProducts = [
  {
    id: 1,
    name: 'Smart Watch',
    description: 'Fitness Tracker with heart rate monitor.',
    price: 999,
    category : 'Electronics',
    image: smartWatch ,
  },
  {
    id: 2,
    name: 'Bluetooth Speaker',
    description: 'Portable speaker with powerful bass.',
    price: 599,
    category : 'Electronics',
    image: speaker,
  },
  {
    id: 3,
    name: 'Wireless Headphones',
    description: 'Noise-cancelling over-ear headphones.',
    price: 129.99,
    category : 'Electronics',
    image: 'https://via.placeholder.com/300x200',
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory , setSelectedCategory] = useState('');
  const[selectedPriceRange , setSelectedPriceRange] = useState('');

  const filteredProducts = mockProducts.filter((product) => {
  const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
  const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
  const matchesPrice =
    selectedPriceRange === 'below-1000'
      ? product.price < 1000
      : selectedPriceRange === '1000-5000'
      ? product.price >= 1000 && product.price <= 5000
      : selectedPriceRange === 'above-5000'
      ? product.price > 5000
      : true;

  return matchesSearch && matchesCategory && matchesPrice;
})

  return (
    <div className="min-h-screen p-6 bg-blue-50">
      <h1 className="text-2xl  font-bold mb-4 text-center">SmartCart</h1>

      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className = 'flex gap-4 my-4'>
  <select 
    onChange={(e) => setSelectCategory(e.target.value)}
    calssName = "p-2 border rounded"
    >
      <option value ="">All CAtegories</option>
      <option value="Electronics">Electronics</option>
      <option value="Fashion">Fashion</option>
      <option value="Home">Home</option>
    </select>
      <select
    onChange={(e) => setSelectedPriceRange(e.target.value)}
    className="p-2 border rounded"
  >
    <option value="">All Prices</option>
    <option value="below-1000">Below ₹1000</option>
    <option value="1000-5000">₹1000 - ₹5000</option>
    <option value="above-5000">Above ₹5000</option>
  </select>
</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        {filteredProducts.length === 0 && (
          <div className="text-center col-span-full text-gray-500">
            No products found.
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
