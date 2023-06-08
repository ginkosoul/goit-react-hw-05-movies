import { ImgStyled } from 'components/ImgStyled';

export const ActorCard = ({ profile_path, name, original_name, character }) => {
  return (
    <div style={{ maxWidth: '120px' }}>
      <ImgStyled
        src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
        alt={name || original_name}
        width="120"
        height="180"
      />
      <div>
        <h3>{name || original_name}</h3>
        <p>Role: {character}</p>
      </div>
    </div>
  );
};
