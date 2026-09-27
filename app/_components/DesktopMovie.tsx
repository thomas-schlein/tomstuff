'use client';

import { Movie } from '@/types/movies';
import MoviePosterInfo from './MoviePosterInfo';

export default function DesktopMovie({ movie }: { movie: Movie }) {
  return (
    <div
      style={{
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        gap: 36,
      }}
    >
      <div
        style={{
          flex: 1,
          gap: 16,
          flexDirection: 'column',
          display: 'flex',
          width: '384px',
        }}
      >
        <p className='movieHeader'>{movie.showings?.[0]?.date}</p>
        <div className='movieBody'>
          <p>{movie.showings[0].name}</p>
          <p>{movie.showings[0].showingTime}</p>
        </div>
        <p className='movieBody'>{movie.logline}</p>
      </div>
      <MoviePosterInfo movie={movie} />
    </div>
  );
}
