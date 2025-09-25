'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Car as CarIcon, ArrowLeft } from 'lucide-react';
import { apiService, Car } from '@/lib/api';
import Link from 'next/link';

export default function CarDetail() {
  const params = useParams();
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      fetchCar(Number(params.id));
    }
  }, [params.id]);

  const fetchCar = async (id: number) => {
    try {
      const data = await apiService.getCar(id);
      setCar(data);
    } catch (error) {
      console.error('Error fetching car:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-xl">Car not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto p-8">
        <Link href="/" className="flex items-center text-orange-500 hover:text-orange-400 mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="h-96 bg-gray-700 flex items-center justify-center">
              {car.image_url ? (
                <img src={car.image_url} alt={`${car.brand} ${car.model}`} className="w-full h-full object-cover" />
              ) : (
                <CarIcon size={128} className="text-gray-500" />
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{car.title}</h1>
              <p className="text-xl text-gray-400">{car.brand} {car.model} ({car.year})</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Price</h2>
              <p className="text-3xl font-bold text-orange-500">${car.price.toLocaleString()}</p>
              {car.rental_price_per_day && (
                <p className="text-lg text-gray-400 mt-2">
                  Rental: ${car.rental_price_per_day}/day
                </p>
              )}
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400">Brand</p>
                  <p className="font-semibold">{car.brand}</p>
                </div>
                <div>
                  <p className="text-gray-400">Model</p>
                  <p className="font-semibold">{car.model}</p>
                </div>
                <div>
                  <p className="text-gray-400">Year</p>
                  <p className="font-semibold">{car.year}</p>
                </div>
                <div>
                  <p className="text-gray-400">Status</p>
                  <p className="font-semibold capitalize">{car.status}</p>
                </div>
                <div>
                  <p className="text-gray-400">Type</p>
                  <p className="font-semibold capitalize">{car.type}</p>
                </div>
              </div>
            </div>

            {car.description && (
              <div className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p className="text-gray-300">{car.description}</p>
              </div>
            )}

            <div className="flex gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded font-semibold flex-1">
                Contact Seller
              </button>
              {car.type !== 'sale' && (
                <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded font-semibold flex-1">
                  Rent Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}