import Header from '../components/Header';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        
        <div className="max-w-4xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-300 mb-4">
              FirstGear has been serving customers for over 20 years, providing quality used cars and exceptional service. 
              We pride ourselves on transparency, reliability, and helping customers find their perfect vehicle.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300 mb-4">
              To provide customers with the best car buying experience through honest pricing, quality vehicles, 
              and outstanding customer service.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• Extensive inventory of quality used cars</li>
              <li>• Competitive pricing and financing options</li>
              <li>• Professional inspection of all vehicles</li>
              <li>• Comprehensive warranty coverage</li>
              <li>• Expert automotive services</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}