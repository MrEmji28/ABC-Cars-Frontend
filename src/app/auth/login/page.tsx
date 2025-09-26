'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="container mx-auto p-8 flex justify-center">
        <div className="bg-gray-800 p-8 rounded-lg w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-gray-700 rounded"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 bg-gray-700 rounded"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded font-semibold"
            >
              Login
            </button>
          </form>
          
          <p className="text-center mt-4 text-gray-400">
            Don't have an account? <Link href="/auth/register" className="text-orange-500 hover:underline">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}