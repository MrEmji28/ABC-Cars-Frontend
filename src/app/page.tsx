'use client';

import { useState, useEffect } from 'react';
import { Search, Car as CarIcon, Wrench, Settings, Paintbrush } from 'lucide-react';
import { apiService, Car, SearchFilters } from '@/lib/api';
import Link from 'next/link';

export default function Home() {
  const [cars, setCars] = useState<Car[]>([]);
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    brand: '',
    model: '',
    year: ''
  });

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const data = await apiService.getCars();
      setCars(data || []);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const filters: SearchFilters = {};
      if (searchFilters.brand) filters.brand = searchFilters.brand;
      if (searchFilters.model) filters.model = searchFilters.model;
      if (searchFilters.year) filters.year = searchFilters.year;
      
      const data = await apiService.getCars(filters);
      setCars(data || []);
    } catch (error) {
      console.error('Error searching cars:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">FIRSTGEAR</div>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-gray-300">Home</Link>
              <Link href="/inventory" className="hover:text-gray-300">Our Inventory</Link>
              <Link href="/services" className="hover:text-gray-300">What We Offer</Link>
              <Link href="/about" className="hover:text-gray-300">About Us</Link>
              <Link href="/contact" className="hover:text-gray-300">Contact Us</Link>
            </nav>
            <div className="flex space-x-4">
              <Link href="/auth/login" className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded">Login</Link>
              <Link href="/auth/register" className="border border-orange-500 hover:bg-orange-500 px-4 py-2 rounded">Register</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700" style={{backgroundImage: 'url(/images/hero.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="text-center z-10">
          <h1 className="text-6xl font-bold mb-4">
            Find your<br />dream car
          </h1>
          <p className="text-xl mb-8 max-w-md mx-auto">
            We can help you find the best car. Check our reviews, compare models and find cars for sale
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded font-semibold">
            EXPLORE →
          </button>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-gray-800 p-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Used Cars For Sale</h2>
          <div className="flex flex-wrap gap-4 mb-6">
            <select 
              className="bg-gray-700 p-3 rounded flex-1 min-w-48"
              value={searchFilters.brand}
              onChange={(e) => setSearchFilters({...searchFilters, brand: e.target.value})}
            >
              <option value="">Select Brand</option>
              <option value="Toyota">Toyota</option>
              <option value="BMW">BMW</option>
              <option value="Mercedes">Mercedes</option>
              <option value="Audi">Audi</option>
            </select>
            <select 
              className="bg-gray-700 p-3 rounded flex-1 min-w-48"
              value={searchFilters.model}
              onChange={(e) => setSearchFilters({...searchFilters, model: e.target.value})}
            >
              <option value="">Select Model</option>
            </select>
            <select 
              className="bg-gray-700 p-3 rounded flex-1 min-w-48"
              value={searchFilters.year}
              onChange={(e) => setSearchFilters({...searchFilters, year: e.target.value})}
            >
              <option value="">Select Year</option>
              {Array.from({length: 25}, (_, i) => 2024 - i).map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <button 
              onClick={handleSearch}
              className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded font-semibold"
            >
              SEARCH
            </button>
          </div>

          {/* Services */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-700 p-6 rounded text-center">
              <CarIcon className="mx-auto mb-2" size={32} />
              <h3 className="font-semibold">Car Service</h3>
            </div>
            <div className="bg-gray-700 p-6 rounded text-center">
              <Wrench className="mx-auto mb-2" size={32} />
              <h3 className="font-semibold">Auto Spa</h3>
            </div>
            <div className="bg-gray-700 p-6 rounded text-center">
              <Settings className="mx-auto mb-2" size={32} />
              <h3 className="font-semibold">Tunning</h3>
            </div>
            <div className="bg-gray-700 p-6 rounded text-center">
              <Paintbrush className="mx-auto mb-2" size={32} />
              <h3 className="font-semibold">Body Shop</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Cars */}
      <section className="p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-2">RECENT CARS</h2>
          <p className="text-gray-400 mb-8">Exquisite Collection of Luxury Cars</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.slice(0, 6).map((car) => (
              <Link key={car.id} href={`/cars/${car.id}`}>
                <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors cursor-pointer">
                  <div className="h-48 bg-gray-700 flex items-center justify-center">
                    {car.image_url ? (
                      <img src={car.image_url} alt={`${car.brand} ${car.model}`} className="w-full h-full object-cover" />
                    ) : (
                      <CarIcon size={64} className="text-gray-500" />
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{car.title}</h3>
                    <p className="text-gray-400">{car.brand} {car.model} ({car.year})</p>
                    <p className="text-orange-500 font-bold text-xl">${car.price.toLocaleString()}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}