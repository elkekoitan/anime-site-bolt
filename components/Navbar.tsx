import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Anime Watch Site
        </Link>
        <div className="space-x-4">
          <Link href="/anime" className="text-white hover:text-gray-300">
            Anime List
          </Link>
          <Link href="/api/docs" className="text-white hover:text-gray-300">
            API Docs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
