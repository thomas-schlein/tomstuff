import { Movie } from '@/types/movies';
import MovieCarousel from './_components/MovieCarousel';
import { headers } from 'next/headers';

const moviesJson: Movie[] = [
  {
    title: 'Ghost in the Shell',
    logline:
      "As a mysterious computer virus spreads across a hyper-connected world, elite cybernetic operative Major Motoko Kusanagi races to uncover the truth before it's too late.",
    runtime: '1H 23M',
    showings: [
      {
        name: 'AMC Neshaminy',
        showingTime: '6:15 PM',
        date: '09.23.26',
      },
    ],
    posterImageName: 'ghost-shell.png',
    rating: 'NR',
    releaseYear: '1995',
    genres: ['sci-fi', 'anime'],
    styleClassName: 'ghost-shell',
  },
  {
    title: 'Avengers: Endgame Encore',
    logline:
      'After devastating events wiped out half the world’s population, the remaining heroes struggle to move forward. Ultimately, they must come together to restore order and harmony in the universe and bring their loved ones back in a dramatic showdown against Thanos.',
    runtime: '3H 05M',
    showings: [
      {
        name: 'AMC Neshaminy',
        showingTime: '3 PM',
        date: '09.27.26',
        showingDescriptors: 'IMAX',
      },
    ],
    posterImageName: 'avengers-endgame.png',
    rating: 'PG-13',
    releaseYear: '2019',
    genres: ['action'],
    styleClassName: 'avengers-endgame',
  },
];

{
  /* TODO:
  - make MovieCarousel that determines current movie and then DesktopMovies and MobileMovies components
  - make re-usable UI components for each
  - add proxy.js to update viewport header for routing in here
  - make this a server component, pass entire json to UI component (carousel)
  - update Image sizing for phones
  - add animations to individual components and on carousel swipe
  - handle UI flashing when theme is not yet set
*/
}

export default async function Home() {
  const headersList = await headers();
  const viewport = headersList.get('x-viewport');

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        maxWidth: '80%',
        alignSelf: 'center',
        gap: 36,
      }}
    >
      <MovieCarousel movies={moviesJson} viewport={viewport ?? ''} />
    </div>
  );
}
