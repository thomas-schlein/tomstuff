'use client';

import { useEffect, useState } from 'react';
import { Movie } from '@/types/movies';
import DesktopMovie from './DesktopMovie';
import MobileMovie from './MobileMovie';

export default function MovieCarousel({
  movies,
  viewport,
}: {
  movies: Movie[];
  viewport: string;
}) {
  console.log(movies);

  const [movie, setMovie] = useState(movies?.[0]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', movie.styleClassName);
  }, [movie]);

  return (
    <div style={{ flexDirection: 'column' }}>
      {viewport === 'desktop' ? (
        <DesktopMovie movie={movie} />
      ) : (
        <MobileMovie movie={movie} />
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 24,
          gap: 12,
        }}
      >
        {movies?.map((_movie, index) => (
          <a
            key={`${movie.title}_${index}`}
            onClick={() => setMovie(movies?.[index])}
          >
            {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
}
