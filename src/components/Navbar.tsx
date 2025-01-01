import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Musa Özdemir
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#work" className="text-gray-600 hover:text-gray-900">Work</a>
            <a href="#clients" className="text-gray-600 hover:text-gray-900">Clients</a>
            <a href="#channels" className="text-gray-600 hover:text-gray-900">Channels</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}