import { Movie } from '@/types/movies';
import Image from 'next/image';

export default function MoviePosterInfo({ movie }: { movie: Movie }) {
  const genres = movie?.genres;
  let genreString = '';
  if (genres?.length > 0) {
    genreString = genres
      .filter((genre) => !!genre)
      .slice(0, 2)
      .map((genre) => ` | ${genre.toUpperCase()}`)
      .join('');
  }

  const info = `${movie.runtime} | ${movie.rating} | ${movie.releaseYear}${genreString ?? ''}`;

  return (
    <div style={{ flex: 1 }}>
      <Image
        src={`/${movie.posterImageName}`}
        alt={movie.title}
        style={{
          borderRadius: '25px',
        }}
        height='569'
        width='384'
        loading='eager'
      />
      <div
        className='bg-primary'
        style={{
          borderBottomLeftRadius: '25px',
          borderBottomRightRadius: '25px',
          marginTop: -30,
          paddingLeft: 10,
          paddingTop: 40,
          paddingBottom: 12,
        }}
      >
        <p className='movieSubheader'>{info}</p>
      </div>
    </div>
  );
}
