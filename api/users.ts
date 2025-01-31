import express, { Request, Response } from 'express';
import { jsonwebtoken } from 'jsonwebtoken';
import cors from 'cors';
import { GET } from '@scalar-io/http';

const app = express();
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
];

app.get('/api/users', GET({
  summary: 'Get all users',
  description: 'Retrieves a list of all users',
}), (req: Request, res: Response) => {
  res.json(users);
});

app.listen(3001, () => {
  console.log('API server is running on port 3001');
});
