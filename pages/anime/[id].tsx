import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';

interface Anime {
  id: number;
  name: string;
  genre: string;
  description: string;
}

const animeData: Anime[] = [
  { id: 1, name: 'One Piece', genre: 'Action, Adventure, Comedy', description: 'One Piece follows the adventures of Monkey D. Luffy, a young man who sets off on a journey to find the greatest treasure ever left by the legendary pirate, Gold Roger, to become the next Pirate King.' },
  { id: 2, name: 'Naruto', genre: 'Action, Adventure, Drama', description: 'Naruto is a story about a young ninja named Naruto Uzumaki who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.' },
  { id: 3, name: 'Attack on Titan', genre: 'Action, Drama, Fantasy', description: 'Attack on Titan is a story about humanity\'s struggle for survival against giant humanoid creatures known as Titans, and the remnants of humanity who fight back against them.' },
  { id: 4, name: 'Demon Slayer', genre: 'Action, Fantasy, Horror', description: 'Demon Slayer follows Tanjiro Kamado, a young boy who becomes a demon slayer after his family is killed and his sister is turned into a demon.' },
  { id: 5, name: 'My Hero Academia', genre: 'Action, Comedy, Drama', description: 'My Hero Academia is a story about Izuku Midoriya, a boy born without a Quirk who idolizes a hero and dreams of becoming a hero himself.' },
];

const AnimeDetail: NextPage<{ anime: Anime | null }> = ({ anime }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!anime) {
    return <div className="container mx-auto p-4">Anime not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        {anime.name}
      </h2>
      <p className="text-gray-600 mb-6">
        Genre: {anime.genre}
      </p>
      <p className="text-gray-800 mb-6">
        {anime.description}
      </p>
      <a
        href="/anime"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Back to Anime List
      </a>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const anime = animeData.find((anime) => anime.id === parseInt(id as string));

  return {
    props: {
      anime,
    },
  };
};

export default AnimeDetail;
