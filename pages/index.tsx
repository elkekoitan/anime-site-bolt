import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Anime Watch Site
      </h1>
      <p className="text-gray-600 mb-6">
        Welcome to our anime watch site
      </p>
      <div className="space-y-4">
        <a
          href="/anime"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          View Anime List
        </a>
        <a
          href="/api/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
        >
          API Documentation
        </a>
      </div>
    </div>
  );
};

export default Home;
