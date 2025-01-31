import type { NextPage } from 'next';

interface User {
  id: number;
  name: string;
}

const Users: NextPage = () => {
  const users: User[] = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Users List
      </h2>
      <div className="space-y-2">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 rounded shadow-sm hover:shadow-md transition-shadow"
          >
            <p className="font-medium text-gray-900">{user.name}</p>
            <p className="text-sm text-gray-500">ID: {user.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
  </boltArtifact>

  <boltAction type="file" filePath="pages/_error.tsx">
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
  </boltArtifact>

  <boltAction type="file" filePath="styles/globals.css">
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.bg-gray-50 {
  background-color: #f8fafc;
}

.text-gray-800 {
  color: #2d3748;
}

.text-gray-600 {
  color: #4a5568;
}

.font-bold {
  font-weight: 700;
}

.font-semibold {
  font-weight: 600;
}

.rounded {
  border-radius: 0.375rem;
}

.shadow-sm {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.hover\:shadow-md:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.transition-shadow {
  transition: box-shadow 0.2s;
}

.inline-block {
  display: inline-block;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.bg-blue-600 {
  background-color: #3b82f6;
}

.text-white {
  color: white;
}

.hover\:bg-blue-700:hover {
  background-color: #2563eb;
}

.space-y-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.space-y-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.min-h-screen {
  min-height: 100vh;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.p-4 {
  padding: 1rem;
}

.text-xl {
  font-size: 1.25rem;
}

.font-medium {
  font-weight: 500;
}

.text-sm {
  font-size: 0.875rem;
}

.text-gray-500 {
  color: #64748b;
}

.bg-white {
  background-color: white;
}

.hover\:bg-gray-50:hover {
  background-color: #f8fafc;
}

.transition-colors {
  transition: background-color 0.2s;
}

a:hover {
  text-decoration: underline;
}
