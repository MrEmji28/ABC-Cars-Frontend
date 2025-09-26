'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Register:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="container mx-auto p-8 flex justify-center">
        <div className="bg-gray-800 p-8 rounded-lg w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 bg-gray-700 rounded"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
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
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 bg-gray-700 rounded"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              required
            />
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded font-semibold"
            >
              Register
            </button>
          </form>
          
          <p className="text-center mt-4 text-gray-400">
            Already have an account? <Link href="/auth/login" className="text-orange-500 hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}