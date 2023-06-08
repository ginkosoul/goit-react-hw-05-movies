import { FilmListItem } from 'components';
import { ListStyled } from './FilmList.styled';

export const FilmList = ({ films }) => {
  return (
    <ListStyled>
      {films.map(e => (
        <FilmListItem key={e.id} {...e} />
      ))}
    </ListStyled>
  );
};
