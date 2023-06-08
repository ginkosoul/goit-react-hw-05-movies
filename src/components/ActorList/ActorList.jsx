import { ActorCard } from 'components';
import React from 'react';

export const ActorList = ({ cast }) => {
  return (
    <div>
      <h2>Actors:</h2>
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {cast?.map(e => (
          <ActorCard key={e.credit_id} {...e} />
        ))}
      </ul>
    </div>
  );
};
