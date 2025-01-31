import { defineConfig } from '@scalar-io/config';

export default defineConfig({
  openapi: {
    info: {
      title: 'Anime Watch Site API',
      version: '1.0.0',
      description: 'API documentation for the Anime Watch Site',
    },
    servers: [
      {
        url: '/',
        description: 'Development server',
      },
    ],
  },
});
