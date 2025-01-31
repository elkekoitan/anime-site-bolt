import type { NextPage } from 'next';
import { GET } from '@scalar-io/http';
import { createServer } from 'http';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../scalar.config.json';

const ApiDocs: NextPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        API Documentation
      </h2>
      <p className="text-gray-600 mb-6">
        View the API documentation for the Anime Watch Site
      </p>
      <iframe
        src="/api/docs"
        width="100%"
        height="800px"
        className="border rounded"
      />
    </div>
  );
};

export default ApiDocs;
