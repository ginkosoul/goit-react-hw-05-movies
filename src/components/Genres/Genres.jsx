import styled from '@emotion/styled';
import { MoviesContext } from 'components';
import { useContext } from 'react';

export const Genres = ({ options }) => {
  const { genres } = useContext(MoviesContext);
  const genre = genres?.reduce((a, e) => {
    a[e.id] = e.name;
    return a;
  }, {});
  const isLoaded = genres.length && options.length;
  return (
    <StyledList>
      {isLoaded &&
        options.map(e => <StyledItem key={e}>{genre[e]}</StyledItem>)}
    </StyledList>
  );
};

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const StyledItem = styled.li`
  border-radius: 4px;
  border: 1px solid lightgray;
  padding: 2px 4px;
  line-height: 1;
  font-size: 14px;
`;
