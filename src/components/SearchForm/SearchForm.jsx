import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { useSearchParams } from 'react-router-dom';

export const SearchForm = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') || '';

  const handleChange = e => {
    const { value } = e.target;
    if (value === '') return setSearchParams({});
    setSearchParams({ query: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query.trim()) {
      return alert('Enter search text');
    }
    onSubmit(query);
    // setSearchParams({});
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        placeholder="What do you want to write?"
        name="search"
        autoFocus
        value={query}
        onChange={handleChange}
      />
    </SearchFormStyled>
  );
};
