import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'services';
import { ActorList } from 'components';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getCredits(movieId)
      .then(cast => setCast(cast))
      .catch(error => console.log(error.messge));
  }, [movieId]);

  return (
    <div>
      <ActorList cast={cast} />
    </div>
  );
};

export default Cast;
