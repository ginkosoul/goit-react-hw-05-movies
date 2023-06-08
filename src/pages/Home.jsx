import { FilmList, MoviesContext } from 'components';
import { useContext } from 'react';

const Home = () => {
  const { movies } = useContext(MoviesContext);
  // fetchTopRatedMovies();
  return (
    <div>
      <h1>Weekly top</h1>
      <FilmList films={movies} />
    </div>
  );
};

export default Home;
