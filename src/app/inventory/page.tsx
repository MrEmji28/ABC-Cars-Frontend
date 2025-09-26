'use client';

import { useState, useEffect } from 'react';
import { Car as CarIcon } from 'lucide-react';
import { apiService, Car, SearchFilters } from '@/lib/api';
import Link from 'next/link';
import Header from '../components/Header';

export default function Inventory() {
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
      <Header />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Our Inventory</h1>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <div className="flex flex-wrap gap-4 mb-4">
            <select 
              className="bg-gray-700 p-3 rounded flex-1 min-w-48"
              value={searchFilters.brand}
              onChange={(e) => setSearchFilters({...searchFilters, brand: e.target.value})}
            >
              <option value="">All Brands</option>
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
              <option value="">All Models</option>
            </select>
            <select 
              className="bg-gray-700 p-3 rounded flex-1 min-w-48"
              value={searchFilters.year}
              onChange={(e) => setSearchFilters({...searchFilters, year: e.target.value})}
            >
              <option value="">All Years</option>
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
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
    </div>
  );
}