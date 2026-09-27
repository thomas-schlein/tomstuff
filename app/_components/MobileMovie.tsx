'use client';

import { Movie } from '@/types/movies';
import MoviePosterInfo from './MoviePosterInfo';

export default function MobileMovie({ movie }: { movie: Movie }) {
  return (
    <div
      style={{
        flex: 1,
        flexDirection: 'column',
        display: 'flex',
      }}
    >
      <div style={{ paddingLeft: 4 }}>
        <p className='movieHeader'>{movie.showings?.[0]?.date}</p>
        <div className='movieBody'>
          <p>{movie.showings[0].name}</p>
          <p>{movie.showings[0].showingTime}</p>
        </div>
      </div>
      <MoviePosterInfo movie={movie} />
    </div>
  );
}
