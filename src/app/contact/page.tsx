'use client';

import { useState } from 'react';
import Header from '../components/Header';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="font-bold">Address</h3>
                <p>123 Main Street<br />City, State 12345</p>
              </div>
              <div>
                <h3 className="font-bold">Phone</h3>
                <p>(555) 123-4567</p>
              </div>
              <div>
                <h3 className="font-bold">Email</h3>
                <p>info@firstgear.com</p>
              </div>
              <div>
                <h3 className="font-bold">Hours</h3>
                <p>Mon-Fri: 9AM-6PM<br />Sat: 9AM-4PM<br />Sun: Closed</p>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-800 rounded"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-800 rounded"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full p-3 bg-gray-800 rounded"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full p-3 bg-gray-800 rounded"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}