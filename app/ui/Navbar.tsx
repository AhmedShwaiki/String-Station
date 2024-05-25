import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link className="text-gray-300 hover:text-white" href="/shop">
              Shop
            </Link>
            <Link className="text-gray-300 hover:text-white" href="/about">
              About
            </Link>
            <Link className="text-gray-300 hover:text-white" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
