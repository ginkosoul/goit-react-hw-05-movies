import styled from '@emotion/styled';
import { ImgStyled } from 'components';
import { Suspense, useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { getFilm } from 'services';

const defaultImg =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/390px-No-Image-Placeholder.svg.png';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId, movieType } = useParams();
  const [film, setFilm] = useState(null);
  useEffect(() => {
    getFilm({ movieId, movieType })
      .then(film => setFilm(film))
      .catch(error => console.log(error.message));
  }, [movieId, movieType]);
  const {
    name,
    title,
    first_air_date,
    release_date,
    overview,
    poster_path,
    backdrop_path,
    vote_average,
    vote_count,
    runtime,
    episode_run_time,
    genres,
    tagline,
  } = film || {};
  return (
    <div>
      <StyledLink to={backLinkLocationRef.current}>back</StyledLink>
      {film && (
        <div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <ImgStyled
              src={
                poster_path || backdrop_path
                  ? `https://image.tmdb.org/t/p/w500${
                      poster_path || backdrop_path
                    }`
                  : defaultImg
              }
              alt={title || name}
              width="360"
            />
            <div>
              <h2>{`${title || name} (${new Date(
                release_date || first_air_date
              ).getFullYear()})`}</h2>
              <SubTitle>{tagline}</SubTitle>
              <Info>Rating: {vote_average}</Info>
              <Info>Votes: {vote_count}</Info>
              <Info>Run Time: {runtime || episode_run_time[0]}min</Info>
              <StyledList>
                {genres.map(({ id, name }) => (
                  <StyledItem key={id}>{name}</StyledItem>
                ))}
              </StyledList>
              <Description>{overview}</Description>
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
  margin-bottom: 16px;
`;

const StyledItem = styled.li`
  display: block;
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  border: 1px solid gray;
  color: darkslategray;
  padding: 4px 8px;
  line-height: 1;
`;

const StyledLink = styled(NavLink)`
  display: inline-block;
  border-radius: 4px;
  border: 1px solid gray;
  padding: 5px 10px;
  line-height: 1;
  font-size: 18px;
  font-weight: 600;
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

const SubTitle = styled.p`
  color: gray;
  font-size: 18px;
  font-weight: 600;
`;

const Description = styled.p`
  color: gray;
  font-size: 16px;
  border-radius: 4px;
  padding: 4px 8px;
  border: 1px solid lightgray;
`;

const Info = styled.p`
  color: darkslategray;
  font-size: 16px;
  font-weight: 600;
`;
