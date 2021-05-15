import React from 'react';
import { PhotoCard } from '../PhotoCard/index';

// : { photos = [], refetch }

export const ListOfPhotoCardsComponent = ( { photos = [] }) => {
  return (
    <React.Fragment>
      {photos.map(photo => <PhotoCard key={photo.id} id={photo.id} {...photo} />)}
    </React.Fragment>
  )
}

