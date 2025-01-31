import express, { Request, Response } from 'express';
import { jsonwebtoken } from 'jsonwebtoken';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
];

app.get('/users', (req: Request, res: Response) => {
  res.json(users);
});

app.listen(3001, () => {
  console.log('API listening on port 3001');
});
