import { Car as CarIcon, Wrench, Settings, Paintbrush } from 'lucide-react';
import Header from '../components/Header';

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">What We Offer</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-8 rounded-lg">
            <CarIcon className="mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-4">Car Service</h3>
            <p className="text-gray-300">Professional car maintenance and repair services to keep your vehicle running smoothly.</p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-lg">
            <Wrench className="mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-4">Auto Spa</h3>
            <p className="text-gray-300">Complete car detailing and cleaning services to make your car look brand new.</p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-lg">
            <Settings className="mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-4">Tuning</h3>
            <p className="text-gray-300">Performance tuning and modifications to enhance your vehicle's capabilities.</p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-lg">
            <Paintbrush className="mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-4">Body Shop</h3>
            <p className="text-gray-300">Expert body repair and paint services to restore your car's appearance.</p>
          </div>
        </div>
      </div>
    </div>
  );
}