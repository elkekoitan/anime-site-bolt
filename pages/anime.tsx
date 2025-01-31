import type { NextPage } from 'next';
import { useState } from 'react';

interface Anime {
  id: number;
  name: string;
  genre: string;
}

const AnimeList: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGenre, setFilterGenre] = useState('');

  const animeList: Anime[] = [
    { id: 1, name: 'One Piece', genre: 'Action, Adventure, Comedy' },
    { id: 2, name: 'Naruto', genre: 'Action, Adventure, Drama' },
    { id: 3, name: 'Attack on Titan', genre: 'Action, Drama, Fantasy' },
    { id: 4, name: 'Demon Slayer', genre: 'Action, Fantasy, Horror' },
    { id: 5, name: 'My Hero Academia', genre: 'Action, Comedy, Drama' },
  ];

  const filteredAnime = animeList
    .filter((anime) =>
      anime.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((anime) =>
      filterGenre ? anime.genre.toLowerCase().includes(filterGenre.toLowerCase()) : true
    );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Anime List
      </h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search anime..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <input
          type="text"
          placeholder="Filter by genre..."
          value={filterGenre}
          onChange={(e) => setFilterGenre(e.target.value)}
          className="border p-2 rounded"
        />
      </div>
      <div className="space-y-2">
        {filteredAnime.map((anime) => (
          <div
            key={anime.id}
            className="bg-white p-4 rounded shadow-sm hover:shadow-md transition-shadow"
          >
            <Link href={`/anime/${anime.id}`} className="font-medium text-gray-900 hover:text-blue-600">
              {anime.name}
            </Link>
            <p className="text-sm text-gray-500">Genre: {anime.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
