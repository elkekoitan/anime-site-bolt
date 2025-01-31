import express, { Request, Response } from 'express';
import { GET } from '@scalar-io/http';

const app = express();
app.use(express.json());

const animeList = [
  { id: 1, name: 'One Piece', genre: 'Action, Adventure, Comedy' },
  { id: 2, name: 'Naruto', genre: 'Action, Adventure, Drama' },
];

app.get(
  '/api/anime',
  GET({
    summary: 'Get all anime',
    description: 'Retrieves a list of all anime',
  }),
  (req: Request, res: Response) => {
    res.json(animeList);
  }
);

app.listen(3001, () => {
  console.log('API server is running on port 3001');
});
