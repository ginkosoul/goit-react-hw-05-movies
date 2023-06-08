import { ImgStyled } from 'components/ImgStyled';
import { useLocation } from 'react-router-dom';
import { StyledItem } from './FilmList.styled';
import { Genres } from 'components';

export const FilmListItem = ({
  id,
  title,
  name,
  release_date,
  poster_path,
  first_air_date,
  vote_average,
  vote_count,
  genre_ids,
}) => {
  const location = useLocation();
  return (
    <li>
      <StyledItem to={`/movies/${id}`} state={{ from: location }}>
        <ImgStyled
          src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
          width="120"
          alt={title || name}
        />
        <div>
          <h4 style={{ marginBottom: '4px' }}>{`${title || name} (${new Date(
            release_date || first_air_date
          ).getFullYear()})`}</h4>
          <b>{vote_average}/10</b>
          <p style={{ marginBottom: '4px' }}>{vote_count}</p>
          <Genres options={genre_ids} />
        </div>
      </StyledItem>
    </li>
  );
};
