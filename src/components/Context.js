import { useState, createContext, useEffect } from 'react'
import { fetchGenres, fetchTopRatedMovies } from 'services';

export const MoviesContext = createContext(null)

export const Context = ({ children }) => {
	const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    useEffect(() => {
        fetchTopRatedMovies()
          .then(results => {
            setMovies(ps => [...ps, ...results]);
          })
          .catch(console.error);
        fetchGenres().then(setGenres)
      }, [])
	return (
		<MoviesContext.Provider
			value={{
				movies,
        setMovies,
        genres
			}}
		>
			{children}
		</MoviesContext.Provider>
	)
}
