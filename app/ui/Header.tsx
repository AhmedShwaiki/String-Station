import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link className="text-white text-2xl font-bold" href="/">
              String Station
            </Link>
          </div>
          <div className="flex items-center flex-grow">
            <input
              type="text"
              placeholder="Search products..."
              className="flex-grow px-4 py-2 rounded-md text-sm text-gray-900"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Link className="text-gray-300 hover:text-white" href="/cart">
              Cart
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
