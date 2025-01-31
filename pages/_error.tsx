import type { NextPage } from 'next';

const ErrorPage: NextPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Error: Page Not Found
      </h2>
      <p className="text-gray-600">
        The page you're looking for doesn't exist.
      </p>
    </div>
  );
};

export default ErrorPage;
