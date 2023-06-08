import { ImgStyled } from 'components/ImgStyled';
import { useLocation } from 'react-router-dom';
import { StyledItem } from './FilmList.styled';
import { Genres } from 'components';

const defaultImg =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/390px-No-Image-Placeholder.svg.png';

export const FilmListItem = ({
  id,
  title,
  original_title,
  release_date,
  poster_path,
  backdrop_path,
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
          src={
            poster_path || backdrop_path
              ? `https://image.tmdb.org/t/p/w200/${
                  poster_path || backdrop_path
                }`
              : defaultImg
          }
          style={{ height: '180px', width: '120px' }}
          alt={title || original_title}
        />
        <div>
          <h4 style={{ marginBottom: '4px' }}>{`${
            title || original_title
          } (${new Date(release_date || first_air_date).getFullYear()})`}</h4>
          <b>{vote_average}/10</b>
          <p style={{ marginBottom: '4px' }}>{vote_count}</p>
          <Genres options={genre_ids} />
        </div>
      </StyledItem>
    </li>
  );
};
