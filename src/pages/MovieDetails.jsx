import styled from '@emotion/styled';
import { ImgStyled } from 'components';
import { Suspense, useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { getFilm } from 'services';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  useEffect(() => {
    getFilm(movieId)
      .then(film => setFilm(film))
      .catch(error => console.log(error.message));
  }, [movieId]);
  const {
    original_title,
    title,
    overview,
    poster_path,
    vote_average,
    vote_count,
    runtime,
    genres,
  } = film || {};
  return (
    <div>
      <StyledLink to={backLinkLocationRef.current}>back</StyledLink>
      {film && (
        <div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <ImgStyled
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title || original_title}
              width="360"
            />
            <div>
              <h2>{title || original_title}</h2>
              <p>
                <b>Rating:</b>
                {vote_average}
              </p>
              <p>
                <b>Votes:</b>
                {vote_count}
              </p>
              <p>
                <b>Run Time:</b>
                {runtime}min
              </p>
              <StyledList>
                {genres.map(({ id, name }) => (
                  <StyledItem key={id}>{name}</StyledItem>
                ))}
              </StyledList>
              <p>{overview}</p>
              <StyledList>
                <li>
                  <StyledLink to="cast">Cast</StyledLink>
                </li>
                <li>
                  <StyledLink to="reviews">Reviews</StyledLink>
                </li>
              </StyledList>
            </div>
          </div>
          <Suspense fallback={<h2>Loading...</h2>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const StyledItem = styled.li`
  display: block;
  border-radius: 4px;
  border: 1px solid lightgray;
  padding: 4px 8px;
  line-height: 1;
  font-size: 18px;
`;

const StyledLink = styled(NavLink)`
  display: inline-block;
  border-radius: 4px;
  border: 1px solid lightgray;
  padding: 5px 10px;
  line-height: 1;
  font-size: 18px;
  font-weight: 600;
`;
