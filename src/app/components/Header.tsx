import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">FIRSTGEAR</Link>
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
  );
}