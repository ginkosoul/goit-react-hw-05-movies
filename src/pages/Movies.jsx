import { FilmList, SearchForm } from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchFilms } from 'services';

const Movies = () => {
  const [preloadQuery] = useSearchParams();
  const [query, setQuery] = useState(() => preloadQuery.get('query'));
  const [error, setError] = useState(null);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    searchFilms(query)
      .then(res => setFilms(res))
      .catch(err => setError(err));
  }, [query]);
  const handleSubmit = query => {
    setError(null);
    setQuery(query);
  };
  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {films.length > 0 && <FilmList films={films} />}
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default Movies;
