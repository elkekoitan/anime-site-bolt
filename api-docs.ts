import express, { Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../scalar.config.json';

const app = express();

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3001, () => {
  console.log('API server is running on port 3001');
});
