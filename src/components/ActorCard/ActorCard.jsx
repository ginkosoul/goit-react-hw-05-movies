import { ImgStyled } from 'components/ImgStyled';

const defaultImg =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/390px-No-Image-Placeholder.svg.png';

export const ActorCard = ({ profile_path, name, original_name, character }) => {
  return (
    <div style={{ maxWidth: '120px' }}>
      <ImgStyled
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w200/${profile_path}`
            : defaultImg
        }
        style={{ height: '180px', width: '120px', backgroundImage: 'cover' }}
        alt={name || original_name}
      />
      <div>
        <h3>{name || original_name}</h3>
        <p>Role: {character}</p>
      </div>
    </div>
  );
};
